import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goal of the Month â BallR",
  description:
    "Coming soon: nominate and vote on the best goals each month. Powered by Pixelot camera integration.",
};

export default function GoalOfTheMonthPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-warning/20 text-warning text-xs font-semibold px-3 py-1 rounded-full mb-6">
            COMING SOON
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Goal of the <span className="text-accent">Month</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Nominate and vote on the best goals each month. Because some goals
            deserve more than just a high-five.
          </p>
        </div>

        {/* Preview section */}
        <div className="bg-surface border border-border/30 rounded-3xl p-8 sm:p-12 text-center">
          <div className="text-6xl mb-6">ð¥</div>
          <h2 className="text-2xl font-black mb-3">
            Pixelot Integration In Progress
          </h2>
          <p className="text-text-secondary max-w-md mx-auto mb-8">
            We&apos;re integrating with Pixelot cameras at partner venues to
            automatically capture and share the best moments from every game.
          </p>

          {/* Feature preview cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: "ð¹",
                title: "Auto-Captured",
                desc: "Pixelot cameras record every game",
              },
              {
                icon: "ð³ï¸",
                title: "Community Voted",
                desc: "Players vote for the best goals",
              },
              {
                icon: "ð",
                title: "Monthly Winners",
                desc: "Top 3 goals published with video",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-background border border-border/20 rounded-2xl p-4"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-sm mb-1">{item.title}</div>
                <div className="text-text-muted text-xs">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Placeholder video slots */}
          <div className="grid sm:grid-cols-3 gap-4">
            {["1st Place", "2nd Place", "3rd Place"].map((place) => (
              <div
                key={place}
                className="bg-background border border-border/20 rounded-2xl aspect-video flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-3xl mb-1">â½</div>
                  <div className="text-xs text-text-muted">{place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-10 text-center">
          <p className="text-text-secondary mb-4">
            Want to know when Goal of the Month launches?
          </p>
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Download BallR to Stay Updated
          </a>
        </div>
      </div>
    </div>
  );
}
