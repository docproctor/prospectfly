-- ProspectFly: RLS Policies and Admin Function
-- Run after all tables are created

-- Admin check function (SECURITY DEFINER to avoid recursion)
CREATE OR REPLACE FUNCTION pf_is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM pf_user_profiles
    WHERE id = user_id AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Grant execute to authenticated users
GRANT EXECUTE ON FUNCTION pf_is_admin TO authenticated;

-- ========================================
-- pf_user_profiles policies (admins can manage all)
-- ========================================
CREATE POLICY "Admins can read all profiles"
  ON pf_user_profiles FOR SELECT
  USING (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can update all profiles"
  ON pf_user_profiles FOR UPDATE
  USING (pf_is_admin(auth.uid()));

-- ========================================
-- pf_categories policies (admins can manage)
-- ========================================
CREATE POLICY "Admins can insert categories"
  ON pf_categories FOR INSERT
  WITH CHECK (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can update categories"
  ON pf_categories FOR UPDATE
  USING (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can delete categories"
  ON pf_categories FOR DELETE
  USING (pf_is_admin(auth.uid()));

-- ========================================
-- pf_site_assets policies (admins can manage)
-- ========================================
CREATE POLICY "Admins can insert assets"
  ON pf_site_assets FOR INSERT
  WITH CHECK (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can update assets"
  ON pf_site_assets FOR UPDATE
  USING (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can delete assets"
  ON pf_site_assets FOR DELETE
  USING (pf_is_admin(auth.uid()));

-- ========================================
-- pf_site_pages policies (admins can manage all, authenticated can read drafts)
-- ========================================
CREATE POLICY "Authenticated users can read all pages"
  ON pf_site_pages FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can insert pages"
  ON pf_site_pages FOR INSERT
  WITH CHECK (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can update pages"
  ON pf_site_pages FOR UPDATE
  USING (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can delete pages"
  ON pf_site_pages FOR DELETE
  USING (pf_is_admin(auth.uid()));

-- ========================================
-- pf_seo_templates policies (admins only)
-- ========================================
CREATE POLICY "Admins can read templates"
  ON pf_seo_templates FOR SELECT
  USING (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can insert templates"
  ON pf_seo_templates FOR INSERT
  WITH CHECK (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can update templates"
  ON pf_seo_templates FOR UPDATE
  USING (pf_is_admin(auth.uid()));

CREATE POLICY "Admins can delete templates"
  ON pf_seo_templates FOR DELETE
  USING (pf_is_admin(auth.uid()));

COMMENT ON FUNCTION pf_is_admin IS 'Check if user has admin role in pf_user_profiles';
