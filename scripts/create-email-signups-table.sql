-- Create the email_signups table
CREATE TABLE IF NOT EXISTS email_signups (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(100) DEFAULT 'EasyMaid Landing Page',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_signups_email ON email_signups(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_email_signups_created_at ON email_signups(created_at);

-- Add Row Level Security (RLS)
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting and selecting
CREATE POLICY "Allow public insert" ON email_signups
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON email_signups
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);
