import { supabase } from './supabase';
import type { League, CreateLeagueInput, LeagueFilters } from './types';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export async function getPublicLeagues(filters?: LeagueFilters): Promise<League[]> {
  let query = supabase
    .from('leagues')
    .select('*, league_members(count)')
    .eq('visibility', 'public')
    .order('created_at', { ascending: false });

  if (filters?.city) {
    query = query.ilike('city', `%${filters.city}%`);
  }
  if (filters?.sport) {
    query = query.eq('sport', filters.sport);
  }
  if (filters?.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }

  const { data, error } = await query;
  if (error) throw error;

  return (data ?? []).map((league: Record<string, unknown>) => ({
    ...league,
    member_count: Array.isArray(league.league_members)
      ? (league.league_members[0] as { count: number })?.count ?? 0
      : 0,
  })) as League[];
}

export async function getLeagueBySlug(slug: string): Promise<League | null> {
  const { data, error } = await supabase
    .from('leagues')
    .select('*, league_members(count)')
    .eq('slug', slug)
    .single();

  if (error || !data) return null;

  return {
    ...data,
    member_count: Array.isArray(data.league_members)
      ? (data.league_members[0] as { count: number })?.count ?? 0
      : 0,
  } as League;
}

export async function getLeagueByInviteCode(code: string): Promise<League | null> {
  const { data, error } = await supabase
    .from('leagues')
    .select('*')
    .eq('invite_code', code)
    .single();

  if (error || !data) return null;
  return data as League;
}

export async function createLeague(input: CreateLeagueInput, userId: string): Promise<League> {
  const slug = slugify(input.name) + '-' + Math.random().toString(36).slice(2, 6);

  const { data, error } = await supabase
    .from('leagues')
    .insert({
      name: input.name,
      slug,
      description: input.description ?? null,
      city: input.city ?? null,
      sport: input.sport ?? 'football',
      visibility: input.visibility ?? 'private',
      primary_color: input.primary_color ?? '#2D5A27',
      accent_color: input.accent_color ?? '#A1D494',
      max_players_per_team: input.max_players_per_team ?? 7,
      elo_enabled: input.elo_enabled ?? true,
      rules: input.rules ?? {},
      created_by: userId,
    })
    .select()
    .single();

  if (error) throw error;

  // Auto-add creator as owner
  await supabase.from('league_members').insert({
    league_id: data.id,
    player_id: userId,
    role: 'owner',
  });

  return data as League;
}

export async function joinLeague(leagueId: string, playerId: string): Promise<void> {
  const { error } = await supabase
    .from('league_members')
    .insert({
      league_id: leagueId,
      player_id: playerId,
      role: 'member',
    });

  if (error) throw error;
}

export async function getLeagueMembers(leagueId: string) {
  const { data, error } = await supabase
    .from('league_members')
    .select('*, player:players(id, name, avatar_url, elo)')
    .eq('league_id', leagueId)
    .order('joined_at', { ascending: true });

  if (error) throw error;
  return data;
}
