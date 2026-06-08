// Cloudflare Worker: city-level visitor map collector + reader.
//
//   POST /collect  -> reads request.cf (city / region / country / lat / lng of
//                     the visitor) and increments an aggregated counter in D1.
//                     Stores NO IP and no per-visitor identifiers — only counts.
//   GET  /points   -> returns aggregated [{country, region, city, lat, lng, count}]
//                     as JSON (CORS) for the homepage map.
//
// request.cf is populated by Cloudflare for any request that reaches the Worker,
// so the visitor's browser beaconing here gives us their approximate location.

function corsHeaders(request, env) {
  const allowed = (env.ALLOW_ORIGINS || "").split(",").map((s) => s.trim());
  const origin = request.headers.get("Origin") || "";
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0] || "*";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    if (url.pathname === "/collect") {
      return collect(request, env, cors);
    }
    if (url.pathname === "/points") {
      return points(env, cors);
    }
    return new Response("visitor-map worker: POST /collect, GET /points", {
      headers: cors,
    });
  },
};

async function sha256Hex(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function originAllowed(request, env) {
  const allowed = (env.ALLOW_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const origin = request.headers.get("Origin") || "";
  const referer = request.headers.get("Referer") || "";
  return allowed.some(
    (o) => origin === o || referer === o || referer.startsWith(o + "/")
  );
}

async function collect(request, env, cors) {
  // (1) Only accept beacons coming from our own pages.
  if (!originAllowed(request, env)) {
    return new Response(null, { status: 403, headers: cors });
  }

  const cf = request.cf || {};
  const lat = parseFloat(cf.latitude);
  const lng = parseFloat(cf.longitude);

  // Need coordinates to place a dot on the map.
  if (!isFinite(lat) || !isFinite(lng)) {
    return new Response(null, { status: 204, headers: cors });
  }

  // (2) Per-IP daily rate limit. We store only a salted, daily-rotated hash.
  const limit = parseInt(env.RATE_LIMIT_PER_DAY || "5", 10);
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const day = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
  const rkey = await sha256Hex("vm-salt-7c1e9|" + ip + "|" + day);

  const rateRow = await env.DB.prepare(
    `INSERT INTO rate (k, n, day) VALUES (?1, 1, ?2)
     ON CONFLICT(k) DO UPDATE SET n = n + 1
     RETURNING n`
  )
    .bind(rkey, day)
    .first();
  const n = rateRow ? rateRow.n : 1;

  // Purge stale rate rows once per IP per day (only on its first hit).
  if (n === 1) {
    await env.DB.prepare(`DELETE FROM rate WHERE day <> ?1`).bind(day).run();
  }

  if (n > limit) {
    // Over the daily cap for this IP: silently ignore, don't inflate the map.
    return new Response(null, { status: 204, headers: cors });
  }

  const country = cf.country || "";
  const region = cf.region || "";
  const city = cf.city || "";
  const key = `${country}|${region}|${city}`;
  const now = new Date().toISOString();

  await env.DB.prepare(
    `INSERT INTO visits (key, country, region, city, lat, lng, count, updated_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, 1, ?7)
     ON CONFLICT(key) DO UPDATE SET count = count + 1, updated_at = ?7`
  )
    .bind(key, country, region, city, lat, lng, now)
    .run();

  return new Response(null, { status: 204, headers: cors });
}

async function points(env, cors) {
  const { results } = await env.DB.prepare(
    `SELECT country, region, city, lat, lng, count
     FROM visits
     ORDER BY count DESC
     LIMIT 1000`
  ).all();

  return new Response(JSON.stringify(results || []), {
    headers: {
      ...cors,
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=600",
    },
  });
}
