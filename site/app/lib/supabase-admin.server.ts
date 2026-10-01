import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Secret-key (sb_secret_…) client. Bypasses RLS — server-only, never import from client code.
// Created lazily so a missing key fails the request that needs it, not every page render.
let client: SupabaseClient | null = null

export function getSupabaseAdmin() {
  if (!client) {
    const supabaseUrl = process.env.SUPABASE_URL
    const secretKey = process.env.SUPABASE_SECRET_KEY
    if (!supabaseUrl || !secretKey) {
      throw new Error('SUPABASE_URL and SUPABASE_SECRET_KEY must be set')
    }
    client = createClient(supabaseUrl, secretKey, {
      auth: { persistSession: false },
    })
  }
  return client
}
