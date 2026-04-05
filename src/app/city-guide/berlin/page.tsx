import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Berlin Football Guide — Pitches, Culture & Pickup Games",
  description:
    "The ultimate guide to playing football in Berlin. Best pitches, Bolzplatz culture, expat communities, and how to join the Kreuzberg Kickers league.",
};

const pitches = [
  { name: "Görlitzer Park Cage", type: "Concrete", size: "5v5", price: "Free", area: "Kreuzberg", rating: 4.5 },
  { name: "Tempelhofer Feld", type: "Grass", size: "11v11", price: "Free", area: "Tempelhof", rating: 4.9 },
  { name: "SoccaFive Arena", type: "Turf", size: "5v5", price: "€15/hr", area: "Friedrichshain", rating: 4.7 },
  { name: "Volkspark Friedrichshain", type: "Grass", size: "7v7", price: "Free", area: "Friedrichshain", rating: 4.4 },
  { name: "Hertha BSC Base", type: "Turf", size: "7v7 / 11v11", price: "€25/hr", area: "Charlottenburg", rating: 4.6 },
];

const tips = [
  { icon: "🏗️", title: "Bolzplatz Culture", desc: "Berlin's free concrete cages (Bolzplätze) are sacred. No bookings, no fees — just show up. The unwritten rule: winners stay on." },
  { icon: "🌧️", title: "Weather-Proof Mindset", desc: "Real Berliners play in rain, cold, and sometimes snow. Invest in long-sleeved base layers. The pitch at Tempelhof is exposed — dress for wind." },
  { icon: "🍻", title: "Spätis Are Halftime", desc: "Every game has a Späti (corner shop) nearby. Grab a Berliner Pilsner at halftime. It's not optional, it's tradition." },
  { icon: "🗣️", title: "Language Doesn't Matter", desc: "Berlin pickup games are spectacularly multilingual. English, German, Turkish, Arabic, Spanish — football is the universal language here." },
  { icon: "⚡", title: "Direct Play Style", desc: "Berliners play fast, physical, direct. Less tiki-taka, more pressing and transitions. Bring your fitness." },
  { icon: "📱", title: "Signal Groups > WhatsApp", desc: "Berlin expats organize via Signal, not WhatsApp. Check BallR for game postings, but have Signal ready for last-minute changes." },
];

export default function BerlinGuidePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80"
          alt="Berlin cityscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-8 w-full">
          <Link href="/city-guide" className="text-accent text-sm hover:underline mb-3 inline-block">← All City Guides</Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🇩🇪</span>
            <h1 className="text-4xl sm:text-5xl font-black">Berlin</h1>
          </div>
          <p className="text-text-secondary text-lg max-w-xl">
            Fußball runs through this city&apos;s veins. 210+ players, legendary Bolzplätze, and a pickup scene as diverse as Berlin itself.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-20">
        {/* Quick Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Active Players", value: "210+", icon: "⚽" },
            { label: "Leagues", value: "2", icon: "🏆" },
            { label: "Free Pitches", value: "50+", icon: "🏟️" },
            { label: "Games/Week", value: "6-10", icon: "📅" },
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
            ⚽ Football Culture in <span className="text-accent">Berlin</span>
          </h2>
          <div className="prose prose-invert max-w-none space-y-4 text-text-secondary leading-relaxed">
            <p>
              Berlin&apos;s football culture is built on two pillars: the professional scene (Hertha BSC,
              Union Berlin, and the endless derby debates) and the grassroots Bolzplatz culture that
              makes every neighborhood feel like a footballing village.
            </p>
            <p>
              The Bolzplatz (concrete cage) is sacred in Berlin. There are over 50 public pitches
              scattered across the city, most free and always open. Görlitzer Park in Kreuzberg is the
              epicenter — on any sunny Saturday, you&apos;ll find 3-4 games running simultaneously with
              players from every continent.
            </p>
            <p>
              Berlin&apos;s expat boom has created one of Europe&apos;s most diverse pickup football scenes.
              Tech workers, artists, students, refugees — all meeting on the pitch. The games are
              competitive but inclusive. The post-game Späti beer is non-negotiable.
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
            🧠 Berlin Football <span className="text-accent">Survival Tips</span>
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
                <h3 className="font-bold text-accent mb-2">☀️ Summer (Jun–Aug)</h3>
                <p className="text-text-secondary text-sm">Peak season. Long days, warm nights. Tempelhofer Feld games until 10 PM. This is when Berlin football comes alive.</p>
              </div>
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">🍂 Spring/Autumn</h3>
                <p className="text-text-secondary text-sm">Perfect temperatures (12-20°C). Less crowded pitches. The committed players stay — quality goes up.</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-400 mb-2">❄️ Winter (Dec–Feb)</h3>
                <p className="text-text-secondary text-sm">Hardcore mode. Indoor futsal takes over. Some die-hards still play at Görli in the cold. Respect.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-black mb-4">Ready to play in Berlin?</h2>
          <p className="text-text-secondary mb-6">Join the Kreuzberg Kickers and find your next game.</p>
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
