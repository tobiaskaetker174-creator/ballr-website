import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Organize Pickup Football in Bangkok — BallR Blog",
  description:
    "A practical guide to setting up regular pickup football games in Bangkok. Find venues, manage payments, deal with no-shows, and keep your group coming back every week.",
  keywords: [
    "pickup football Bangkok",
    "organize soccer game",
    "football venues Bangkok",
    "expat football Thailand",
    "casual football Bangkok",
  ],
  openGraph: {
    title: "How to Organize Pickup Football in Bangkok",
    description:
      "A practical guide to setting up regular pickup football games in Bangkok — from venues to payments to dealing with flakers.",
    type: "article",
    siteName: "BallR",
  },
};

export default function HowToOrganizePickupFootballBangkok() {
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
                Guide
              </span>
              <span className="text-xs text-text-muted">March 2026</span>
              <span className="text-xs text-text-muted">&middot; 5 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
              How to Organize Pickup Football in{" "}
              <span className="text-accent">Bangkok</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              A practical guide to setting up regular games in Bangkok — from
              finding venues to managing payments and keeping players coming back
              week after week.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image
              src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&q=80"
              alt="Football players on a floodlit pitch at night"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article content */}
          <div className="prose-custom space-y-8">
            <p className="text-text-secondary leading-relaxed">
              So you just moved to Bangkok, you miss playing football, and the
              only thing standing between you and a regular game is... organizing
              it yourself. Good news: it is very doable. Bad news: you are about
              to become intimately familiar with the phrase &quot;sorry bro,
              something came up.&quot;
            </p>
            <p className="text-text-secondary leading-relaxed">
              After years of running pickup games in Bangkok, here is everything
              we have learned about building a game that actually sticks. Whether
              you are an expat fresh off the plane or a local tired of
              unreliable groups, this guide has you covered.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold pt-4">
              Step 1: Find the Right Venue
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkok has no shortage of pitches, but not all are created equal.
              Your choice of venue will make or break your game. Here are some
              popular options that have stood the test of time:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex gap-2">
                <span className="text-accent font-bold">The Pitch BKK</span> —
                One of the most popular 5-a-side and 7-a-side venues in
                Sukhumvit. Artificial turf, floodlights, easy BTS access. Book
                early because weekday evening slots go fast.
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">Arena 10</span> —
                Located near Thonglor, this is a go-to for expats. Multiple
                pitch sizes, decent facilities, and surrounded by food options
                for post-game refueling.
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">Benjakitti Park</span>{" "}
                — If you prefer outdoor grass, Benjakitti has open spaces for
                casual kickabouts. Free to use but you will be sharing with
                joggers and the occasional confused tourist.
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">Lumpini Park</span> —
                The OG Bangkok park pitch. Great for early morning weekend
                sessions. Show up at 7am on a Saturday and you will find a game
                happening already.
              </li>
            </ul>

            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80"
                alt="Aerial view of a football pitch with players"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-text-secondary leading-relaxed">
              When picking a venue, consider these factors: proximity to public
              transport (nobody wants to sit in Bangkok traffic for a casual
              game), the pitch surface (artificial turf is more forgiving than
              concrete), whether they provide bibs and balls, and cost per head.
              Most 5-a-side pitches in Bangkok run between 200-400 THB per hour,
              so split across 10-14 players it is pretty affordable.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold pt-4">
              Step 2: Set a Consistent Schedule
            </h2>
            <p className="text-text-secondary leading-relaxed">
              This is the single most important thing you can do. Pick a day,
              pick a time, and stick to it. Every week, same slot. Tuesday at
              7pm. Thursday at 8pm. Sunday morning at 9am. Whatever works for
              your crew.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The moment you start moving the day around based on who is
              available, you have already lost. People cannot build a habit
              around a moving target. A consistent slot means players can block
              it in their calendars, tell their partners, and plan around it
              without checking a group chat every week.
            </p>

            {/* BallR feature callout */}
            <div className="bg-surface border border-accent/20 rounded-2xl p-6 my-8">
              <h3 className="text-lg font-bold text-accent mb-2">
                How BallR Helps
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                BallR lets organizers set up recurring games with automatic
                reminders. Players get notified 48 hours before each session,
                can confirm or drop out with one tap, and the waitlist fills
                spots automatically. No more chasing people in group chats at
                11pm the night before.
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold pt-4">
              Step 3: Manage Payments Without the Awkwardness
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Money is where casual football groups get weird. Someone always
              &quot;forgot their wallet,&quot; someone else will &quot;pay you
              next time&quot; (they will not), and the organizer ends up
              subsidizing the game out of social guilt.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Here is what works: collect payment before the game. Use PromptPay
              or a mobile payment app and set a clear deadline. If someone has
              not paid by the cutoff, they lose their spot and the next person on
              the waitlist gets in. Sounds harsh, but it is the only way to
              avoid playing financier every week.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Be transparent about costs. Break down the pitch fee, bib rental,
              ball replacement fund, and water. Most Bangkok games end up costing
              150-250 THB per player. That is cheaper than a beer at most
              Sukhumvit bars, so there is really no excuse.
            </p>

            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80"
                alt="Close-up of a football on grass"
                fill
                className="object-cover"
              />
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold pt-4">
              Step 4: Deal with No-Shows Like a Pro
            </h2>
            <p className="text-text-secondary leading-relaxed">
              No-shows are the silent killer of pickup football. You book a pitch
              for 14 players, 14 people confirm, and then 3 bail at the last
              minute. Now you are playing 5v6 and everyone is annoyed.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The fix is a combination of systems and culture. First, always run
              a waitlist. If your game fits 14, let 16-18 people sign up. You
              will almost always have dropouts. Second, enforce a cancellation
              window. If someone drops out less than 6 hours before kickoff, they
              should still pay their share unless someone from the waitlist takes
              their spot.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Third, track reliability. After a few months you will know exactly
              who always shows up and who is a serial flaker. Prioritize the
              reliable people when spots are limited. It sounds ruthless, but the
              alternative is a game that falls apart every other week.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold pt-4">
              Step 5: Keep the Energy Alive
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The first few weeks are easy. Everyone is excited, the games are
              full, and the post-game beers flow freely. The real challenge is
              month three, when the novelty wears off and people start
              prioritizing Netflix over five-a-side.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Keep things fresh by rotating formats (5v5 one week, 7v7 the
              next), introducing mini-tournaments or challenges, tracking stats
              and sharing highlights, and organizing the occasional social event
              that does not involve running. A quarterly dinner or watching a big
              match together goes a long way toward building a community, not
              just a mailing list.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Most importantly, be the person who shows up every single time.
              Consistency from the organizer signals that this is real, and that
              reliability is contagious.
            </p>

            {/* CTA */}
            <div className="bg-surface border border-border/30 rounded-2xl p-8 text-center mt-12">
              <h2 className="text-2xl font-bold mb-3">
                Skip the Admin. Just Play.
              </h2>
              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                BallR handles RSVPs, payments, waitlists, team balancing, and
                player ratings — so you can focus on the actual football.
                Available in Bangkok and Bali.
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
