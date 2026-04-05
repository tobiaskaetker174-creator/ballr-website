import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LeagueCard } from "@/components/LeagueCard";
import { LeagueFiltersBar } from "@/components/LeagueFilters";

// Lazy load below-fold components
const EloCalculator = dynamic(() => import("@/components/EloCalculator").then(mod => ({ default: mod.EloCalculator })), {
  loading: () => <div className="h-96 bg-surface/50 animate-pulse rounded-2xl" />,
});

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
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        aria-label="Hero section - Create your football league"
      >
        <Image
          src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1920&q=80"
          alt="People playing football outdoors"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" aria-hidden="true" />

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
              className="bg-accent hover:bg-accent/90 focus:bg-accent/90 focus:ring-4 focus:ring-accent/30 text-background font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 duration-200 w-full sm:w-auto focus:outline-none"
              aria-label="Create your own football league"
            >
              🏆 Create Your League
            </Link>
            <a
              href="#leagues"
              className="border border-border/50 hover:border-accent/50 focus:border-accent focus:ring-4 focus:ring-accent/30 text-text-secondary hover:text-text focus:text-text font-semibold px-8 py-4 rounded-2xl text-lg transition-all w-full sm:w-auto text-center focus:outline-none"
              aria-label="Browse existing football leagues"
            >
              Explore Leagues
            </a>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="py-24 bg-surface/50" aria-label="How to create a league">
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

      {/* Comparison Table - BallR vs Alternatives */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Why <span className="text-accent">BallR?</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              The first platform built for modern pickup football communities.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-surface border border-border/30 rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border/30 bg-surface/50">
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-accent">BallR</th>
                  <th className="px-6 py-4 text-center font-bold text-text-muted">WhatsApp Groups</th>
                  <th className="px-6 py-4 text-center font-bold text-text-muted">Meetup.com</th>
                  <th className="px-6 py-4 text-center font-bold text-text-muted">Facebook Events</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {[
                  { feature: "ELO Rating System", ballr: "✓", whatsapp: "✗", meetup: "✗", facebook: "✗" },
                  { feature: "Auto Team Balancing", ballr: "✓", whatsapp: "✗", meetup: "✗", facebook: "✗" },
                  { feature: "Built-in Payments", ballr: "✓", whatsapp: "Manual", meetup: "✗", facebook: "✗" },
                  { feature: "Player Reliability Score", ballr: "✓", whatsapp: "✗", meetup: "✗", facebook: "✗" },
                  { feature: "Season Tracking", ballr: "✓", whatsapp: "✗", meetup: "✗", facebook: "✗" },
                  { feature: "Private/Public Leagues", ballr: "✓", whatsapp: "Private only", meetup: "Public only", facebook: "Public only" },
                  { feature: "Cost", ballr: "Free", whatsapp: "Free", meetup: "$2-5/mo", facebook: "Free" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-sm">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-accent font-bold">{row.ballr}</td>
                    <td className="px-6 py-4 text-center text-text-muted text-sm">{row.whatsapp}</td>
                    <td className="px-6 py-4 text-center text-text-muted text-sm">{row.meetup}</td>
                    <td className="px-6 py-4 text-center text-text-muted text-sm">{row.facebook}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🏅 Player Spotlight Section */}
      <section className="py-24 bg-gradient-to-b from-surface/50 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              🏅 <span className="text-accent">Player Spotlight</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Meet the legends who are dominating their leagues worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marco D.",
                elo: 1487,
                games: 52,
                winRate: 67,
                quote: "BallR made Bangkok feel like home",
                city: "Bangkok",
              },
              {
                name: "Sofia R.",
                elo: 1523,
                games: 78,
                winRate: 71,
                quote: "Finally, a league that rewards consistency",
                city: "Berlin",
              },
              {
                name: "Lucas M.",
                elo: 1401,
                games: 45,
                winRate: 64,
                quote: "The ELO system keeps everyone competitive",
                city: "Rio de Janeiro",
              },
            ].map((player) => (
              <div
                key={player.name}
                className="relative bg-surface border-2 border-transparent rounded-2xl p-8 overflow-hidden hover:scale-105 transition-transform"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(161, 212, 148, 0.1), rgba(90, 164, 230, 0.1)), linear-gradient(white, white)`,
                  backgroundClip: "padding-box",
                  border: "2px solid transparent",
                  backgroundOrigin: "border-box",
                }}
              >
                {/* Gradient border effect */}
                <div
                  className="absolute inset-0 rounded-2xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, #A1D494 0%, #5BA4E6 100%)`,
                    opacity: 0.2,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-black">{player.name}</h3>
                      <p className="text-sm text-text-muted">{player.city}</p>
                    </div>
                    <div className="text-3xl">⚽</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-surface/50 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-black text-accent">{player.elo}</div>
                      <div className="text-xs text-text-muted uppercase tracking-wide mt-1">ELO</div>
                    </div>
                    <div className="text-center border-l border-r border-border/30">
                      <div className="text-2xl font-black text-accent">{player.games}</div>
                      <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Games</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-accent">{player.winRate}%</div>
                      <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Win Rate</div>
                    </div>
                  </div>

                  <p className="text-text-secondary italic text-sm leading-relaxed">
                    &ldquo;{player.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 This Week on BallR — Live Stats Banner */}
      <section className="py-6 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y border-accent/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
            <div className="text-sm font-semibold text-accent uppercase tracking-widest">📊 This Week on BallR</div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-text-secondary">
              <span className="flex items-center gap-1">
                <span className="text-lg">🎮</span>
                <span className="font-semibold">12 games played</span>
              </span>
              <span className="hidden sm:inline text-accent">·</span>
              <span className="flex items-center gap-1">
                <span className="text-lg">👥</span>
                <span className="font-semibold">94 players matched</span>
              </span>
              <span className="hidden sm:inline text-accent">·</span>
              <span className="flex items-center gap-1">
                <span className="text-lg">🌍</span>
                <span className="font-semibold">3 cities active</span>
              </span>
              <span className="hidden sm:inline text-accent">·</span>
              <span className="flex items-center gap-1">
                <span className="text-lg">📊</span>
                <span className="font-semibold">avg team diff: 12 ELO pts</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Public Leagues — Browse & Filter */}
      <section id="leagues" className="py-24" aria-label="Browse public football leagues">
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
      <section className="py-12 border-y border-border/10" aria-label="Global BallR statistics">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "6", label: "Countries", icon: "🌍" },
              { value: "880+", label: "Players", icon: "⚽" },
              { value: "350+", label: "Games Played", icon: "🏟️" },
              { value: "100%", label: "Community-Run", icon: "🤝" },
            ].map((s) => (
              <div key={s.label} role="group" aria-label={`${s.value} ${s.label}`}>
                <div className="text-3xl mb-1" aria-hidden="true">{s.icon}</div>
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
      <section className="py-24" aria-label="Player testimonials">
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
              <article key={t.name} className="bg-surface border border-border/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image 
                      src={t.img} 
                      alt={`${t.name} from ${t.city}`} 
                      fill 
                      className="object-cover"
                      loading="lazy"
                      quality={80}
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.city}</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-accent font-semibold">{t.league}</span>
                  <span className="text-text-muted">{t.members} members</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Fair Play Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              ⚖️ Safety & <span className="text-accent">Fair Play</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">We protect the community. Verified players, anti-toxicity policies, and player insurance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "✅",
                title: "Verified Players",
                desc: "All players verified via email or phone. Prevents fake accounts and maintains community trust.",
              },
              {
                icon: "🚫",
                title: "Anti-Toxicity Policy",
                desc: "Zero tolerance for abuse, racism, sexism. Report & block features. Violators banned permanently.",
              },
              {
                icon: "🛡️",
                title: "Player Insurance",
                desc: "Every organized game is covered by liability insurance. Play with confidence.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-border/20 rounded-2xl p-8 hover:border-accent/30 transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <p className="text-sm font-bold text-accent uppercase tracking-wide mb-2">Community-First Values</p>
            <p className="text-text-secondary">We're built by players, for players. Your safety and fair play are never negotiable.</p>
          </div>
        </div>
      </section>

      {/* Animated Player Count Ticker */}
      <section className="py-16 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border-y border-accent/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-surface border border-accent/20 rounded-full mb-6">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-text">Live Right Now</span>
          </div>
          <div className="text-5xl sm:text-7xl font-black text-accent mb-3">
            527<span className="text-3xl sm:text-4xl">+</span>
          </div>
          <p className="text-text-secondary text-lg">Players Active Across All Leagues</p>
          <p className="text-text-muted text-sm mt-2">From Bangkok to Berlin. New players joining every day.</p>
        </div>
      </section>

      {/* City Expansion Roadmap */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              🌍 Expansion <span className="text-accent">Roadmap</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">We're growing. Here's where we're headed next.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { city: "Bangkok", country: "🇹🇭", status: "✅ Live", quarter: "Now", players: "340+", color: "border-green-500/50" },
              { city: "Bali", country: "🇮🇩", status: "✅ Live", quarter: "Now", players: "87+", color: "border-green-500/50" },
              { city: "Singapore", country: "🇸🇬", status: "📍 Q2", quarter: "Q2 2026", players: "Coming", color: "border-blue-500/50" },
              { city: "Kuala Lumpur", country: "🇲🇾", status: "📍 Q3", quarter: "Q3 2026", players: "Coming", color: "border-blue-500/50" },
              { city: "Ho Chi Minh", country: "🇻🇳", status: "📍 Q4", quarter: "Q4 2026", players: "Coming", color: "border-blue-500/50" },
            ].map((city, i) => (
              <div key={i} className={`bg-surface border ${city.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform`}>
                <div className="text-3xl mb-2">{city.country}</div>
                <h3 className="font-bold text-lg mb-1">{city.city}</h3>
                <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-3">{city.status}</p>
                <div className="bg-surface/50 rounded-lg p-3 mb-3">
                  <p className="text-xs text-text-muted mb-1">Target</p>
                  <p className="font-bold text-sm">{city.players}</p>
                </div>
                <p className="text-[11px] text-text-muted">{city.quarter}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How ELO Works - Interactive Explainer */}
      <section className="py-16 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Your <span className="text-accent">ELO Journey</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">Every game tells a story. Here&apos;s how your rating evolves.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { elo: '1000', label: 'First Game', desc: 'Everyone starts here. Fair and equal.', emoji: '🌱', color: 'border-green-500/30' },
              { elo: '1150', label: '10 Games In', desc: 'Algorithm learns your style. Rating stabilizes.', emoji: '📈', color: 'border-blue-500/30' },
              { elo: '1350', label: 'League Regular', desc: 'Consistent player. Teams want you.', emoji: '⭐', color: 'border-yellow-500/30' },
              { elo: '1500+', label: 'Top Tier', desc: 'Elite status. Your presence balances any team.', emoji: '👑', color: 'border-accent/50' },
            ].map((stage) => (
              <div key={stage.label} className={`bg-surface border ${stage.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform`}>
                <div className="text-3xl mb-3">{stage.emoji}</div>
                <div className="text-2xl font-black text-accent mb-1">{stage.elo}</div>
                <div className="text-sm font-bold mb-2">{stage.label}</div>
                <p className="text-xs text-text-secondary">{stage.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-text-muted mt-6">
            Based on the Glicko-2 system, adapted for team sports. Win against higher-rated opponents → bigger gains.
          </p>
        </div>
      </section>

      {/* Interactive ELO Calculator */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              🎯 Calculate <span className="text-accent">Your ELO</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Answer 4 quick questions and get your estimated starting ELO rating. See where you'd rank.
            </p>
          </div>
          <EloCalculator />
        </div>
      </section>

      {/* Waitlist / Early Access */}
      <section className="py-16 px-4 sm:px-6" aria-labelledby="waitlist-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="waitlist-heading" className="text-2xl sm:text-3xl font-bold">
            🌍 Coming to Your City
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            BallR is expanding. Join the waitlist to get early access when we launch in your area. Be the first league founder in your city.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 bg-primary border border-primary-dark rounded-xl text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Email for waitlist" />
            <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-background font-semibold rounded-xl transition-all hover:scale-105 whitespace-nowrap">Join Waitlist</button>
          </div>
          <p className="text-text-secondary text-xs mt-3">1,200+ players on the waitlist · Launching in 5 new cities Q2 2026</p>
        </div>
      </section>

      {/* League Types Grid */}
      <section className="py-16 px-4 sm:px-6 bg-primary" aria-labelledby="league-types-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="league-types-heading" className="text-2xl font-bold text-center mb-8">Every Format. Every Level.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { emoji: '⚽', name: '5v5', desc: 'Fast & technical' },
              { emoji: '🏟️', name: '7v7', desc: 'Best of both worlds' },
              { emoji: '🔥', name: '8v8', desc: 'Most popular' },
              { emoji: '⭐', name: '11v11', desc: 'Full pitch glory' },
              { emoji: '🏖️', name: 'Beach', desc: 'Sand & skill' },
              { emoji: '🌙', name: 'Night', desc: 'Floodlit games' },
              { emoji: '👶', name: 'Beginner', desc: 'No judgment zone' },
              { emoji: '🏆', name: 'Competitive', desc: 'Bring your A-game' },
            ].map(({ emoji, name, desc }) => (
              <div key={name} className="p-4 bg-background border border-primary-dark rounded-xl text-center hover:border-accent/50 transition-colors">
                <div className="text-2xl mb-1" aria-hidden="true">{emoji}</div>
                <div className="font-semibold text-text">{name}</div>
                <div className="text-text-secondary text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "BallR",
            "applicationCategory": "SportsApplication",
            "operatingSystem": "iOS, Android, Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Find pickup football games, join with one tap, play with fair ELO-balanced teams. Live in Bangkok & Bali.",
            "url": "https://ballr-website-v2.vercel.app",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "87" }
          })
        }}
      />

      {/* CTA */}
      <section id="download" className="relative py-24 overflow-hidden" aria-label="Get started with BallR">
        <Image
          src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80"
          alt="Football boots on grass"
          fill
          className="object-cover"
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
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
              className="bg-accent hover:bg-accent/90 focus:bg-accent/90 focus:ring-4 focus:ring-accent/30 text-background font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 focus:outline-none"
              aria-label="Create your league now"
            >
              🏆 Create Your League
            </Link>
            <a 
              href="https://app.ballr.club" 
              className="bg-primary hover:bg-primary-dark focus:bg-primary-dark focus:ring-4 focus:ring-primary/30 text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-3 focus:outline-none"
              aria-label="Download the BallR mobile app"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              Get the App
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
