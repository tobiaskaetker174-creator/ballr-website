// BallR Custom Leagues Types

export interface League {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logo_url: string | null;
  primary_color: string;
  accent_color: string;
  rules: LeagueRules;
  visibility: 'private' | 'public';
  invite_code: string;
  city: string | null;
  sport: string;
  max_players_per_team: number;
  elo_enabled: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
  // Computed / joined
  member_count?: number;
  members?: LeagueMember[];
}

export interface LeagueRules {
  min_players?: number;
  max_players?: number;
  elo_start?: number;
  elo_k_factor?: number;
  allow_draws?: boolean;
  game_duration_minutes?: number;
  custom_rules?: string[];
  [key: string]: unknown;
}

export interface LeagueMember {
  id: string;
  league_id: string;
  player_id: string;
  role: 'owner' | 'admin' | 'member';
  joined_at: string;
  player?: {
    id: string;
    name: string;
    avatar_url: string | null;
    elo: number;
  };
}

export interface CreateLeagueInput {
  name: string;
  description?: string;
  city?: string;
  sport?: string;
  visibility?: 'private' | 'public';
  primary_color?: string;
  accent_color?: string;
  max_players_per_team?: number;
  elo_enabled?: boolean;
  rules?: Partial<LeagueRules>;
}

export interface LeagueFilters {
  city?: string;
  sport?: string;
  search?: string;
}
