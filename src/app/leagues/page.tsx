import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LeagueCard } from "@/components/LeagueCard";
import { LeagueFiltersBar } from "@/components/LeagueFilters";
import type { League } from "@/lib/types";

export const metadata: Metadata = {
  title: "Browse Leagues — BallR",
  description: "Explore public pickup football leagues worldwide. Join one near you or create your own.",
  keywords: ["pickup football leagues", "football league app", "start football league", "BallR leagues"],
};

// Demo data — will be fetched from Supabase
const allPublicLeagues: League[] = [
  {
    id: "1", name: "Bangkok Ballers", slug: "bangkok-ballers",
    description: "The OG BallR league. Pickup football every week across Bangkok.",
    logo_url: null, primary_color: "#2D5A27", accent_color: "#A1D494",
    visibility: "public", invite_code: "bkk001", city: "Bangkok", sport: "football",
    max_players_per_team: 7, elo_enabled: true, member_count: 340,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
  {
    id: "2", name: "Kreuzberg Kickers", slug: "kreuzberg-kickers",
    description: "Berlin's most active pickup football community. All levels welcome.",
    logo_url: null, primary_color: "#1E3A5F", accent_color: "#5BA4E6",
    visibility: "public", invite_code: "bln002", city: "Berlin", sport: "football",
    max_players_per_team: 7, elo_enabled: true, member_count: 210,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
  {
    id: "3", name: "Canggu Sunset League", slug: "canggu-sunset-league",
    description: "Beach + football + Bintang. Every Sunday at sunset in Canggu.",
    logo_url: null, primary_color: "#8B4513", accent_color: "#FFB347",
    visibility: "public", invite_code: "bali03", city: "Bali", sport: "football",
    max_players_per_team: 5, elo_enabled: true, member_count: 87,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
  {
    id: "4", name: "Google SG Ballers", slug: "google-sg-ballers",
    description: "Office league for Google Singapore. Public stats, internal play.",
    logo_url: null, primary_color: "#4285F4", accent_color: "#34A853",
    visibility: "public", invite_code: "goog04", city: "Singapore", sport: "football",
    max_players_per_team: 6, elo_enabled: true, member_count: 45,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
  {
    id: "5", name: "Copacabana FC", slug: "copacabana-fc",
    description: "Beach football every weekend in Rio. Bring your A-game.",
    logo_url: null, primary_color: "#FFD700", accent_color: "#009B3A",
    visibility: "public", invite_code: "rio005", city: "Rio de Janeiro", sport: "football",
    max_players_per_team: 5, elo_enabled: true, member_count: 78,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
  {
    id: "6", name: "Lagos Thunder FC", slug: "lagos-thunder-fc",
    description: "Nigeria's fastest-growing pickup football community.",
    logo_url: null, primary_color: "#008751", accent_color: "#FFFFFF",
    visibility: "public", invite_code: "lag006", city: "Lagos", sport: "football",
    max_players_per_team: 7, elo_enabled: true, member_count: 120,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
  {
    id: "7", name: "Madrid Pickup League", slug: "madrid-pickup-league",
    description: "Casual football in Retiro Park. Sundays at 10am.",
    logo_url: null, primary_color: "#C60B1E", accent_color: "#FFC400",
    visibility: "public", invite_code: "mad007", city: "Madrid", sport: "football",
    max_players_per_team: 7, elo_enabled: false, member_count: 56,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
  {
    id: "8", name: "Lisbon Street Ballers", slug: "lisbon-street-ballers",
    description: "Futsal and street football across Lisbon. All skill levels.",
    logo_url: null, primary_color: "#003399", accent_color: "#FF0000",
    visibility: "public", invite_code: "lis008", city: "Lisbon", sport: "football",
    max_players_per_team: 5, elo_enabled: true, member_count: 42,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
  {
    id: "9", name: "Dubai Friday League", slug: "dubai-friday-league",
    description: "Premium pickup football. Friday evenings at Sports City.",
    logo_url: null, primary_color: "#C5A34E", accent_color: "#FFFFFF",
    visibility: "public", invite_code: "dub009", city: "Dubai", sport: "football",
    max_players_per_team: 6, elo_enabled: true, member_count: 95,
    rules: {}, created_by: "", created_at: "", updated_at: "",
  },
];

export default function LeaguesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Browse <span className="text-accent">Public Leagues</span>
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            {allPublicLeagues.length} leagues across {new Set(allPublicLeagues.map(l => l.city)).size} cities.
            Find your crew or create your own.
          </p>
          <Link
            href="/create"
            className="inline-block bg-accent hover:bg-accent/90 text-background font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105"
          >
            🏆 Create Your League
          </Link>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <LeagueFiltersBar />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {allPublicLeagues.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: `${allPublicLeagues.length}+`, label: "Public Leagues" },
              { value: "880+", label: "Active Players" },
              { value: `${new Set(allPublicLeagues.map(l => l.city)).size}`, label: "Cities" },
              { value: "∞", label: "Private Leagues" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-accent">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black mb-4">
            Don&apos;t see your city?
          </h2>
          <p className="text-text-secondary mb-8">
            Create a league and put your city on the map. It takes 60 seconds.
          </p>
          <Link
            href="/create"
            className="inline-block bg-accent hover:bg-accent/90 text-background font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105"
          >
            🏆 Create Your League
          </Link>
        </div>
      </section>
    </>
  );
}
