import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bangkok Football Guide — Pitches, Culture & Pickup Games",
  description:
    "The ultimate guide to playing football in Bangkok. Best pitches, when to play, local customs, expat communities, and how to join the Bangkok Ballers league.",
};

const pitches = [
  { name: "Thonglor FC Arena", type: "Turf", size: "7v7", price: "300 THB/hr", area: "Thonglor", rating: 4.8 },
  { name: "The Racquet Club", type: "Turf", size: "5v5 / 7v7", price: "400 THB/hr", area: "Sukhumvit", rating: 4.6 },
  { name: "Siam Sports Land", type: "Grass", size: "11v11", price: "500 THB/hr", area: "Bang Na", rating: 4.5 },
  { name: "Goal Arena Ekamai", type: "Turf", size: "5v5", price: "250 THB/hr", area: "Ekamai", rating: 4.3 },
  { name: "The Pitch BKK", type: "Turf", size: "6v6", price: "350 THB/hr", area: "On Nut", rating: 4.7 },
];

const tips = [
  { icon: "🌡️", title: "Beat the Heat", desc: "Play before 8 AM or after 5 PM. Midday games in Bangkok are brutal. Most leagues schedule sunset slots (5-7 PM) for a reason." },
  { icon: "💧", title: "Hydrate Like Crazy", desc: "You'll lose 2-3 liters per game. Bring electrolytes, not just water. 7-Eleven Pocari Sweat is your best friend." },
  { icon: "🩴", title: "Shoe Game Matters", desc: "Most pitches are turf — bring TF boots. Indoor shoes work too. Don't show up in rubber studs, they'll tear the pitch." },
  { icon: "🤝", title: "Show Up On Time", desc: "Thai culture values punctuality in sports. Being late means you might lose your spot. 10 min early = on time." },
  { icon: "💰", title: "Cash Is King", desc: "Most pitch rentals and game fees are cash only. Split via PromptPay or cash. Typical game fee: 150-200 THB/person." },
  { icon: "🍺", title: "Post-Game Culture", desc: "Beer after football is sacred. Leo or Chang at the pitch-side shop. Bonding happens off the pitch as much as on it." },
];

export default function BangkokGuidePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1920&q=80"
          alt="Bangkok cityscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-8 w-full">
          <Link href="/city-guide" className="text-accent text-sm hover:underline mb-3 inline-block">← All City Guides</Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🇹🇭</span>
            <h1 className="text-4xl sm:text-5xl font-black">Bangkok</h1>
          </div>
          <p className="text-text-secondary text-lg max-w-xl">
            Where heat meets hustle. 340+ players, 3 active leagues, and the most vibrant pickup football scene in Southeast Asia.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-20">
        {/* Quick Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Active Players", value: "340+", icon: "⚽" },
            { label: "Leagues", value: "3", icon: "🏆" },
            { label: "Games/Week", value: "8-12", icon: "📅" },
            { label: "Avg Game Fee", value: "150 THB", icon: "💰" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface border border-border/20 rounded-2xl p-5 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black text-accent">{stat.value}</div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Football Culture */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black mb-6">
            ⚽ Football Culture in <span className="text-accent">Bangkok</span>
          </h2>
          <div className="prose prose-invert max-w-none space-y-4 text-text-secondary leading-relaxed">
            <p>
              Bangkok is a football city to its core. From the street-side futsal courts in every soi to
              the massive stadiums hosting Thai League games, the sport is everywhere. The city&apos;s expat
              community has built an incredible pickup football ecosystem — multicultural, competitive,
              and deeply social.
            </p>
            <p>
              The scene is split between &ldquo;serious&rdquo; leagues (tactical, ELO-tracked, competitive)
              and social games (show up, split teams, have fun). BallR bridges both worlds. Most games
              happen on artificial turf pitches scattered across Sukhumvit, Thonglor, and Ekamai.
            </p>
            <p>
              What makes Bangkok unique: the mix. Any given game might have players from 8+ countries.
              Thai players bring technical flair, Europeans bring tactical discipline, South Americans
              bring flair and passion. It&apos;s football at its most global.
            </p>
          </div>
        </section>

        {/* Best Pitches */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black mb-6">
            🏟️ Best <span className="text-accent">Pitches</span>
          </h2>
          <div className="space-y-3">
            {pitches.map((pitch) => (
              <div key={pitch.name} className="bg-surface border border-border/20 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-accent/30 transition-all">
                <div className="flex-1">
                  <h3 className="font-bold text-text">{pitch.name}</h3>
                  <p className="text-xs text-text-muted mt-0.5">📍 {pitch.area}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-2.5 py-1 bg-accent/10 text-accent rounded-full font-semibold">{pitch.type}</span>
                  <span className="px-2.5 py-1 bg-surface/50 border border-border/20 rounded-full">{pitch.size}</span>
                  <span className="px-2.5 py-1 bg-surface/50 border border-border/20 rounded-full">{pitch.price}</span>
                  <span className="px-2.5 py-1 bg-yellow-500/10 text-yellow-400 rounded-full font-semibold">⭐ {pitch.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Survival Tips */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black mb-6">
            🧠 Bangkok Football <span className="text-accent">Survival Tips</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-surface border border-border/20 rounded-xl p-5 hover:border-accent/20 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{tip.icon}</span>
                  <h3 className="font-bold text-sm">{tip.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Play */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black mb-6">
            📅 Best Time to <span className="text-accent">Play</span>
          </h2>
          <div className="bg-surface border border-border/20 rounded-2xl p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-accent mb-2">🌤️ Cool Season (Nov–Feb)</h3>
                <p className="text-text-secondary text-sm">The golden window. 25-30°C, low humidity. Every league is at peak activity. Book pitches early.</p>
              </div>
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">🔥 Hot Season (Mar–May)</h3>
                <p className="text-text-secondary text-sm">35-40°C. Only the brave play midday. Evening games are still fine. Hydrate or die (figuratively).</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-400 mb-2">🌧️ Rainy Season (Jun–Oct)</h3>
                <p className="text-text-secondary text-sm">Afternoon storms, but they pass quickly. Turf pitches drain well. Some of the best games happen in light rain.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-black mb-4">Ready to play in Bangkok?</h2>
          <p className="text-text-secondary mb-6">Join the Bangkok Ballers league and find your next game.</p>
          <Link
            href="/create"
            className="inline-block bg-accent hover:bg-accent/90 text-background font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105"
          >
            🏆 Join a League
          </Link>
        </section>
      </div>
    </div>
  );
}
