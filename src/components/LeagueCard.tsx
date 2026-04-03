import Link from "next/link";
import type { League } from "@/lib/types";

export function LeagueCard({ league }: { league: League }) {
  return (
    <Link
      href={`/league/${league.slug}`}
      className="bg-surface border border-border/20 rounded-2xl overflow-hidden hover:border-accent/30 transition-all group block"
    >
      {/* Color banner */}
      <div
        className="h-2"
        style={{ background: `linear-gradient(to right, ${league.primary_color}, ${league.accent_color})` }}
      />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black"
              style={{ backgroundColor: league.primary_color + '30', color: league.accent_color }}
            >
              {league.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-sm group-hover:text-accent transition-colors">
                {league.name}
              </h3>
              {league.city && (
                <p className="text-xs text-text-muted">{league.city}</p>
              )}
            </div>
          </div>
          {league.elo_enabled && (
            <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-semibold">
              ELO
            </span>
          )}
        </div>

        {/* Description */}
        {league.description && (
          <p className="text-text-secondary text-xs leading-relaxed mb-4 line-clamp-2">
            {league.description}
          </p>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="text-text-muted">
              👥 {league.member_count ?? 0} players
            </span>
            <span className="text-text-muted">
              ⚽ {league.max_players_per_team}v{league.max_players_per_team}
            </span>
          </div>
          <span
            className="font-semibold"
            style={{ color: league.accent_color }}
          >
            {league.sport}
          </span>
        </div>

        {/* Join CTA */}
        <div
          className="mt-4 text-xs font-semibold text-center py-2 rounded-lg transition-colors"
          style={{
            backgroundColor: league.primary_color + '20',
            color: league.accent_color,
          }}
        >
          View League →
        </div>
      </div>
    </Link>
  );
}
