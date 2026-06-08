-- Aggregated visitor counts by location. No IPs, no per-visitor rows — only
-- one row per (country, region, city) with a running count.
CREATE TABLE IF NOT EXISTS visits (
  key        TEXT PRIMARY KEY,            -- "country|region|city"
  country    TEXT,
  region     TEXT,
  city       TEXT,
  lat        REAL,
  lng        REAL,
  count      INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT
);

-- Per-IP daily rate limit. Stores only a salted, daily-rotated SHA-256 hash of
-- the IP (never the raw IP). Old rows are purged once a new day starts.
CREATE TABLE IF NOT EXISTS rate (
  k   TEXT PRIMARY KEY,   -- sha256(salt | ip | yyyy-mm-dd)
  n   INTEGER NOT NULL DEFAULT 0,
  day TEXT
);
