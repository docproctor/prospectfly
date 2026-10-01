-- ProspectFly: track when the Loom video was sent for each lead.
-- Additive only. Null means the video is still owed.
--   loom_sent_at — when the video went out
--   booked       — booked a call after watching the video
--   handled      — I have dealt with this row

ALTER TABLE pf_site_leads
  ADD COLUMN IF NOT EXISTS loom_sent_at TIMESTAMPTZ;
