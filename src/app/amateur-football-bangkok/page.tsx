import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amateur Football in Bangkok â Join BallR | BallR",
  description:
    "Join Bangkok's amateur football scene through BallR. Organized games, fair team balancing, skill ratings, and a real community.",
  keywords: [
    "amateur football Bangkok",
    "casual soccer Bangkok",
    "recreational football Bangkok",
  ],
};

export default function AmateurFootballBangkok() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Amateur Football in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Whether you played in high school or just started last month,
            Bangkok has a game for you. BallR makes finding it easy.
          </p>
        </div>

        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-black mb-4">
              The Amateur Football Scene
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkok&apos;s amateur football scene is massive and growing.
              With turf fields across the city and a mix of Thai locals and
              international residents, there&apos;s always a game to join.
              BallR organizes this scene by providing structured games with
              fair teams, reliable players, and transparent pricing.
            </p>
          </section>

          <section className="bg-surface border border-border/30 rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4">
              Skill Levels for Everyone
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  level: "ð± Beginner",
                  desc: "New to football or getting back into it. Relaxed games, no judgment.",
                },
                {
                  level: "â¡ Intermediate",
                  desc: "Regular players who know the basics and want competitive games.",
                },
                {
                  level: "ð¥ Advanced",
                  desc: "High-level players looking for serious competition.",
                },
                {
                  level: "â½ Mixed",
                  desc: "All levels welcome. Teams balanced by ELO for fairness.",
                },
              ].map((item) => (
                <div
                  key={item.level}
                  className="bg-background border border-border/20 rounded-xl p-4"
                >
                  <div className="font-bold text-sm mb-1">{item.level}</div>
                  <div className="text-text-secondary text-xs">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">Game Formats</h2>
            <p className="text-text-secondary leading-relaxed">
              BallR supports 5v5, 6v6, 7v7, and 10v10 formats. Games typically
              run 60â120 minutes. Prices range from 150â400 THB per player
              depending on the venue and format. Everything is booked and paid
              through the app.
            </p>
          </section>
        </article>

        <div className="text-center mt-16 bg-surface border border-accent/30 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">
            Join Bangkok&apos;s Largest Pickup Community
          </h2>
          <p className="text-text-secondary mb-6">
            Download BallR and find your first game today.
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
