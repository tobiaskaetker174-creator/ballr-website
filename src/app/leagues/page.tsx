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
            THE WORLD IS <span className="text-accent">PLAYING</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary mb-3 font-semibold">
            1,247 leagues. 89 cities. One app.
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
            <a
              href="#start"
              className="border border-accent/50 hover:border-accent text-text font-semibold px-8 py-4 rounded-2xl text-lg transition-all w-full sm:w-auto text-center"
            >
              Start Your Own
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

          <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>

      {/* SECTION 4: START YOUR OWN â 2 options */}
      <section id="start" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-text-muted text-lg mb-4">â OR â</p>
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              START YOUR OWN <span className="text-accent">LEAGUE</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Two ways to bring BallR to your world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Option A: Bring BallR to Your City (Public League â Franchise) */}
            <div className="bg-surface border border-red-400/20 rounded-2xl p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">Official BallR League</span>
              </div>
              <h3 className="text-2xl font-black mb-3">
                Bring BallR to <span className="text-accent">Your City</span>
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                Launch an official public BallR league in your city. Open to everyone,
                managed by you. We give you the tools, the platform, and the support.
                You build the community.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-text-secondary">
                <li className="flex items-center gap-2"><span className="text-accent">â</span> Open to all players in your city</li>
                <li className="flex items-center gap-2"><span className="text-accent">â</span> BallR branding &amp; platform support</li>
                <li className="flex items-center gap-2"><span className="text-accent">â</span> Revenue share &amp; organizer tools</li>
                <li className="flex items-center gap-2"><span className="text-accent">â</span> City-wide leaderboard &amp; rankings</li>
              </ul>
              <Link
                href="/careers"
                className="block bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold text-center py-3 rounded-xl transition-colors"
              >
                Apply as City Organizer â
              </Link>
              <p className="text-text-muted text-xs mt-2 text-center">
                Franchise &amp; organizer opportunities
              </p>
            </div>

            {/* Option B: Start a Private League */}
            <div className="bg-surface border border-yellow-400/20 rounded-2xl p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">Private League</span>
              </div>
              <h3 className="text-2xl font-black mb-3">
                Start a League with <span className="text-accent">Your Crew</span>
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                Create a private, invite-only league for your friends, your office,
                your neighborhood. You set the rules, the schedule, the vibe.
                BallR handles everything else.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-text-secondary">
                <li className="flex items-center gap-2"><span className="text-accent">â</span> Invite-only â your people only</li>
                <li className="flex items-center gap-2"><span className="text-accent">â</span> Your rules, your schedule</li>
                <li className="flex items-center gap-2"><span className="text-accent">â</span> Private leaderboard &amp; stats</li>
                <li className="flex items-center gap-2"><span className="text-accent">â</span> Free to start, no credit card</li>
              </ul>
              <a
                href="#private-preview"
                className="block bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 font-bold text-center py-3 rounded-xl transition-colors"
              >
                See How It Works â
              </a>
              <p className="text-text-muted text-xs mt-2 text-center">
                Takes 60 seconds in the app
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Private League â App Screenshots */}
      <section id="private-preview" className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center gap-2 justify-center mb-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="text-sm text-yellow-400 font-semibold uppercase tracking-wider">Private League</div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Your League, <span className="text-accent">Your Way</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Here&apos;s what it looks like inside the app when you run your own private league.
            </p>
          </div>

          {/* App mockups side by side */}
          <div className="flex gap-8 justify-center flex-wrap md:flex-nowrap mb-12">
            <div className="text-center">
              <CreateLeagueScreen />
              <p className="text-text-muted text-xs mt-3">Create your league in seconds</p>
            </div>
            <div className="text-center">
              <PrivateLeagueScreen />
              <p className="text-text-muted text-xs mt-3">Manage games, stats, leaderboard</p>
            </div>
          </div>

          {/* 3 step explanation */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Name it.", desc: "Pick a name & set your game fee.", icon: "âï¸" },
              { step: "2", title: "Invite them.", desc: "Share a link. They join. Done.", icon: "ð" },
              { step: "3", title: "Play ball.", desc: "BallR handles Elo, payments & stats.", icon: "â½" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">Step {item.step}</div>
                <h3 className="text-lg font-black mb-1">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#download" className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105">
              Start Your Private League
            </a>
            <p className="text-text-muted text-xs mt-3">Free to start. No credit card.</p>
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

      {/* SECTION 7: Feature Comparison â Public vs Private */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Official vs <span className="text-accent">Private</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Public */}
            <div className="bg-surface border border-red-400/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <h3 className="text-lg font-black">Official BallR League</h3>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>Open to anyone in the city</li>
                <li>City-wide ranking</li>
                <li>BallR sets the rules</li>
                <li>Fixed schedule</li>
                <li>Meet new players</li>
                <li>Join existing community</li>
              </ul>
            </div>
            {/* Private */}
            <div className="bg-surface border border-yellow-400/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <h3 className="text-lg font-black">Private League</h3>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>Invite-only</li>
                <li>Your crew&apos;s ranking</li>
                <li>YOU set the rules</li>
                <li>Your schedule</li>
                <li>Play with your people</li>
                <li>BUILD your community</li>
              </ul>
            </div>
          </div>

          {/* Shared features */}
          <div className="bg-surface border border-accent/20 rounded-2xl p-6">
            <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-4 text-center">Both get</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {comparisonFeatures.map((f) => (
                <div key={f.feature} className="flex items-center gap-2">
                  <span className="text-accent text-xs">â</span>
                  <span className="text-sm text-text-secondary">{f.feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#explore" className="bg-primary hover:bg-primary-dark text-text font-bold px-6 py-3 rounded-xl transition-colors text-center">
              Join an Official League
            </a>
            <a href="#private-preview" className="border border-yellow-400/40 hover:border-yellow-400 text-yellow-400 font-bold px-6 py-3 rounded-xl transition-colors text-center">
              Start a Private League
            </a>
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
            YOUR CITY. YOUR RULES.
            <br />
            <span className="text-accent">YOUR LEAGUE.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Start a BallR League in 60 seconds. Free. No credit card. Worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105">
              START YOUR LEAGUE
            </a>
            <a href="#" className="border border-border/50 hover:border-accent/50 text-text-secondary hover:text-text font-semibold px-8 py-4 rounded-2xl text-lg transition-all text-center">
              Download the App
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
