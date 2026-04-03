-- ============================================================
-- BallR Pivot: Custom Leagues System
-- Migration: Create leagues + league_members tables
-- Date: 2026-04-03
-- ============================================================

-- 1. Leagues table
CREATE TABLE IF NOT EXISTS leagues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  logo_url TEXT,
  primary_color TEXT DEFAULT '#2D5A27',
  accent_color TEXT DEFAULT '#A1D494',
  rules JSONB DEFAULT '{}',
  visibility TEXT DEFAULT 'private' CHECK (visibility IN ('private', 'public')),
  invite_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(6), 'hex'),
  city TEXT,
  sport TEXT DEFAULT 'football',
  max_players_per_team INT DEFAULT 7,
  elo_enabled BOOLEAN DEFAULT true,
  created_by UUID REFERENCES players(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. League membership
CREATE TABLE IF NOT EXISTS league_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  league_id UUID REFERENCES leagues(id) ON DELETE CASCADE,
  player_id UUID REFERENCES players(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
  joined_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(league_id, player_id)
);

-- 3. Add league_id to games (if games table exists)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'games') THEN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'games' AND column_name = 'league_id') THEN
      ALTER TABLE games ADD COLUMN league_id UUID REFERENCES leagues(id);
    END IF;
  END IF;
END $$;

-- 4. Indexes
CREATE INDEX IF NOT EXISTS idx_leagues_public ON leagues(visibility) WHERE visibility = 'public';
CREATE INDEX IF NOT EXISTS idx_leagues_city ON leagues(city);
CREATE INDEX IF NOT EXISTS idx_leagues_slug ON leagues(slug);
CREATE INDEX IF NOT EXISTS idx_leagues_invite_code ON leagues(invite_code);
CREATE INDEX IF NOT EXISTS idx_league_members_league ON league_members(league_id);
CREATE INDEX IF NOT EXISTS idx_league_members_player ON league_members(player_id);

-- 5. Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_leagues_updated_at ON leagues;
CREATE TRIGGER update_leagues_updated_at
  BEFORE UPDATE ON leagues
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 6. RLS Policies
ALTER TABLE leagues ENABLE ROW LEVEL SECURITY;
ALTER TABLE league_members ENABLE ROW LEVEL SECURITY;

-- Anyone can read public leagues
CREATE POLICY "Public leagues are viewable by everyone"
  ON leagues FOR SELECT
  USING (visibility = 'public');

-- Authenticated users can read leagues they're members of
CREATE POLICY "Members can view their leagues"
  ON leagues FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM league_members
      WHERE league_members.league_id = leagues.id
      AND league_members.player_id = auth.uid()
    )
  );

-- Authenticated users can create leagues
CREATE POLICY "Authenticated users can create leagues"
  ON leagues FOR INSERT
  WITH CHECK (auth.uid() = created_by);

-- Only owners/admins can update leagues
CREATE POLICY "Owners and admins can update leagues"
  ON leagues FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM league_members
      WHERE league_members.league_id = leagues.id
      AND league_members.player_id = auth.uid()
      AND league_members.role IN ('owner', 'admin')
    )
  );

-- League members policies
CREATE POLICY "Members can view league members"
  ON league_members FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM league_members lm
      WHERE lm.league_id = league_members.league_id
      AND lm.player_id = auth.uid()
    )
    OR
    EXISTS (
      SELECT 1 FROM leagues
      WHERE leagues.id = league_members.league_id
      AND leagues.visibility = 'public'
    )
  );

-- Users can join leagues (insert themselves)
CREATE POLICY "Users can join leagues"
  ON league_members FOR INSERT
  WITH CHECK (auth.uid() = player_id);

-- Owners can manage members
CREATE POLICY "Owners can manage members"
  ON league_members FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM league_members lm
      WHERE lm.league_id = league_members.league_id
      AND lm.player_id = auth.uid()
      AND lm.role = 'owner'
    )
  );
