import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Balancing in Casual Soccer: Why It Matters — BallR Blog",
  description:
    "How ELO ratings, snake drafts, and swap algorithms create fairer pickup football games. Learn why captain picks fail and how BallR auto-balances teams.",
  keywords: [
    "team balancing soccer",
    "ELO rating football",
    "pickup football fair teams",
    "snake draft soccer",
    "auto balance football teams",
    "casual soccer team selection",
  ],
  openGraph: {
    title: "Team Balancing in Casual Soccer: Why It Matters",
    description:
      "The science and art behind fair teams in pickup football. ELO ratings, snake drafts, and why BallR does it automatically.",
    type: "article",
    siteName: "BallR",
  },
};

export default function TeamBalancingCasualSoccerPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-text-muted hover:text-accent transition-colors mb-8"
        >
          &larr; Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs bg-primary/20 text-accent px-2.5 py-0.5 rounded-lg font-medium">
              Product
            </span>
            <span className="text-xs text-text-muted">March 2026</span>
            <span className="text-xs text-text-muted">&middot; 5 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Team Balancing in Casual Soccer:{" "}
            <span className="text-accent">Why It Matters</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Nothing kills a pickup game faster than lopsided teams. Here&apos;s
            how the pros solve it &mdash; and how BallR does it automatically so
            you don&apos;t have to argue about it.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&q=80"
            alt="Two teams lining up before a casual football match"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Article content */}
        <article className="space-y-10">
          <section>
            <p className="text-text-secondary leading-relaxed">
              You know the feeling. You show up to a pickup game, someone
              &ldquo;picks teams,&rdquo; and within five minutes it&apos;s 6-0.
              One side has three ex-college players and the other side has three
              guys who thought &ldquo;offside&rdquo; was a type of cocktail. The
              losing team stops trying, the winning team gets bored, and everyone
              goes home thinking the game was rubbish.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              The fix isn&apos;t complicated. It just requires a system that most
              pickup groups don&apos;t bother to set up. Let&apos;s talk about
              the main approaches.
            </p>
          </section>

          {/* Captain Picks */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              The Classic: Captain Picks (And Why They Fail)
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-text-secondary leading-relaxed">
                  Two captains. Alternating picks. It&apos;s the schoolyard
                  method everyone knows, and it has some fundamental problems.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  First, captains pick their friends. Always. The guy who drove
                  you to the pitch is getting picked first even if he has the
                  touch of a park bench. Second, it publicly ranks everyone by
                  skill, which is a great way to make the last few picks feel
                  like they&apos;re attending their own funeral. Third, captains
                  don&apos;t actually know everyone&apos;s ability &mdash;
                  especially in pickup groups with rotating rosters.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&q=80"
                  alt="Players discussing team formation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* ELO Ratings */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              ELO Ratings: Borrowed from Chess, Built for Football
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The ELO system was originally designed for chess, but it works
              beautifully for team sports when you adapt it correctly. The basic
              idea: every player has a numerical rating. When your team wins, your
              rating goes up. When your team loses, it goes down. The amount it
              changes depends on the expected outcome &mdash; beating a stronger
              team gives you more points than beating a weaker one.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              Over time, ELO ratings converge on a player&apos;s actual skill
              level. The more games someone plays, the more accurate their rating
              becomes. It&apos;s not perfect after one game, but after 10&ndash;15
              games, the numbers start telling a very honest story about who
              belongs where.
            </p>
            <div className="bg-surface border border-border/30 rounded-2xl p-5 mt-4">
              <h3 className="font-bold text-sm mb-2 text-accent">
                How ELO Works in Pickup Football
              </h3>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1.5">
                <li>&bull; Every player starts with a base rating (e.g., 1000)</li>
                <li>&bull; Wins and losses adjust ratings based on expected vs. actual outcome</li>
                <li>&bull; Big upsets = bigger rating swings</li>
                <li>&bull; Ratings stabilize after 10&ndash;15 games</li>
                <li>&bull; Individual performance modifiers can fine-tune accuracy</li>
              </ul>
            </div>
          </section>

          {/* Snake Draft */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Snake Drafts: Smarter Than Alternating Picks
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden sm:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
                  alt="Football team huddle before match"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-text-secondary leading-relaxed">
                  If you do need to draft, a snake draft is significantly fairer
                  than straight alternating picks. In a snake draft, the pick
                  order reverses each round. So if Team A picks first in round
                  one, Team B picks first (and second) in round two.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  This compensates for the first-pick advantage and produces more
                  balanced teams. It&apos;s how fantasy football drafts work, and
                  it&apos;s how real-world pickup groups should work if they
                  insist on manual selection.
                </p>
              </div>
            </div>
          </section>

          {/* Swap Algorithms */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Swap Algorithms: Let the Math Do the Work
            </h2>
            <p className="text-text-secondary leading-relaxed">
              This is where it gets interesting. A swap algorithm takes all
              players, looks at their ratings, and tries every possible team
              combination to find the split where the total skill on each side is
              as close as possible.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              The simplest version: sort players by rating, assign them to teams
              using a snake pattern, then iterate through random swaps to see if
              any swap reduces the skill gap. Keep swapping until you can&apos;t
              improve the balance anymore. The result is consistently fairer than
              any human could manage in the three minutes before kickoff.
            </p>
            <div className="bg-surface border border-border/30 rounded-2xl p-5 mt-4">
              <h3 className="font-bold text-sm mb-2 text-accent">
                Why Algorithms Beat Humans
              </h3>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1.5">
                <li>&bull; No bias toward friends or familiar faces</li>
                <li>&bull; Considers everyone&apos;s actual rating, not just vibes</li>
                <li>&bull; Takes seconds instead of the usual 10-minute debate</li>
                <li>&bull; Can factor in position preferences and play styles</li>
                <li>&bull; Nobody gets publicly picked last</li>
              </ul>
            </div>
          </section>

          {/* How BallR does it */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              How BallR Handles <span className="text-accent">Auto-Balancing</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-text-secondary leading-relaxed">
                  BallR combines ELO ratings with a swap-based balancing
                  algorithm. When a game fills up, the app automatically generates
                  the fairest possible teams based on everyone&apos;s rating
                  history.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Organizers can also tweak things manually if needed &mdash;
                  maybe you want to keep couples on the same team, or separate
                  the two guys who get into a tactical argument every single week.
                  The system gives you a great starting point, and you can adjust
                  from there.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  The result: closer games, happier players, and nobody standing
                  around arguing about teams while the pitch clock is ticking.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80"
                  alt="Competitive pickup football match"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Does it actually work */}
          <section>
            <h2 className="text-2xl font-black mb-4">Does It Actually Work?</h2>
            <p className="text-text-secondary leading-relaxed">
              Short answer: yes. In BallR games using auto-balancing, the average
              goal difference between teams is significantly lower than in games
              using random or captain-picked teams. More importantly, player
              retention is higher &mdash; people keep coming back because the
              games are competitive and fun, not one-sided beatdowns.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              Fair teams aren&apos;t just a nice-to-have. They&apos;re the single
              biggest factor in whether your pickup group survives or dies.
              Nobody wants to show up week after week to get hammered 8-1 because
              the same three ringers always end up together.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-surface border border-accent/20 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-xl font-black mb-3">
              Fair Teams, <span className="text-accent">Every Game</span>
            </h2>
            <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
              BallR uses ELO ratings and smart algorithms to auto-balance your
              teams. No more arguments. No more lopsided games. Just good
              football.
            </p>
            <a
              href="/#download"
              className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105"
            >
              Download BallR
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
