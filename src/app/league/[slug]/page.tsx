import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// Demo league data (will be fetched from Supabase in production)
const demoLeagues: Record<string, {
  name: string;
  slug: string;
  description: string;
  city: string;
  primary_color: string;
  accent_color: string;
  sport: string;
  max_players_per_team: number;
  elo_enabled: boolean;
  member_count: number;
  invite_code: string;
  leaderboard: { rank: number; name: string; elo: number }[];
  recentGames: { date: string; teamA: string; teamB: string; scoreA: number; scoreB: number }[];
}> = {
  "bangkok-ballers": {
    name: "Bangkok Ballers",
    slug: "bangkok-ballers",
    description: "The OG BallR league. Pickup football every week across Bangkok. All levels welcome — from total beginners to semi-pros. Games organized 3-4 times per week at venues across Sukhumvit, Sathorn, and Silom.",
    city: "Bangkok",
    primary_color: "#2D5A27",
    accent_color: "#A1D494",
    sport: "football",
    max_players_per_team: 7,
    elo_enabled: true,
    member_count: 340,
    invite_code: "bkk001",
    leaderboard: [
      { rank: 1, name: "NickTheBaller", elo: 1420 },
      { rank: 2, name: "TobiasKicks", elo: 1380 },
      { rank: 3, name: "DonLloret", elo: 1350 },
      { rank: 4, name: "BKK_Marco", elo: 1320 },
      { rank: 5, name: "SamuraiSam", elo: 1290 },
      { rank: 6, name: "ThaiTackle", elo: 1270 },
      { rank: 7, name: "AsokAce", elo: 1250 },
      { rank: 8, name: "SilomSniper", elo: 1230 },
      { rank: 9, name: "PitchKing", elo: 1210 },
      { rank: 10, name: "BenjakittiBoss", elo: 1190 },
    ],
    recentGames: [
      { date: "Apr 2, 2026", teamA: "Team Alpha", teamB: "Team Bravo", scoreA: 4, scoreB: 3 },
      { date: "Mar 30, 2026", teamA: "Team Delta", teamB: "Team Echo", scoreA: 2, scoreB: 2 },
      { date: "Mar 27, 2026", teamA: "Team Foxtrot", teamB: "Team Golf", scoreA: 5, scoreB: 1 },
    ],
  },
  "kreuzberg-kickers": {
    name: "Kreuzberg Kickers",
    slug: "kreuzberg-kickers",
    description: "Berlin's most active pickup football community. Play at Görlitzer Park, Tempelhofer Feld, and indoor arenas.",
    city: "Berlin",
    primary_color: "#1E3A5F",
    accent_color: "#5BA4E6",
    sport: "football",
    max_players_per_team: 7,
    elo_enabled: true,
    member_count: 210,
    invite_code: "bln002",
    leaderboard: [
      { rank: 1, name: "BerlinBaller", elo: 1480 },
      { rank: 2, name: "KreuzbergKing", elo: 1440 },
      { rank: 3, name: "MaxPower", elo: 1390 },
      { rank: 4, name: "FussballFreak", elo: 1350 },
      { rank: 5, name: "DerMeister", elo: 1310 },
    ],
    recentGames: [
      { date: "Apr 1, 2026", teamA: "FC Kreuzberg", teamB: "SC Neukölln", scoreA: 3, scoreB: 2 },
      { date: "Mar 29, 2026", teamA: "Team Mitte", teamB: "Team Prenzlberg", scoreA: 1, scoreB: 4 },
    ],
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const league = demoLeagues[slug];
  if (!league) {
    return { title: "League Not Found — BallR" };
  }
  return {
    title: `${league.name} — BallR`,
    description: league.description,
  };
}

export default async function LeagueDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const league = demoLeagues[slug];

  if (!league) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">League Not Found</h1>
          <p className="text-text-secondary mb-6">This league doesn&apos;t exist or is private.</p>
          <Link href="/leagues" className="text-accent hover:underline">
            Browse public leagues →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* League Header */}
      <section
        className="relative py-16 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${league.primary_color}40 0%, ${league.primary_color}10 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black shrink-0"
              style={{ backgroundColor: league.primary_color, color: league.accent_color }}
            >
              {league.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl font-black">{league.name}</h1>
                <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold">
                  PUBLIC
                </span>
              </div>
              <p className="text-text-secondary text-sm mb-4">{league.city} · {league.sport} · {league.max_players_per_team}v{league.max_players_per_team}</p>
              <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">{league.description}</p>

              <div className="flex items-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-black" style={{ color: league.accent_color }}>{league.member_count}</div>
                  <div className="text-xs text-text-muted">Players</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black" style={{ color: league.accent_color }}>
                    {league.elo_enabled ? "ON" : "OFF"}
                  </div>
                  <div className="text-xs text-text-muted">ELO Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black" style={{ color: league.accent_color }}>
                    {league.recentGames.length}
                  </div>
                  <div className="text-xs text-text-muted">Recent Games</div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="#download"
                  className="text-sm font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
                  style={{ backgroundColor: league.accent_color, color: league.primary_color }}
                >
                  Join League
                </a>
                <button
                  className="border text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
                  style={{ borderColor: league.accent_color + '50', color: league.accent_color }}
                >
                  Share Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Leaderboard */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-black mb-4">🏆 Leaderboard</h2>
              <div className="bg-surface border border-border/20 rounded-2xl overflow-hidden">
                {league.leaderboard.map((player, i) => (
                  <div
                    key={player.name}
                    className={`flex items-center justify-between px-5 py-3 ${
                      i < league.leaderboard.length - 1 ? "border-b border-border/10" : ""
                    } ${i < 3 ? "bg-surface-light/30" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-bold w-6 text-center ${
                        i === 0 ? "text-yellow-400" : i === 1 ? "text-gray-400" : i === 2 ? "text-amber-600" : "text-text-muted"
                      }`}>
                        {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${player.rank}`}
                      </span>
                      <span className="text-sm font-semibold">{player.name}</span>
                    </div>
                    <span className="text-sm font-mono" style={{ color: league.accent_color }}>
                      {player.elo}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Games */}
            <div>
              <h2 className="text-xl font-black mb-4">📅 Recent Games</h2>
              <div className="space-y-3">
                {league.recentGames.map((game, i) => (
                  <div key={i} className="bg-surface border border-border/20 rounded-xl p-4">
                    <div className="text-xs text-text-muted mb-2">{game.date}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{game.teamA}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black" style={{ color: game.scoreA > game.scoreB ? league.accent_color : undefined }}>
                          {game.scoreA}
                        </span>
                        <span className="text-xs text-text-muted">-</span>
                        <span className="text-sm font-black" style={{ color: game.scoreB > game.scoreA ? league.accent_color : undefined }}>
                          {game.scoreB}
                        </span>
                      </div>
                      <span className="text-sm font-semibold">{game.teamB}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Invite Code */}
              <div className="mt-6 bg-surface border border-border/20 rounded-xl p-4 text-center">
                <p className="text-xs text-text-muted mb-2">Invite Code</p>
                <code
                  className="text-lg font-mono font-bold tracking-widest"
                  style={{ color: league.accent_color }}
                >
                  {league.invite_code}
                </code>
                <p className="text-xs text-text-muted mt-2">
                  Share this code to invite players
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="rounded-3xl p-8 sm:p-12"
            style={{
              backgroundColor: league.primary_color + '20',
              borderColor: league.accent_color + '30',
              borderWidth: '1px',
            }}
          >
            <h3 className="text-2xl font-black mb-3">
              Join {league.name}
            </h3>
            <p className="text-text-secondary text-sm mb-6">
              Download BallR, enter invite code <code className="font-mono font-bold" style={{ color: league.accent_color }}>{league.invite_code}</code>, and start playing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://app.ballr.club" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                App Store
              </a>
              <a href="https://app.ballr.club" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" /></svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
