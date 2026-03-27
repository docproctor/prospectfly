-- ProspectFly: Site Assets Table
-- No dependencies - stores images and files

CREATE TABLE IF NOT EXISTS pf_site_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  alt_text TEXT,
  page_id UUID, -- Optional reference, will be set when pf_site_pages exists
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_pf_site_assets_page_id ON pf_site_assets(page_id);
CREATE INDEX IF NOT EXISTS idx_pf_site_assets_uploaded_by ON pf_site_assets(uploaded_by);

-- Enable RLS
ALTER TABLE pf_site_assets ENABLE ROW LEVEL SECURITY;

-- Public read access for assets (they're served on the public site)
CREATE POLICY "Assets are publicly readable"
  ON pf_site_assets FOR SELECT
  USING (true);

COMMENT ON TABLE pf_site_assets IS 'ProspectFly uploaded images and files for CMS content';
