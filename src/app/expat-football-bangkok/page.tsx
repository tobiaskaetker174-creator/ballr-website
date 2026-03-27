import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expat Football in Bangkok â Join the Community | BallR",
  description:
    "New to Bangkok? Find expat football games organized through BallR. Skill-matched, fair teams, online payments. Your new football community awaits.",
  keywords: [
    "expat football Bangkok",
    "expat soccer Bangkok",
    "expat sports Bangkok",
    "international football Bangkok",
  ],
};

export default function ExpatFootballBangkok() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Expat Football in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Moving to Bangkok doesn&apos;t mean leaving football behind. Join the
            city&apos;s most active expat football community through BallR.
          </p>
        </div>

        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-black mb-4">
              The Expat Football Scene in Bangkok
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkok is home to one of Southeast Asia&apos;s most diverse expat
              communities, and football is the common language. From weekend
              5-a-side sessions to competitive 10v10 matches, there&apos;s
              always a game happening somewhere in the city.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              BallR brings this fragmented scene together. Instead of relying
              on word-of-mouth or random group invites, you can browse every
              available game, see who&apos;s playing, and join with one tap.
            </p>
          </section>

          <section className="bg-surface border border-border/30 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-black mb-4">
              Why Expats Love BallR
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "No Language Barrier",
                  desc: "The app handles everything â booking, payments, team assignment. Just show up and play.",
                },
                {
                  title: "Meet People Instantly",
                  desc: "Football is the fastest way to build a social circle in a new city. BallR makes the first step effortless.",
                },
                {
                  title: "Play at Your Level",
                  desc: "Beginner, intermediate, or advanced â filter games by skill level so you always have a good time.",
                },
                {
                  title: "Reliable Players",
                  desc: "Everyone has a reliability score. No more showing up to a game that gets cancelled because 5 people bailed.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-accent mt-1">â</span>
                  <div>
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-text-secondary text-sm">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Getting Started
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  step: "1",
                  title: "Download BallR",
                  desc: "Free on iOS and Android",
                },
                {
                  step: "2",
                  title: "Find a Game",
                  desc: "Filter by Bangkok, your skill level, and available dates",
                },
                {
                  step: "3",
                  title: "Show Up & Play",
                  desc: "Teams are auto-balanced. Just bring your boots.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="bg-surface border border-border/30 rounded-2xl p-5 text-center"
                >
                  <div className="text-2xl font-black text-accent mb-2">
                    {s.step}
                  </div>
                  <div className="font-bold text-sm mb-1">{s.title}</div>
                  <div className="text-text-muted text-xs">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="text-center mt-16 bg-surface border border-accent/30 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">
            Play with Expats in Bangkok
          </h2>
          <p className="text-text-secondary mb-6">
            Join Bangkok&apos;s largest organized pickup football community.
          </p>
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Download BallR â It&apos;s Free
          </a>
        </div>
      </div>
    </div>
  );
}
