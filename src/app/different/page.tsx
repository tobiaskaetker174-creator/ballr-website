import { AccordionItem } from "@/components/Accordion";
import { DiscoverScreen, ProfileScreen } from "@/components/AppMockups";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Makes BallR Different — BallR",
  description:
    "BallR solves the biggest problems in pickup football: no-shows, unfair teams, toxic players, and zero motivation.",
  openGraph: {
    title: "Why BallR is Different",
    description: "Not just another sports app. BallR is built for real pickup football communities.",
    type: "website",
    siteName: "BallR",
  },
};

const problems = [
  {
    problem: "Players aren't motivated",
    emoji: "😴",
    solution: "ELO Rating + Player of the Month",
    details:
      "Every game matters. Your ELO goes up or down based on real results. The top player each month wins free games and a BallR t-shirt. Suddenly, people care about showing up and playing well. Funny how a leaderboard changes everything.",
  },
  {
    problem: "People don't show up",
    emoji: "👻",
    solution: "Reliability Score + No-Show Penalties",
    details:
      "Every player has a public reliability score (0–100%). Miss a game without notice? Your score drops, you lose 50 ELO, and everyone can see it. Chronic no-shows get flagged. It's like a credit score, but for keeping your word about Tuesday football.",
  },
  {
    problem: "Games are aggressive and toxic",
    emoji: "🔴",
    solution: "Rating System + Reporting",
    details:
      "After every game, players anonymously rate each other on skill AND sportsmanship. The guy who slide-tackles everyone in a friendly 5-a-side? His sportsmanship rating tanks, and organizers can see it. Dignity is a feature, not a suggestion.",
  },
  {
    problem: "Teams are always unfair",
    emoji: "⚖️",
    solution: "ELO-Based Auto Team Balancing",
    details:
      "Our algorithm sorts players by ELO, runs a snake draft, then does up to 5 swap-improvement passes to minimize the gap between team averages. No more 'experienced players vs beginners' situations. Just actual fair games.",
  },
  {
    problem: "Nobody knows who's actually good",
    emoji: "🤷",
    solution: "Persistent Skill Profiles",
    details:
      "Every player has a profile with their ELO, win rate, preferred positions, peer ratings, and community ratings. When you join a game, you know exactly what level you're getting into. No surprises. Well, fewer surprises.",
  },
  {
    problem: "Organizing games is a nightmare",
    emoji: "📋",
    solution: "One-Tap Game Creation",
    details:
      "Pick a venue, set the time, choose the skill level, set the price — done. Players find your game in the Discover feed, pay online, and show up. No more chasing payments or counting heads in a group chat at 5pm.",
  },
];

export default function DifferentPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="relative h-[30vh] mb-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&q=80"
          alt="Competitive football match"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-surface border border-border/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-accent font-medium">
              Problem &rarr; Solution
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            What Makes BallR
            <span className="text-accent"> Different?</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Every feature exists because someone, somewhere, had a terrible
            pickup football experience. We&apos;re fixing all of them.
          </p>
        </div>

        <div className="space-y-4">
          {problems.map((item, i) => (
            <AccordionItem
              key={i}
              title={`${item.emoji} ${item.problem}`}
              defaultOpen={i === 0}
            >
              <div className="space-y-3">
                <div className="inline-block bg-primary/20 text-accent text-sm font-semibold px-3 py-1 rounded-lg">
                  Solution: {item.solution}
                </div>
                <p>{item.details}</p>
              </div>
            </AccordionItem>
          ))}
        </div>

        {/* App mockups showing the solutions */}
        <div className="mt-16">
          <h2 className="text-2xl font-black text-center mb-8">
            See How It <span className="text-accent">Works</span>
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <DiscoverScreen />
            <ProfileScreen />
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105"
          >
            Try BallR Now
          </a>
          <p className="text-text-muted text-sm mt-3">
            No more excuses. Just better football.
          </p>
        </div>
      </div>
    </div>
  );
}
