import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Times to Play Football in Bangkok Weather — BallR Blog",
  description:
    "A seasonal guide to playing football in Bangkok. Learn the best time slots for hot season, rainy season, and cool season so you can skip the heatstroke and enjoy the game.",
  keywords: [
    "football Bangkok weather",
    "best time play football Bangkok",
    "Bangkok seasons football",
    "pickup football Bangkok",
    "soccer Bangkok heat",
  ],
  openGraph: {
    title: "Best Times to Play Football in Bangkok Weather",
    description:
      "Seasonal breakdown of when to play football outdoors in Bangkok, with tips for surviving each season.",
    type: "article",
    siteName: "BallR",
  },
};

export default function BestTimesPlayFootballBangkokWeatherPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-text-muted hover:text-accent transition-colors mb-8"
        >
          &larr; Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs bg-primary/20 text-accent px-2.5 py-0.5 rounded-lg font-medium">
              Guide
            </span>
            <span className="text-xs text-text-muted">March 2026</span>
            <span className="text-xs text-text-muted">&middot; 4 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Best Times to Play Football in{" "}
            <span className="text-accent">Bangkok Weather</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Bangkok has three seasons: hot, hotter, and underwater. Here&apos;s
            how to plan your football around all of them without melting or
            drowning.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80"
            alt="Football pitch under dramatic sky in Southeast Asia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Article content */}
        <article className="space-y-10">
          <section>
            <p className="text-text-secondary leading-relaxed">
              If you&apos;ve played football in Bangkok for any length of time,
              you already know: the weather is not a minor detail. It&apos;s the
              main character. Picking the right time slot can be the difference
              between a great session and spending the next two days recovering
              from heat exhaustion on your sofa.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              Bangkok basically has three seasons, and each one requires a
              slightly different game plan. Let&apos;s break them down.
            </p>
          </section>

          {/* Hot Season */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Hot Season (March &ndash; May): Survival Mode
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center mb-4">
              <div>
                <p className="text-text-secondary leading-relaxed">
                  This is the one that catches newcomers off guard. Temperatures
                  regularly hit 38&ndash;40&deg;C, and the humidity makes it feel
                  closer to 45. Playing at 2pm in April is technically possible in
                  the same way that running a marathon in a sauna is technically
                  possible. You can, but you shouldn&apos;t.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  The air barely moves, the pitch radiates heat back at you, and
                  your water bottle empties faster than a bar on Khao San Road on
                  a Friday night.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=600&q=80"
                  alt="Football player in intense heat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-surface border border-border/30 rounded-2xl p-5 mt-4">
              <h3 className="font-bold text-sm mb-2 text-accent">Hot Season Tips</h3>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1.5">
                <li>&bull; Play early morning (6&ndash;8am) or after dark (7pm+)</li>
                <li>&bull; Bring at least 2 liters of water per session</li>
                <li>&bull; Shorter games with more subs &mdash; nobody is running 90 minutes in this</li>
                <li>&bull; Indoor pitches become very appealing around mid-April</li>
                <li>&bull; Electrolyte tablets are your best friend</li>
              </ul>
            </div>
          </section>

          {/* Rainy Season */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Rainy Season (June &ndash; October): The Gamble
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center mb-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden sm:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1486128105845-91daff43f404?w=600&q=80"
                  alt="Rain on a football pitch"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-text-secondary leading-relaxed">
                  Rainy season sounds worse than it is. Bangkok doesn&apos;t get
                  all-day drizzle like London. Instead, you get sudden, violent
                  downpours that last 30&ndash;90 minutes and then stop like
                  someone turned off a faucet. The trick is timing.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Rain usually hits in the late afternoon (3&ndash;6pm), which
                  means morning games are generally safe. Evening games after 7pm
                  are also a decent bet since the big storms have usually passed
                  by then. The temperature drops a few degrees too, which is a
                  nice bonus.
                </p>
              </div>
            </div>
            <div className="bg-surface border border-border/30 rounded-2xl p-5 mt-4">
              <h3 className="font-bold text-sm mb-2 text-accent">Rainy Season Tips</h3>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1.5">
                <li>&bull; Schedule games for morning or late evening to dodge storms</li>
                <li>&bull; Turf pitches drain faster than grass &mdash; choose wisely</li>
                <li>&bull; Keep a rain check policy with your group (BallR handles this automatically)</li>
                <li>&bull; Bring a change of clothes and flip-flops for after</li>
                <li>&bull; Puddles on the pitch are features, not bugs &mdash; embrace the slide tackles</li>
              </ul>
            </div>
          </section>

          {/* Cool Season */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Cool Season (November &ndash; February): Peak Football
            </h2>
            <p className="text-text-secondary leading-relaxed">
              This is it. The golden window. Temperatures drop to a comfortable
              25&ndash;32&deg;C, humidity is lower, and the rain mostly stops.
              You can actually play at 4pm without questioning your life choices.
              The locals will be wearing jackets at 26 degrees while you&apos;re
              in shorts wondering what all the fuss is about.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              Cool season is when Bangkok&apos;s football scene is at its busiest.
              Games fill up faster, new players come out of hibernation, and the
              overall vibe is just better. If you&apos;re planning a trip to
              Bangkok and want to play, this is when to come.
            </p>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mt-6">
              <Image
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80"
                alt="Evening football match under floodlights"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-surface border border-border/30 rounded-2xl p-5 mt-4">
              <h3 className="font-bold text-sm mb-2 text-accent">Cool Season Tips</h3>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1.5">
                <li>&bull; Any time slot works, but late afternoon (4&ndash;6pm) is perfect</li>
                <li>&bull; Book pitches early &mdash; everyone wants to play in cool season</li>
                <li>&bull; Great time for longer format games (8v8, 11v11)</li>
                <li>&bull; Still bring water &mdash; 30&deg;C is still hot by most standards</li>
              </ul>
            </div>
          </section>

          {/* Quick Reference */}
          <section>
            <h2 className="text-2xl font-black mb-4">Quick Reference</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  season: "Hot",
                  months: "Mar \u2013 May",
                  bestSlot: "6\u20138am or 7pm+",
                  emoji: "\u2600\uFE0F",
                },
                {
                  season: "Rainy",
                  months: "Jun \u2013 Oct",
                  bestSlot: "Morning or 7pm+",
                  emoji: "\uD83C\uDF27\uFE0F",
                },
                {
                  season: "Cool",
                  months: "Nov \u2013 Feb",
                  bestSlot: "Anytime (4\u20136pm ideal)",
                  emoji: "\uD83D\uDE0E",
                },
              ].map((s) => (
                <div
                  key={s.season}
                  className="bg-surface border border-border/30 rounded-2xl p-5 text-center"
                >
                  <div className="text-2xl mb-2">{s.emoji}</div>
                  <div className="font-bold text-sm">{s.season} Season</div>
                  <div className="text-xs text-text-muted mt-1">{s.months}</div>
                  <div className="text-xs text-accent mt-2 font-medium">
                    Best: {s.bestSlot}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final thoughts */}
          <section>
            <h2 className="text-2xl font-black mb-4">The Bottom Line</h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkok weather is predictable once you understand the patterns.
              The biggest mistake people make is trying to play at the same time
              year-round. Adjust your schedule with the seasons and you&apos;ll
              have a much better time on the pitch &mdash; and off it.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-surface border border-accent/20 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-xl font-black mb-3">
              Find Games That Fit <span className="text-accent">Your Schedule</span>
            </h2>
            <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
              BallR shows you upcoming games with times, locations, and player
              counts &mdash; so you can pick the slot that works for you and the
              weather.
            </p>
            <a
              href="/#download"
              className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105"
            >
              Download BallR
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
