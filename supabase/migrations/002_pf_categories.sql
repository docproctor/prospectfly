-- ProspectFly: Categories Table
-- No dependencies - create early

CREATE TABLE IF NOT EXISTS pf_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('industry', 'process', 'topic', 'general')),
  description TEXT,
  parent_id UUID REFERENCES pf_categories(id) ON DELETE SET NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_pf_categories_type ON pf_categories(type);
CREATE INDEX IF NOT EXISTS idx_pf_categories_slug ON pf_categories(slug);
CREATE INDEX IF NOT EXISTS idx_pf_categories_parent_id ON pf_categories(parent_id);

-- Trigger for updated_at
CREATE TRIGGER pf_categories_updated_at
  BEFORE UPDATE ON pf_categories
  FOR EACH ROW
  EXECUTE FUNCTION pf_update_updated_at();

-- Enable RLS
ALTER TABLE pf_categories ENABLE ROW LEVEL SECURITY;

-- Public read access for categories
CREATE POLICY "Categories are publicly readable"
  ON pf_categories FOR SELECT
  USING (true);

COMMENT ON TABLE pf_categories IS 'ProspectFly categories for organizing content by industry, process, or topic';
