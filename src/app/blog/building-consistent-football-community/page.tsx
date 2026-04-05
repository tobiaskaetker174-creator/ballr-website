import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building a Consistent Pickup Football Community — BallR Blog",
  description:
    "Why most pickup football WhatsApp groups die after 3 months, and how to build a reliable community that actually lasts. Tips on reliability systems, communication, and what BallR does differently.",
  keywords: [
    "pickup football community",
    "football group management",
    "WhatsApp football group",
    "organize football games",
    "reliable football group",
  ],
  openGraph: {
    title: "Building a Consistent Pickup Football Community",
    description:
      "Why most WhatsApp football groups die after 3 months and what you can do differently. A guide to building a community that lasts.",
    type: "article",
    siteName: "BallR",
  },
};

export default function BuildingConsistentFootballCommunity() {
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

        {/* Article header */}
        <article>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs bg-primary/20 text-accent px-2.5 py-0.5 rounded-lg font-medium">
                Community
              </span>
              <span className="text-xs text-text-muted">March 2026</span>
              <span className="text-xs text-text-muted">&middot; 6 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
              Building a Consistent Pickup{" "}
              <span className="text-accent">Football Community</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Why most WhatsApp groups die after 3 months and what you can do
              differently. Hint: reliability matters more than skill.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image
              src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1200&q=80"
              alt="Group of football players huddled together on a pitch"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article content */}
          <div className="prose-custom space-y-8">
            <p className="text-text-secondary leading-relaxed">
              Starting a pickup football group is easy. Keeping one alive for
              more than three months is surprisingly hard. If you have ever been
              part of a group that started with 40 enthusiastic members and
              slowly faded into a ghost town of unread messages and
              &quot;anyone playing this week?&quot; texts, you already know
              the pattern.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The good news is that building a lasting football community is not
              about luck or having the perfect group of people. It is about
              systems, expectations, and creating an environment where showing
              up is the default — not the exception.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold pt-4">
              The WhatsApp Group Problem
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Almost every pickup football group starts the same way: someone
              creates a WhatsApp group, adds 30 people, and posts &quot;Who is
              in for Thursday?&quot; For the first few weeks, it works. Then
              the cracks appear.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The group chat fills with off-topic messages, memes, and Premier
              League hot takes. The actual game logistics get buried. People
              start saying &quot;in&quot; and then not showing up. Nobody knows
              if there are 8 confirmed players or 14. The organizer spends
              their Tuesday evening doing a headcount instead of watching TV,
              and eventually thinks: is this really worth the effort?
            </p>

            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1200&q=80"
                alt="Person looking at phone with messaging apps"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-text-secondary leading-relaxed">
              The fundamental issue with WhatsApp for football organization is
              that it mixes communication and logistics. A chat app is great for
              banter, but terrible for tracking RSVPs, managing payments,
              handling waitlists, and knowing who actually confirmed versus
              who reacted with a thumbs-up emoji and forgot about it.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold pt-4">
              Why Groups Actually Die
            </h2>
            <p className="text-text-secondary leading-relaxed">
              It is rarely one thing that kills a pickup group. It is usually a
              slow accumulation of small failures that erode trust and momentum.
              Here are the most common culprits:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <span className="font-semibold text-white">Organizer burnout.</span>{" "}
                One person does all the work — booking the pitch, collecting
                money, chasing confirmations, dealing with last-minute dropouts
                — and eventually just stops. When the organizer burns out, the
                group dies.
              </li>
              <li>
                <span className="font-semibold text-white">No accountability for no-shows.</span>{" "}
                When people bail without consequences, it sends a signal that
                commitment is optional. The reliable players get frustrated and
                stop showing up too.
              </li>
              <li>
                <span className="font-semibold text-white">Inconsistent scheduling.</span>{" "}
                Moving the game day around based on availability means nobody
                can plan ahead. One cancelled week becomes two, becomes a month,
                becomes &quot;we should really start playing again.&quot;
              </li>
              <li>
                <span className="font-semibold text-white">Unbalanced games.</span>{" "}
                If the same team wins every week because team selection is
                random or biased, the losing side stops enjoying it. People
                play football to compete, not to get demolished.
              </li>
              <li>
                <span className="font-semibold text-white">No sense of community.</span>{" "}
                If people only interact during the 60 minutes of play and never
                build relationships beyond the pitch, the group has no glue
                holding it together when life gets busy.
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold pt-4">
              Building a Reliability System
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The core of any lasting football community is reliability. Not
              skill, not fancy venues, not matching jerseys — reliability. When
              players trust that the game will happen, that enough people will
              show up, and that the experience will be good, they keep coming
              back.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Here is how to build that trust:
            </p>

            <div className="bg-surface border border-border/30 rounded-2xl p-6 space-y-4">
              <div>
                <h3 className="font-bold text-white mb-1">
                  Track attendance and reliability scores
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Keep a record of who confirms and who actually shows up.
                  After a few months, you will have clear data on who is
                  reliable and who is not. Use this data to prioritize spots
                  when games are oversubscribed.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">
                  Enforce cancellation policies
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Set a clear window — say, 12 hours before kickoff. Drop out
                  before the deadline and no problem. Drop out after, and you
                  still owe your share (unless the waitlist fills your spot).
                  This simple rule changes behavior fast.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">
                  Use waitlists, not overcounting
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Instead of booking for 14 and hoping 14 show up, book for 14
                  and run a waitlist of 4-6 extras. When someone drops, the
                  next person gets automatically promoted. The game always has
                  the right number of players.
                </p>
              </div>
            </div>

            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1200&q=80"
                alt="Football team celebrating together after a match"
                fill
                className="object-cover"
              />
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold pt-4">
              Beyond the Pitch: Building Real Community
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The groups that last the longest are the ones that become more than
              just a game. They become a social anchor — the thing that gets you
              out of the house, introduces you to people from completely
              different backgrounds, and gives you something to look forward
              to every week.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Some ideas that have worked well for groups we have seen: regular
              post-game dinners or drinks, a shared league or tournament to work
              toward, end-of-season awards (most improved player, best goal,
              worst miss), and group trips to watch live matches. These things
              turn a collection of individuals into an actual community.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Stats and friendly competition help too. When players can see
              their performance over time — goals scored, games played,
              reliability rating — it gives them a reason to stay engaged even
              during the weeks when dragging themselves off the couch feels
              like a monumental effort.
            </p>

            {/* BallR feature callout */}
            <div className="bg-surface border border-accent/20 rounded-2xl p-6 my-8">
              <h3 className="text-lg font-bold text-accent mb-2">
                What BallR Does Differently
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                BallR was built specifically to solve the problems that kill
                pickup football groups. Here is how it replaces the broken
                WhatsApp workflow:
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span>
                  <span>
                    <span className="font-semibold text-white">Smart RSVPs</span>{" "}
                    — One-tap confirmation with automatic waitlist management.
                    No more counting thumbs-up emojis.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span>
                  <span>
                    <span className="font-semibold text-white">Reliability tracking</span>{" "}
                    — Every player has a reliability score based on their
                    attendance history. Reliable players get priority.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span>
                  <span>
                    <span className="font-semibold text-white">ELO-based team balancing</span>{" "}
                    — Fair teams generated automatically from actual match
                    data. No more lopsided games.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span>
                  <span>
                    <span className="font-semibold text-white">Player stats and leaderboards</span>{" "}
                    — Monthly competitions and rankings keep the community
                    engaged between sessions.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span>
                  <span>
                    <span className="font-semibold text-white">Automated reminders</span>{" "}
                    — Players get notified before each game. The organizer
                    does not have to chase anyone.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold pt-4">
              The Long Game
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Building a football community takes patience. The first month is
              about logistics — getting the venue, the time, and the numbers
              right. The second and third months are about establishing norms
              and weeding out the unreliable. By month six, if you have done
              things right, you will have a core group of 15-20 people who
              show up consistently, know each other by name, and genuinely
              look forward to game day.
            </p>
            <p className="text-text-secondary leading-relaxed">
              That is when it stops feeling like organizing and starts feeling
              like a community. The games run themselves, new players get
              absorbed naturally, and your biggest problem shifts from
              &quot;will enough people show up?&quot; to &quot;how do we fit
              everyone in?&quot; That is a great problem to have.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The key is not to give up during the messy middle phase. Every
              successful pickup football community went through the same
              growing pains. The difference between the groups that survived
              and the groups that are now inactive WhatsApp threads is simply
              this: someone kept showing up and kept making it easy for
              others to show up too.
            </p>

            {/* CTA */}
            <div className="bg-surface border border-border/30 rounded-2xl p-8 text-center mt-12">
              <h2 className="text-2xl font-bold mb-3">
                Build a Community That Lasts
              </h2>
              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                BallR gives you the tools to run a reliable, fair, and fun
                football community — without the admin headache. RSVPs,
                payments, teams, stats, all in one place.
              </p>
              <Link
                href="/"
                className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Download BallR
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
