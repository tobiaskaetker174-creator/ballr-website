import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bali Football Guide — Pitches, Culture & Pickup Games",
  description:
    "The ultimate guide to playing football in Bali. Beach football, sunset sessions, expat communities, and how to join the Canggu Sunset League.",
};

const pitches = [
  { name: "Canggu Beach South", type: "Beach/Sand", size: "5v5 / 6v6", price: "Free", area: "Canggu", rating: 4.9 },
  { name: "Finns Recreation Club", type: "Grass", size: "7v7", price: "150K IDR/hr", area: "Canggu", rating: 4.7 },
  { name: "Bali United Training Ground", type: "Grass", size: "11v11", price: "200K IDR/hr", area: "Gianyar", rating: 4.8 },
  { name: "Seminyak Sports Field", type: "Grass", size: "7v7", price: "100K IDR/hr", area: "Seminyak", rating: 4.3 },
  { name: "Sanur Beach Pitch", type: "Beach/Sand", size: "5v5", price: "Free", area: "Sanur", rating: 4.5 },
];

const tips = [
  { icon: "🌅", title: "Golden Hour Games", desc: "The magic window is 4:30-6:30 PM. The sun drops, the temperature drops, and the light is incredible. Every good Bali game happens at sunset." },
  { icon: "🏖️", title: "Beach Football Is Different", desc: "Sand changes everything. No studs, no speed — it's all about touch, balance, and fitness. Expect to be gassed in 20 minutes if you're not used to it." },
  { icon: "🥥", title: "Coconut Water > Energy Drinks", desc: "Fresh kelapa muda (young coconut) from the warung next to the pitch. 15K IDR. Better than any sports drink." },
  { icon: "🛵", title: "Scooter to the Pitch", desc: "Everyone rides a scooter in Bali. Strap your boots to the seat, dodge the dogs, arrive sweaty. It's part of the experience." },
  { icon: "🙏", title: "Respect Local Games", desc: "Balinese guys play every afternoon on village fields. If you want to join, ask politely. They're usually welcoming but respectful approach matters." },
  { icon: "🍺", title: "Bintang Time", desc: "Post-game ritual: ice-cold Bintang at the nearest beach bar. Watch the sunset you just played through. This is why people move to Bali." },
];

export default function BaliGuidePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80"
          alt="Bali landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-8 w-full">
          <Link href="/city-guide" className="text-accent text-sm hover:underline mb-3 inline-block">← All City Guides</Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🇮🇩</span>
            <h1 className="text-4xl sm:text-5xl font-black">Bali</h1>
          </div>
          <p className="text-text-secondary text-lg max-w-xl">
            Beach football at golden hour. 87+ players, sunset sessions, and the most photogenic pickup games on Earth.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-20">
        {/* Quick Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Active Players", value: "87+", icon: "⚽" },
            { label: "Leagues", value: "1", icon: "🏆" },
            { label: "Beach Pitches", value: "4", icon: "🏖️" },
            { label: "Avg Temp", value: "28°C", icon: "🌡️" },
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
            ⚽ Football Culture in <span className="text-accent">Bali</span>
          </h2>
          <div className="prose prose-invert max-w-none space-y-4 text-text-secondary leading-relaxed">
            <p>
              Bali football is unlike anywhere else. The island&apos;s expat community — digital nomads,
              surfers, yoga teachers, entrepreneurs — has created a uniquely laid-back but surprisingly
              competitive football scene centered in Canggu and Seminyak.
            </p>
            <p>
              Beach football dominates. The stretch of sand south of Echo Beach becomes a pitch every
              evening as the tide goes out. No lines, no refs, no shoes — just pure football on the
              most beautiful &ldquo;pitch&rdquo; you&apos;ll ever play on. The sunset behind you, rice paddies
              in the distance, waves crashing nearby.
            </p>
            <p>
              Indonesian football culture runs deep too. Every village (banjar) has a team and a field.
              Local tournaments draw huge crowds. The Balinese play with incredible natural skill — many
              learned barefoot on dirt pitches. Joining a local game is one of the best cultural
              experiences Bali offers.
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
                  <span className={`px-2.5 py-1 rounded-full font-semibold ${pitch.price === "Free" ? "bg-green-500/10 text-green-400" : "bg-surface/50 border border-border/20"}`}>{pitch.price}</span>
                  <span className="px-2.5 py-1 bg-yellow-500/10 text-yellow-400 rounded-full font-semibold">⭐ {pitch.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Survival Tips */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black mb-6">
            🧠 Bali Football <span className="text-accent">Survival Tips</span>
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
                <h3 className="font-bold text-accent mb-2">☀️ Dry Season (Apr–Oct)</h3>
                <p className="text-text-secondary text-sm">Paradise. Consistent weather, beach football every day, the scene is buzzing with seasonal visitors adding to the community.</p>
              </div>
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">🌊 Shoulder (Mar, Nov)</h3>
                <p className="text-text-secondary text-sm">Occasional rain but still very playable. Fewer crowds at the beach. Locals and long-term expats keep the games going.</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-400 mb-2">🌧️ Wet Season (Dec–Feb)</h3>
                <p className="text-text-secondary text-sm">Afternoon downpours but mornings are often clear. Grass pitches get waterlogged. Beach games shift to mornings. Still fun.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unique: Beach Football Rules */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black mb-6">
            🏖️ Beach Football <span className="text-accent">Unwritten Rules</span>
          </h2>
          <div className="bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                "No shoes. Ever. This is non-negotiable.",
                "Ball goes in the ocean → scorer retrieves it.",
                "Goals are flip-flop piles. Adjust after disputes.",
                "Last goal wins. No exceptions.",
                "Tourists can join. Bad attitudes cannot.",
                "If a dog steals the ball, play pauses for laughing.",
                "Sunset = final 5 minutes. Play faster.",
                "Loser buys the first round of Bintangs.",
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-accent font-bold">{i + 1}.</span>
                  <span className="text-text-secondary">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-black mb-4">Ready to play in Bali?</h2>
          <p className="text-text-secondary mb-6">Join the Canggu Sunset League and find your next game.</p>
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
