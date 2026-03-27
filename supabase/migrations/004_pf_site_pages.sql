-- ProspectFly: Site Pages Table (Unified content table)
-- References: pf_categories, pf_site_assets

CREATE TABLE IF NOT EXISTS pf_site_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  slug TEXT UNIQUE NOT NULL,

  -- Page classification
  page_type TEXT NOT NULL CHECK (page_type IN ('page', 'blog', 'seo', 'case_study', 'pillar')),
  template TEXT NOT NULL DEFAULT 'standard',
  render_type TEXT NOT NULL DEFAULT 'prerender' CHECK (render_type IN ('prerender', 'ssr')),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),

  -- Content
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  focus_keyword TEXT,
  h1_override TEXT,
  intro_text TEXT,
  body_sections JSONB NOT NULL DEFAULT '[]'::jsonb,
  faq_items JSONB NOT NULL DEFAULT '[]'::jsonb,
  internal_links JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- Relationships
  category_id UUID REFERENCES pf_categories(id) ON DELETE SET NULL,
  parent_pillar_slug TEXT,

  -- CTAs
  cta_label TEXT DEFAULT 'Book a Free Call',
  cta_url TEXT DEFAULT '/contact',

  -- Publishing
  published_at TIMESTAMPTZ,
  noindex BOOLEAN NOT NULL DEFAULT false,

  -- SEO
  schema_markup JSONB NOT NULL DEFAULT '{}'::jsonb,
  og_image_url TEXT,
  canonical_url TEXT,
  featured_image_asset_id UUID REFERENCES pf_site_assets(id) ON DELETE SET NULL,

  -- Case study specific (nullable for other types)
  client_name TEXT,
  industry TEXT,
  challenge TEXT,
  solution TEXT,
  results JSONB,

  -- Blog specific
  author_name TEXT DEFAULT 'ProspectFly Team',

  -- SEO page specific
  seo_industry TEXT,
  seo_process TEXT,
  seo_location TEXT
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_pf_site_pages_status ON pf_site_pages(status);
CREATE INDEX IF NOT EXISTS idx_pf_site_pages_page_type ON pf_site_pages(page_type);
CREATE INDEX IF NOT EXISTS idx_pf_site_pages_slug ON pf_site_pages(slug);
CREATE INDEX IF NOT EXISTS idx_pf_site_pages_category_id ON pf_site_pages(category_id);
CREATE INDEX IF NOT EXISTS idx_pf_site_pages_published_at ON pf_site_pages(published_at);

-- Trigger for updated_at
CREATE TRIGGER pf_site_pages_updated_at
  BEFORE UPDATE ON pf_site_pages
  FOR EACH ROW
  EXECUTE FUNCTION pf_update_updated_at();

-- Enable RLS
ALTER TABLE pf_site_pages ENABLE ROW LEVEL SECURITY;

-- Public can read published pages
CREATE POLICY "Published pages are publicly readable"
  ON pf_site_pages FOR SELECT
  USING (status = 'published');

COMMENT ON TABLE pf_site_pages IS 'ProspectFly unified content table - pages, blog posts, SEO pages, case studies';
