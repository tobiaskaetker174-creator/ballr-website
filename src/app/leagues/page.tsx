import { WorldMap } from "@/components/WorldMap";
import { ActivityFeed, TickerTape } from "@/components/ActivityFeed";
import { PrivateLeagueScreen, CreateLeagueScreen } from "@/components/AppMockups";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leagues â BallR",
  description: "Explore BallR leagues worldwide. Join public city leagues or start your own private league with friends.",
  keywords: ["pickup football leagues", "football league app", "start football league", "BallR leagues"],
};

const publicLeagues = [
  { city: "Bangkok", flag: "ð¹ð­", players: 340, gamesPerWeek: 12, price: "from 200 THB", rating: 4.8, img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80", slug: "bangkok" },
  { city: "Berlin", flag: "ð©ðª", players: 210, gamesPerWeek: 8, price: "from 5 EUR", rating: 4.6, img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80", slug: "berlin" },
  { city: "Bali", flag: "ð®ð©", players: 87, gamesPerWeek: 4, price: "from 50K IDR", rating: 4.9, img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80", slug: "bali" },
];

const testimonials = [
  { name: "Marcus", city: "Berlin", league: "Kreuzberg Kickers", members: 30, quote: "I started my league in my backyard. Now we're 30 people playing every week.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { name: "Joao", city: "Rio de Janeiro", league: "Copacabana FC", members: 22, quote: "We play every Sunday at the beach. BallR tracks our Elo â it's addictive.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
  { name: "Priya", city: "Singapore", league: "Google SG Ballers", members: 45, quote: "My office started a league. Now HR uses the leaderboard for team building.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
];

const comparisonFeatures = [
  { feature: "Elo Rating System", pub: true, priv: true },
  { feature: "Leaderboards", pub: true, priv: true },
  { feature: "In-App Payments", pub: true, priv: true },
  { feature: "Player Stats & History", pub: true, priv: true },
  { feature: "Season Championships", pub: true, priv: true },
  { feature: "Global BallR Ranking", pub: true, priv: true },
];

export default function LeaguesPage() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&q=80"
          alt="Football match from above"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-4">
            FIND YOUR <span className="text-accent">LEAGUE</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary mb-3 font-semibold">
            Bangkok. Bali. Berlin. More cities coming soon.
          </p>

          {/* Scrolling city names */}
          <div className="overflow-hidden h-8 mb-8">
            <div className="flex animate-marquee whitespace-nowrap">
              {["Bangkok", "Berlin", "Bali", "Madrid", "London", "Sao Paulo", "Lagos", "Barcelona", "Singapore", "Dubai", "Lisbon", "Buenos Aires", "Bangkok", "Berlin", "Bali", "Madrid", "London", "Sao Paulo", "Lagos", "Barcelona"].map((city, i) => (
                <span key={i} className="text-text-muted text-sm mx-4">{city}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#explore"
              className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 duration-200 w-full sm:w-auto"
            >
              Explore Leagues
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive World Map */}
      <section id="explore" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Leagues <span className="text-accent">Worldwide</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From Bangkok to Berlin. Hover over a city to see its leagues.
            </p>
          </div>
          <WorldMap />
        </div>
      </section>

      {/* SECTION 3: Public City Leagues â only Bangkok, Berlin, Bali */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="text-sm text-accent font-semibold uppercase tracking-wider">Official Leagues</div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-2">
              Official BallR Leagues
            </h2>
            <p className="text-text-secondary">One per city. Open to everyone. Show up and play.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicLeagues.map((league) => (
              <Link
                key={league.slug}
                href={`/leagues/${league.slug}`}
                className="bg-surface border border-border/20 rounded-2xl overflow-hidden hover:border-accent/30 transition-all group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={league.img}
                    alt={`Football in ${league.city}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                    <span className="text-sm">{league.flag}</span>
                    <span className="text-xs font-bold text-text">{league.city}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-red-500/20 backdrop-blur-sm rounded-lg px-2 py-0.5">
                    <span className="text-[10px] text-red-400 font-semibold">OFFICIAL</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">{league.players} players</span>
                    <div className="flex items-center gap-1">
                      <span className="text-star text-xs">â</span>
                      <span className="text-xs text-text-secondary">{league.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-text-muted">
                    <span>{league.gamesPerWeek} games/week</span>
                    <span className="text-accent font-semibold">{league.price}</span>
                  </div>
                  <div className="mt-3 bg-primary/20 text-accent text-xs font-semibold text-center py-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                    Join Now
                  </div>
                </div>
              </Link>
            ))}

            {/* Where Next? card */}
            <Link
              href="/vote"
              className="bg-surface border-2 border-dashed border-accent/30 rounded-2xl overflow-hidden hover:border-accent/60 transition-all group flex flex-col items-center justify-center min-h-[200px] p-6 text-center"
            >
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-lg font-black mb-1">Where Next?</h3>
              <p className="text-text-secondary text-sm">Vote for the next BallR city</p>
              <span className="mt-3 text-accent text-sm font-semibold group-hover:underline">Vote Now →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Community testimonials */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-2">
              Started by Players <span className="text-accent">Like You</span>
            </h2>
            <p className="text-text-secondary">Neighborhood leagues, beach leagues, office leagues, expat communities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
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


      {/* SECTION 8: Live Activity Feed */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ActivityFeed />
        </div>
      </section>

      {/* Ticker Tape */}
      <TickerTape />

      {/* SECTION 10: Big CTA */}
      <section id="download" className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80"
          alt="Football boots on grass"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            READY TO <span className="text-accent">PLAY?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Download BallR, find a game tonight, and start building your rating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105">
              Download the App
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
