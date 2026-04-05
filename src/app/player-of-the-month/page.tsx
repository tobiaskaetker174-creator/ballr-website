import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Player of the Month — BallR",
  description:
    "Monthly archive of BallR's top-rated players. Compete for the crown, earn rewards, and get recognized.",
  openGraph: {
    title: "Player of the Month — BallR",
    description: "Monthly archive of top-rated BallR players.",
    type: "website",
    siteName: "BallR",
  },
};

const months = [
  {
    month: "March 2026",
    winner: {
      name: "Alex K.",
      elo: 1420,
      tier: "⚡ Intermediate",
      wins: 12,
      gamesPlayed: 15,
      winRate: "80%",
      potmScore: 87.3,
      anonymous: false,
    },
    runnerUp: { name: "Marco D.", elo: 1380, potmScore: 82.1 },
    thirdPlace: { name: "Anonymous", elo: 1350, potmScore: 78.9, anonymous: true },
  },
  {
    month: "February 2026",
    winner: {
      name: "Sam T.",
      elo: 1510,
      tier: "🔥 Advanced",
      wins: 14,
      gamesPlayed: 18,
      winRate: "78%",
      potmScore: 91.2,
      anonymous: false,
    },
    runnerUp: { name: "Chris L.", elo: 1440, potmScore: 85.6 },
    thirdPlace: { name: "Nate R.", elo: 1390, potmScore: 80.4 },
  },
];

export default function PlayerOfTheMonthPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Player of the <span className="text-accent">Month</span>
          </h1>
          <p className="text-text-secondary text-lg">
            The best performers each month. Rated by the community, backed by data.
          </p>
        </div>

        {/* Info */}
        <div className="bg-surface border border-border/30 rounded-2xl p-6 mb-10">
          <h3 className="font-bold mb-2">How It Works</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            POTM score is a weighted composite of win rate (35%), ELO (25%),
            peer skill rating (10%), sportsmanship (10%), community ratings
            (10%), and reliability (10%). Minimum 5 games and 3 peer ratings
            required. Players can choose to appear as
            &ldquo;Anonymous&rdquo; if they prefer privacy.
          </p>
        </div>

        {/* Monthly Archive */}
        <div className="space-y-8">
          {months.map((entry) => (
            <div
              key={entry.month}
              className="bg-surface border border-border/20 rounded-2xl overflow-hidden"
            >
              <div className="bg-primary/10 px-6 py-3 border-b border-border/20">
                <h2 className="font-bold text-accent">{entry.month}</h2>
              </div>
              <div className="p-6">
                {/* Winner card */}
                <div className="bg-background border border-accent/30 rounded-2xl p-5 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center text-lg">
                      🏆
                    </div>
                    <div>
                      <div className="font-bold text-lg">
                        {entry.winner.name}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {entry.winner.tier} &middot; ELO{" "}
                        <span className="text-accent">
                          {entry.winner.elo}
                        </span>
                      </div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-2xl font-black text-accent">
                        {entry.winner.potmScore}
                      </div>
                      <div className="text-xs text-text-muted">POTM Score</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Wins", value: entry.winner.wins },
                      { label: "Games", value: entry.winner.gamesPlayed },
                      { label: "Win Rate", value: entry.winner.winRate },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="bg-surface rounded-xl p-2.5 text-center"
                      >
                        <div className="text-lg font-bold text-accent">
                          {s.value}
                        </div>
                        <div className="text-xs text-text-muted">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Runner ups */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { place: "🥈 2nd", ...entry.runnerUp },
                    {
                      place: "🥉 3rd",
                      ...entry.thirdPlace,
                    },
                  ].map((p) => (
                    <div
                      key={p.place}
                      className="bg-background border border-border/30 rounded-xl p-4 text-center"
                    >
                      <div className="text-sm text-text-muted mb-1">
                        {p.place}
                      </div>
                      <div className="font-bold text-sm">{p.name}</div>
                      <div className="text-xs text-accent">
                        ELO {p.elo} &middot; {p.potmScore} pts
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy note */}
        <div className="mt-10 bg-surface border border-border/30 rounded-2xl p-5 text-center">
          <p className="text-text-secondary text-sm">
            🔒 Players can choose to appear as &ldquo;Anonymous&rdquo; in public
            archives. You control your visibility at all times.
          </p>
        </div>
      </div>
    </div>
  );
}
