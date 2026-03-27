-- ProspectFly: User Profiles Table
-- No dependencies - create first

CREATE TABLE IF NOT EXISTS pf_user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT,
  role TEXT NOT NULL DEFAULT 'standard' CHECK (role IN ('admin', 'standard')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for role-based queries
CREATE INDEX IF NOT EXISTS idx_pf_user_profiles_role ON pf_user_profiles(role);

-- Trigger to auto-update updated_at
CREATE OR REPLACE FUNCTION pf_update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER pf_user_profiles_updated_at
  BEFORE UPDATE ON pf_user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION pf_update_updated_at();

-- Enable RLS
ALTER TABLE pf_user_profiles ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile
CREATE POLICY "Users can read own profile"
  ON pf_user_profiles FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own profile (except role)
CREATE POLICY "Users can update own profile"
  ON pf_user_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Allow insert during signup (auth context)
CREATE POLICY "Allow insert on signup"
  ON pf_user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

COMMENT ON TABLE pf_user_profiles IS 'ProspectFly user profiles - extends Supabase auth.users';
