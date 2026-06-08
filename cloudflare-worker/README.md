# visitor-map Worker (city-level)

Collects approximate visitor locations from `request.cf` (city / region /
country / lat / lng) into a Cloudflare D1 table and serves aggregated points
for the homepage map. Stores **no IPs** and no per-visitor rows — only running
counts per city. No API token needed.

Endpoints:
- `POST /collect` — the homepage beacons here; the Worker reads the visitor's
  `request.cf` geo and `count += 1` for that city.
- `GET /points` — returns `[{country, region, city, lat, lng, count}, ...]`.

## One-time setup

1. **Install + login**:
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. **Create the D1 database** and paste its id into `wrangler.toml`:
   ```bash
   cd cloudflare-worker
   wrangler d1 create visitor-map-db
   # copy the printed database_id -> wrangler.toml -> database_id
   ```

3. **Create the table** (run both remote and, if you want, local):
   ```bash
   wrangler d1 execute visitor-map-db --remote --file=schema.sql
   ```

4. **Deploy**:
   ```bash
   wrangler deploy
   ```
   Note the URL, e.g. `https://visitor-map.<subdomain>.workers.dev`.
   (Optional: put it behind a route on `mcai.uk` for a tidier URL — either works,
   both go through Cloudflare so `request.cf` is populated.)

## Test

```bash
# Record one visit (your own location):
curl -X POST https://visitor-map.<subdomain>.workers.dev/collect
# Read the aggregated points:
curl https://visitor-map.<subdomain>.workers.dev/points
```

Expected `/points`:
```json
[{"country":"GB","region":"Scotland","city":"Edinburgh","lat":55.95,"lng":-3.19,"count":1}]
```

Send me the Worker base URL once `/points` returns data and I'll wire the
homepage map to it.

## Notes
- City-level IP geolocation is approximate (may resolve to a nearby/ISP city).
- The homepage beacons `/collect` once per browser session (sessionStorage), so
  refreshes don't inflate counts.
- Reset all counts: `wrangler d1 execute visitor-map-db --remote --command "DELETE FROM visits;"`
