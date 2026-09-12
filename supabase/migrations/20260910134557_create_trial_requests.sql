/*
# Create trial_requests table (single-tenant, no auth)

1. New Tables
- `trial_requests`
- `id` (uuid, primary key)
- `name` (text, not null) — visitor's full name
- `email` (text, not null) — visitor's email
- `phone` (text) — visitor's phone number
- `preferred_activity` (text) — which class/discipline they're interested in
- `preferred_day` (text) — which day of the week they'd like to visit
- `message` (text) — optional message from the visitor
- `status` (text, default 'pending') — request status for staff tracking
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `trial_requests`.
- Allow anon + authenticated CRUD because this is a public contact form (no sign-in required).
- Visitors submit their own requests; staff manage them through Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS trial_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  preferred_activity text,
  preferred_day text,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trial_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_trial_requests" ON trial_requests;
CREATE POLICY "anon_select_trial_requests" ON trial_requests FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_trial_requests" ON trial_requests;
CREATE POLICY "anon_insert_trial_requests" ON trial_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_trial_requests" ON trial_requests;
CREATE POLICY "anon_update_trial_requests" ON trial_requests FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_trial_requests" ON trial_requests;
CREATE POLICY "anon_delete_trial_requests" ON trial_requests FOR DELETE
  TO anon, authenticated USING (true);
