import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Football in Bangkok Today â Start with BallR",
  description:
    "Start playing football in Bangkok today. BallR has daily pickup games at top venues. Download the app, find a game, show up.",
  keywords: [
    "play football Bangkok",
    "soccer Bangkok today",
    "football near me Bangkok",
  ],
};

export default function PlayFootballBangkok() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Ads-style hero â conversion focused */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Play Football in Bangkok{" "}
            <span className="text-accent">Today</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
            BallR has pickup games every day at the best venues in Bangkok.
            Download the app. Join a game. It takes 30 seconds.
          </p>
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105"
          >
            Download BallR â Free
          </a>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            { icon: "â¡", text: "Games every day of the week" },
            { icon: "ðï¸", text: "Premium turf and grass venues" },
            { icon: "âï¸", text: "Fair, ELO-balanced teams" },
            { icon: "ð³", text: "Online booking and payment" },
            { icon: "ð", text: "Track your skill rating" },
            { icon: "ð¤", text: "Community ratings for safety" },
          ].map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-3 bg-surface border border-border/20 rounded-xl p-4"
            >
              <span className="text-xl">{b.icon}</span>
              <span className="text-sm text-text">{b.text}</span>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="bg-surface border border-border/30 rounded-2xl p-6 text-center mb-12">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-black text-accent">87+</div>
              <div className="text-xs text-text-muted">Active Players</div>
            </div>
            <div>
              <div className="text-2xl font-black text-accent">4.8</div>
              <div className="text-xs text-text-muted">Avg Rating</div>
            </div>
            <div>
              <div className="text-2xl font-black text-accent">3</div>
              <div className="text-xs text-text-muted">Top Venues</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-surface border border-accent/30 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">
            Start Playing Soccer Today
          </h2>
          <p className="text-text-secondary mb-6">
            Download BallR, find a game, show up. It&apos;s that simple.
          </p>
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Start Playing with BallR
          </a>
        </div>
      </div>
    </div>
  );
}
