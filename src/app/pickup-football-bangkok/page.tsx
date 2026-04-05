import { FeatureCard } from "@/components/FeatureCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickup Football in Bangkok — Find Games Today | BallR",
  description:
    "Looking for pickup football in Bangkok? BallR connects you with organized games at venues across the city. Find your level, join a game, and play today.",
  keywords: [
    "pickup football Bangkok",
    "pickup soccer Bangkok",
    "football games Bangkok",
    "expat football Bangkok",
  ],
};

export default function PickupFootballBangkok() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* SEO Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Pickup Football in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            The complete guide to finding and joining pickup football games in
            Bangkok. From Sukhumvit to Silom, BallR has you covered.
          </p>
        </div>

        {/* Content */}
        <article className="prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-4">
              Finding Pickup Football in Bangkok
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkok has a thriving pickup football scene, but finding
              consistent, well-organized games can be a challenge. Most games
              are coordinated through scattered WhatsApp and LINE groups, making
              it hard to know what&apos;s available on any given day.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              BallR solves this by putting all available games in one place —
              filtered by skill level, time, venue, and available spots. No
              more guessing, no more last-minute cancellations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Popular Venues in Bangkok
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Benjakitti Park Field",
                  surface: "Turf",
                  amenities: "Changing rooms, showers, parking, lights",
                },
                {
                  name: "The Pitch BKK",
                  surface: "Turf",
                  amenities: "Changing rooms, showers, bar, lights",
                },
                {
                  name: "Lumpini Stadium Pitch",
                  surface: "Grass",
                  amenities: "Parking, lights",
                },
              ].map((venue) => (
                <div
                  key={venue.name}
                  className="bg-surface border border-border/30 rounded-2xl p-5"
                >
                  <h3 className="font-bold text-sm mb-2">{venue.name}</h3>
                  <div className="text-xs text-accent mb-1">
                    {venue.surface}
                  </div>
                  <div className="text-xs text-text-muted">
                    {venue.amenities}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Why Use BallR for Pickup Football
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon="🎯"
                title="Skill-Matched Games"
                description="Beginner, intermediate, advanced, or mixed — play at your level."
              />
              <FeatureCard
                icon="⚖️"
                title="Fair Teams"
                description="ELO-based team balancing so every game is competitive."
              />
              <FeatureCard
                icon="💳"
                title="Pay Online"
                description="No more chasing cash. Pay when you book, refund if you cancel."
              />
              <FeatureCard
                icon="📊"
                title="Track Progress"
                description="Build your ELO rating game by game. See how you stack up."
              />
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="text-center mt-16 bg-surface border border-accent/30 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">
            Ready to Play in Bangkok?
          </h2>
          <p className="text-text-secondary mb-6">
            87+ active players. Games every day. Download BallR and join your
            first game tonight.
          </p>
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Download BallR
          </a>
        </div>
      </div>
    </div>
  );
}
