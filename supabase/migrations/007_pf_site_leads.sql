-- ProspectFly: Site Leads Table
-- Lead capture from ad landing pages (e.g. /linkedin-ads-saas).
-- Written only by the public site's server action using the Supabase secret key.

CREATE TABLE IF NOT EXISTS pf_site_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Lead details
  name TEXT NOT NULL CHECK (char_length(name) >= 1 AND char_length(name) <= 100),
  email TEXT NOT NULL CHECK (char_length(email) >= 3 AND char_length(email) <= 200),
  company_url TEXT,
  annual_contract_value TEXT,
  message TEXT,

  -- Attribution
  source TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  li_fat_id TEXT,
  referrer TEXT,
  landing_path TEXT,

  -- Rate limiting (salted SHA-256 of the client IP, never the raw IP)
  ip_hash TEXT,

  -- Follow-up
  booked BOOLEAN NOT NULL DEFAULT FALSE,
  handled BOOLEAN NOT NULL DEFAULT FALSE,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_pf_site_leads_created_at ON pf_site_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pf_site_leads_source ON pf_site_leads (source);
CREATE INDEX IF NOT EXISTS idx_pf_site_leads_campaign ON pf_site_leads (utm_campaign, utm_content);
CREATE INDEX IF NOT EXISTS idx_pf_site_leads_ip_hash ON pf_site_leads (ip_hash, created_at DESC);

-- RLS on with no policies: anon and authenticated roles can neither read nor
-- write. The secret key bypasses RLS and is the only writer.
ALTER TABLE pf_site_leads ENABLE ROW LEVEL SECURITY;
