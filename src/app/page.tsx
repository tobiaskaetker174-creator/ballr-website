import Image from "next/image";
import Link from "next/link";
import { LeagueCard } from "@/components/LeagueCard";
import { LeagueFiltersBar } from "@/components/LeagueFilters";

// Demo data for public leagues (will be replaced by Supabase queries)
const featuredLeagues = [
  {
    id: "1",
    name: "Bangkok Ballers",
    slug: "bangkok-ballers",
    description: "The OG BallR league. Pickup football every week across Bangkok.",
    logo_url: null,
    primary_color: "#2D5A27",
    accent_color: "#A1D494",
    visibility: "public" as const,
    invite_code: "bkk001",
    city: "Bangkok",
    sport: "football",
    max_players_per_team: 7,
    elo_enabled: true,
    member_count: 340,
    rules: {},
    created_by: "",
    created_at: "",
    updated_at: "",
  },
  {
    id: "2",
    name: "Kreuzberg Kickers",
    slug: "kreuzberg-kickers",
    description: "Berlin's most active pickup football community. All levels welcome.",
    logo_url: null,
    primary_color: "#1E3A5F",
    accent_color: "#5BA4E6",
    visibility: "public" as const,
    invite_code: "bln002",
    city: "Berlin",
    sport: "football",
    max_players_per_team: 7,
    elo_enabled: true,
    member_count: 210,
    rules: {},
    created_by: "",
    created_at: "",
    updated_at: "",
  },
  {
    id: "3",
    name: "Canggu Sunset League",
    slug: "canggu-sunset-league",
    description: "Beach + football + Bintang. Every Sunday at sunset.",
    logo_url: null,
    primary_color: "#8B4513",
    accent_color: "#FFB347",
    visibility: "public" as const,
    invite_code: "bali03",
    city: "Bali",
    sport: "football",
    max_players_per_team: 5,
    elo_enabled: true,
    member_count: 87,
    rules: {},
    created_by: "",
    created_at: "",
    updated_at: "",
  },
  {
    id: "4",
    name: "Google SG Ballers",
    slug: "google-sg-ballers",
    description: "Office league for Google Singapore. Internal only (but public stats).",
    logo_url: null,
    primary_color: "#4285F4",
    accent_color: "#34A853",
    visibility: "public" as const,
    invite_code: "goog04",
    city: "Singapore",
    sport: "football",
    max_players_per_team: 6,
    elo_enabled: true,
    member_count: 45,
    rules: {},
    created_by: "",
    created_at: "",
    updated_at: "",
  },
  {
    id: "5",
    name: "Copacabana FC",
    slug: "copacabana-fc",
    description: "Beach football every weekend in Rio. Bring your A-game.",
    logo_url: null,
    primary_color: "#FFD700",
    accent_color: "#009B3A",
    visibility: "public" as const,
    invite_code: "rio005",
    city: "Rio de Janeiro",
    sport: "football",
    max_players_per_team: 5,
    elo_enabled: true,
    member_count: 78,
    rules: {},
    created_by: "",
    created_at: "",
    updated_at: "",
  },
  {
    id: "6",
    name: "Lagos Thunder FC",
    slug: "lagos-thunder-fc",
    description: "Nigeria's fastest-growing pickup football community.",
    logo_url: null,
    primary_color: "#008751",
    accent_color: "#FFFFFF",
    visibility: "public" as const,
    invite_code: "lag006",
    city: "Lagos",
    sport: "football",
    max_players_per_team: 7,
    elo_enabled: true,
    member_count: 120,
    rules: {},
    created_by: "",
    created_at: "",
    updated_at: "",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section — League-first */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1920&q=80"
          alt="People playing football outdoors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-surface border border-border/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-accent font-medium">
              🌍 6 cities · 880+ players · 100% community-run
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Your League.
            <br />
            <span className="text-accent">Your Rules.</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Create your own pickup football league. Set the rules, invite your crew,
            track ELO ratings, and run seasons — all from one app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/create"
              className="bg-accent hover:bg-accent/90 text-background font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 duration-200 w-full sm:w-auto"
            >
              🏆 Create Your League
            </Link>
            <a
              href="#leagues"
              className="border border-border/50 hover:border-accent/50 text-text-secondary hover:text-text font-semibold px-8 py-4 rounded-2xl text-lg transition-all w-full sm:w-auto text-center"
            >
              Explore Leagues
            </a>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Launch a League in <span className="text-accent">60 Seconds</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create",
                desc: "Name your league, set your colors, define the rules. 5v5 or 11v11. ELO on or off. Your call.",
                emoji: "🎨",
              },
              {
                step: "02",
                title: "Invite",
                desc: "Share your invite code. Like a Discord server — anyone with the link can join. Or make it public for the world.",
                emoji: "🔗",
              },
              {
                step: "03",
                title: "Play",
                desc: "Schedule games, auto-balance teams by ELO, track stats, run seasons. The app handles everything.",
                emoji: "⚽",
              },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Leagues — Browse & Filter */}
      <section id="leagues" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Explore <span className="text-accent">Public Leagues</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Browse community-created leagues worldwide. Find one in your city or start your own.
            </p>
          </div>

          <LeagueFiltersBar />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredLeagues.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/leagues"
              className="text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
            >
              View all leagues →
            </Link>
          </div>
        </div>
      </section>

      {/* Global Stats Ticker */}
      <section className="py-12 border-y border-border/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "6", label: "Countries", icon: "🌍" },
              { value: "880+", label: "Players", icon: "⚽" },
              { value: "350+", label: "Games Played", icon: "🏟️" },
              { value: "100%", label: "Community-Run", icon: "🤝" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-accent">{s.value}</div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Built for <span className="text-accent">Every Kind</span> of League
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "🏢 Office Leagues",
                desc: "HR loves it. Create a company league, track standings, crown a quarterly champion. Team building that doesn't suck.",
              },
              {
                title: "🏖️ Expat Communities",
                desc: "New city? Create a league, grow your community organically. Bangkok, Berlin, Bali — anywhere expats play.",
              },
              {
                title: "🏘️ Neighborhood Crews",
                desc: "Your Sunday crew deserves more than a WhatsApp group. Get proper stats, balanced teams, and bragging rights.",
              },
              {
                title: "🏆 Tournament Organizers",
                desc: "Run a seasonal league with standings, playoffs, and awards. Professional-grade tools, zero cost.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-surface border border-border/20 rounded-2xl p-6 hover:border-accent/30 transition-all">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Started by Players <span className="text-accent">Like You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcus",
                city: "Berlin",
                quote: "I started my league in my backyard. Now we're 30 people playing every week.",
                league: "Kreuzberg Kickers",
                members: 30,
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
              },
              {
                name: "Joao",
                city: "Rio de Janeiro",
                quote: "We play every Sunday at the beach. BallR tracks our Elo — it's addictive.",
                league: "Copacabana FC",
                members: 22,
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
              },
              {
                name: "Priya",
                city: "Singapore",
                quote: "My office started a league. Now HR uses the leaderboard for team building.",
                league: "Google SG Ballers",
                members: 45,
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
              },
            ].map((t) => (
              <div key={t.name} className="bg-surface border border-border/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.city}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-accent font-semibold">{t.league}</span>
                  <span className="text-text-muted">{t.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80"
          alt="Football boots on grass"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-6">
            Ready to <span className="text-accent">Lead?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Create your league, invite your crew, and start playing — tonight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/create"
              className="bg-accent hover:bg-accent/90 text-background font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105"
            >
              🏆 Create Your League
            </Link>
            <a href="#" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              Download App
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
