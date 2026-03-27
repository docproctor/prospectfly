-- ProspectFly: SEO Templates Table
-- Standalone - for programmatic page generation

CREATE TABLE IF NOT EXISTS pf_seo_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  template_body JSONB NOT NULL DEFAULT '[]'::jsonb,
  target_page_type TEXT NOT NULL DEFAULT 'seo',
  placeholders JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Trigger for updated_at
CREATE TRIGGER pf_seo_templates_updated_at
  BEFORE UPDATE ON pf_seo_templates
  FOR EACH ROW
  EXECUTE FUNCTION pf_update_updated_at();

-- Enable RLS
ALTER TABLE pf_seo_templates ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE pf_seo_templates IS 'ProspectFly SEO page templates for programmatic generation';
