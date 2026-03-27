import { DiscoverScreen, ProfileScreen, LeaderboardScreen, MapScreen } from "@/components/AppMockups";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1920&q=80"
          alt="People playing football outdoors in Bangkok"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-surface border border-border/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-accent font-medium">
              Now live in Bangkok &amp; Bali
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            The App for
            <br />
            <span className="text-accent">Pickup Football.</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            BallR lets you find games, join with one tap, and play â
            with fair teams, real skill ratings, and zero WhatsApp chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 duration-200 w-full sm:w-auto"
            >
              Download BallR
            </a>
            <Link
              href="/different"
              className="border border-border/50 hover:border-accent/50 text-text-secondary hover:text-text font-semibold px-8 py-4 rounded-2xl text-lg transition-all w-full sm:w-auto text-center"
            >
              Why BallR?
            </Link>
          </div>

          <p className="text-text-muted text-xs mt-4">
            Free on iOS &amp; Android.
          </p>
        </div>
      </section>

      {/* App Screens â right after hero, before anything else */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Inside the <span className="text-accent">App</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Browse games, check your stats, climb the leaderboard, find pitches near you.
            </p>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:gap-6 justify-items-center">
            <div className="snap-center shrink-0"><DiscoverScreen /></div>
            <div className="snap-center shrink-0"><ProfileScreen /></div>
            <div className="snap-center shrink-0"><LeaderboardScreen /></div>
            <div className="snap-center shrink-0"><MapScreen /></div>
          </div>
        </div>
      </section>

      {/* How it works â 3 steps */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              How <span className="text-accent">BallR</span> Works
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Three steps. That&apos;s it. From &ldquo;I want to play&rdquo; to actually playing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Find a Game",
                desc: "Open BallR, browse games near you. Filter by skill level, game size, time, and venue. Pick one that fits.",
                img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
                alt: "Friends arriving at a football pitch",
              },
              {
                step: "02",
                title: "Join & Pay",
                desc: "Reserve your spot with one tap. Pay directly in the app. No cash collection drama, no last-minute dropouts.",
                img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",
                alt: "Player lacing up football boots",
              },
              {
                step: "03",
                title: "Show Up & Play",
                desc: "Teams are balanced automatically by skill rating. Just show up, play, and watch your ELO rating move.",
                img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
                alt: "Football on grass ready for kickoff",
              },
            ].map((item) => (
              <div key={item.step} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image src={item.img} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-accent text-background text-xs font-black px-2.5 py-1 rounded-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BallR â 3 core advantages */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              What Makes It <span className="text-accent">Click</span>
            </h2>
          </div>

          {/* #1 â Fair Teams */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">The ELO Advantage</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">
                Fair Teams, Every Game
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every player has an ELO rating based on real game results. When you join a game,
                our algorithm splits the group into balanced teams automatically. No more
                stacked sides. No more arguments about who goes where.
              </p>
              <p className="text-text-muted text-sm">
                Average team ELO difference: less than 15 points.
              </p>
            </div>
            <div className="flex justify-center">
              <LeaderboardScreen />
            </div>
          </div>

          {/* #2 â Reliable Players */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 flex justify-center">
              <ProfileScreen />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">Built-in Accountability</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">
                Know Who Shows Up
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every player has a profile with their reliability score, skill rating,
                and peer reviews. You can see who&apos;s committed before the game starts.
                No-shows get penalized. Consistent players get rewarded.
              </p>
              <p className="text-text-muted text-sm">
                Average player reliability: 94%.
              </p>
            </div>
          </div>

          {/* #3 â Games Everywhere */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">Live Pitch Radar</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">
                Games at Your Fingertips
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                See every available game on a live map. Filter by skill level,
                time, price, game size. Join in seconds. Play tonight.
              </p>
              <p className="text-text-muted text-sm">
                New games added daily across Bangkok and Bali.
              </p>
            </div>
            <div className="flex justify-center">
              <MapScreen />
            </div>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80", alt: "Friends playing football" },
              { src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80", alt: "Players celebrating" },
              { src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80", alt: "Golden hour match" },
              { src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80", alt: "Football on the field" },
            ].map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1920&q=80"
          alt="Team huddle at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40 flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center sm:text-left">
            <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed">
              &ldquo;I moved to Bangkok and had a game within 48 hours.
              No awkward group introductions, just showed up and played.&rdquo;
            </blockquote>
            <p className="text-text-secondary text-sm mt-3">
              â Marco, German expat in Bangkok
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-y border-border/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "87+", label: "Active Players" },
              { value: "100+", label: "Games Played" },
              { value: "2", label: "Cities Live" },
              { value: "4.8", label: "Avg Player Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-accent">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tonight's Game Countdown */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-surface border border-accent/30 rounded-3xl p-8 sm:p-12">
            <div className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">
              Next Game
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Tonight @ The Pitch BKK
            </h3>
            <p className="text-text-secondary mb-6">
              5v5 Intermediate &middot; 6 / 10 spots filled &middot; 250 THB
            </p>
            <div className="flex justify-center gap-4 mb-8">
              {["03", "42", "17"].map((val, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl sm:text-5xl font-black text-accent font-mono">
                    {val}
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    {["hours", "minutes", "seconds"][i]}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#download"
              className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Join This Game
            </a>
            <p className="text-text-muted text-xs mt-3">
              Only 4 spots left.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Download */}
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
            Ready to <span className="text-accent">Play?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Download BallR, find a game tonight, and start building your rating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              App Store
            </a>
            <a href="#" className="bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" /></svg>
              Google Play
            </a>
          </div>
          <p className="text-text-muted text-sm mt-6">
            Let your network know you&apos;re a baller.
          </p>
        </div>
      </section>
    </>
  );
}
