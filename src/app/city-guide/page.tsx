import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "City Guides — Football Culture Around the World",
  description:
    "Explore the local football culture in Bangkok, Berlin, and Bali. Find the best pitches, local customs, pickup game tips, and community insights for each city.",
};

const cities = [
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    emoji: "🇹🇭",
    tagline: "Where heat meets hustle on the pitch",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    players: "340+",
    leagues: 3,
    bestTime: "Oct–Feb (cool season)",
    vibe: "Intense, social, sweat-soaked",
  },
  {
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    emoji: "🇩🇪",
    tagline: "Fußball runs through this city's veins",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80",
    players: "210+",
    leagues: 2,
    bestTime: "Apr–Oct (warm months)",
    vibe: "Tactical, diverse, community-driven",
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    emoji: "🇮🇩",
    tagline: "Beach football at golden hour",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    players: "87+",
    leagues: 1,
    bestTime: "Apr–Oct (dry season)",
    vibe: "Chill, expat-heavy, sunset sessions",
  },
];

export default function CityGuidesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-surface border border-border/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-accent font-medium">🌍 City Guides</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Football Culture <span className="text-accent">Worldwide</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Every city plays differently. Discover the local football scene, best pitches,
            pickup customs, and how to join the community.
          </p>
        </div>

        {/* City Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/city-guide/${city.slug}`}
              className="group block bg-surface border border-border/20 rounded-2xl overflow-hidden hover:border-accent/40 transition-all hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={city.image}
                  alt={`Football in ${city.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl">{city.emoji}</span>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-surface/80 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-bold text-accent">{city.players} players</span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-black group-hover:text-accent transition-colors">
                  {city.name}
                </h2>
                <p className="text-sm text-text-muted mb-3">{city.country}</p>
                <p className="text-text-secondary text-sm mb-4 italic">&ldquo;{city.tagline}&rdquo;</p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-surface/50 rounded-lg p-2.5 border border-border/10">
                    <span className="text-text-muted block mb-0.5">Best Time</span>
                    <span className="font-semibold text-text">{city.bestTime}</span>
                  </div>
                  <div className="bg-surface/50 rounded-lg p-2.5 border border-border/10">
                    <span className="text-text-muted block mb-0.5">Vibe</span>
                    <span className="font-semibold text-text">{city.vibe}</span>
                  </div>
                </div>

                <div className="mt-4 text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Explore guide →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
