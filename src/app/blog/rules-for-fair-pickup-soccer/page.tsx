import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules for Fair Pickup Soccer Games â BallR Blog",
  description:
    "The unwritten rules that make pickup soccer fun for everyone. From no slide tackling to proper rotation, here's how to keep your casual games fair and competitive.",
  keywords: [
    "pickup soccer rules",
    "fair football rules",
    "casual soccer etiquette",
    "pickup game rules",
    "five a side rules",
  ],
  openGraph: {
    title: "Rules for Fair Pickup Soccer Games",
    description:
      "The unwritten rules that separate good pickup games from chaotic ones. A guide to keeping casual football fun and fair.",
    type: "article",
    siteName: "BallR",
  },
};

export default function RulesForFairPickupSoccer() {
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
                Culture
              </span>
              <span className="text-xs text-text-muted">March 2026</span>
              <span className="text-xs text-text-muted">&middot; 4 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
              Rules for Fair <span className="text-accent">Pickup Soccer</span>{" "}
              Games
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              The unwritten rules that separate good pickup games from absolute
              chaos. Spoiler: slide tackling on artificial turf is never okay.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image
              src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80"
              alt="Football players competing for the ball on a green pitch"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article content */}
          <div className="prose-custom space-y-8">
            <p className="text-text-secondary leading-relaxed">
              Every pickup football group eventually develops its own set of
              rules. Some write them down. Most just argue about them until
              someone storms off and posts something passive-aggressive in the
              group chat. To save you from that fate, here are the rules that
              actually work â battle-tested across dozens of groups in Bangkok,
              Bali, and beyond.
            </p>

            {/* Rule 1 */}
            <h2 className="text-2xl font-bold pt-4">
              1. No Slide Tackling. Period.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              This is the golden rule of pickup football, and it is non-negotiable.
              You are not playing in a cup final. Nobody has a physio on standby.
              Most people have to go to work tomorrow, and explaining a turf burn
              the size of a dinner plate to your boss is not a great look.
            </p>
            <p className="text-text-secondary leading-relaxed">
              On artificial turf especially, slide tackles cause nasty burns
              and can wreck knees. Standing tackles are fine. Shoulder-to-shoulder
              is fine. Diving in like prime Sergio Ramos on a Wednesday night
              friendly is not fine.
            </p>

            {/* Rule 2 */}
            <h2 className="text-2xl font-bold pt-4">
              2. Balance the Teams â Properly
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Nothing kills a pickup game faster than one team winning 12-1
              because all the good players ended up on the same side. The classic
              approach is captains picking teams, but that can feel like a school
              yard nightmare for the last person chosen.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Better approaches include snake drafts (captain A picks 1, captain
              B picks 2, captain A picks 2, and so on), random draws with a
              reshuffle option, or the simplest method: just mix up the teams
              after every game or every two games. Nobody gets stuck losing all
              night, and everyone gets to play with different people.
            </p>

            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80"
                alt="Players in coloured bibs during a football match"
                fill
                className="object-cover"
              />
            </div>

            {/* BallR feature callout */}
            <div className="bg-surface border border-accent/20 rounded-2xl p-6 my-8">
              <h3 className="text-lg font-bold text-accent mb-2">
                Smart Team Balancing with BallR
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                BallR uses player ELO ratings built from real match results to
                automatically generate balanced teams. No awkward drafts, no
                arguments, and the algorithm gets smarter over time as it learns
                each player&apos;s actual ability. Just tap &quot;Generate
                Teams&quot; and you are good to go.
              </p>
            </div>

            {/* Rule 3 */}
            <h2 className="text-2xl font-bold pt-4">
              3. Rotate Subs Fairly
            </h2>
            <p className="text-text-secondary leading-relaxed">
              If you have more players than spots, you need a rotation system
              that does not leave the same people sitting out for 30 minutes
              while the &quot;regulars&quot; play the whole session. The most
              common approach is winner stays on: the losing team rotates off
              (or a portion of them do), and subs come in.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Another option is timed rotations â every 8-10 minutes, a few
              players swap regardless of score. This gives everyone roughly
              equal playing time. Whatever system you choose, agree on it before
              the first whistle. Nothing starts arguments faster than unspoken
              expectations about who sits out.
            </p>

            {/* Rule 4 */}
            <h2 className="text-2xl font-bold pt-4">
              4. Respect the Skill Range
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Most pickup games have a wide range of abilities â from the guy
              who played semi-pro back home to the person who last kicked a ball
              in 2014. Both belong in the game, but both need to adjust.
            </p>
            <p className="text-text-secondary leading-relaxed">
              If you are the best player on the pitch, ease up a bit. You do not
              need to nutmeg the same person three times in a row. Play simple,
              involve others, and use it as a chance to work on your weaker foot.
              If you are newer to the game, do not be afraid to get stuck in.
              Nobody expects you to be Messi. Just run, pass, and do not stand
              on the goal line the entire match.
            </p>

            {/* Rule 5 */}
            <h2 className="text-2xl font-bold pt-4">
              5. Call Your Own Fouls (Honestly)
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Without a referee, the honor system is all you have. If you foul
              someone, own it. If you think you were fouled, say so calmly â do
              not roll around on the turf like you are trying to win an Oscar.
              A simple &quot;yeah, that was me, your ball&quot; keeps the game
              moving and the vibes intact.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The flip side: do not call a foul every time someone breathes near
              you. It is a contact sport. Some bumping is going to happen. Save
              the complaints for actual fouls and your group will respect you a
              lot more.
            </p>

            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1200&q=80"
                alt="Football boots and ball on artificial turf"
                fill
                className="object-cover"
              />
            </div>

            {/* Rule 6 */}
            <h2 className="text-2xl font-bold pt-4">
              6. The Goalkeeper Rule
            </h2>
            <p className="text-text-secondary leading-relaxed">
              In small-sided games, nobody wants to play keeper. The fairest
              approach: either rotate the goalkeeper position every game, play
              with rush goalkeepers (anyone can go in goal to make a save but
              must come back out immediately), or just play without dedicated
              keepers entirely. Many 5-a-side games in Bangkok use small goals
              and no keepers, which keeps the game fast and means everyone gets
              to play outfield.
            </p>

            {/* Rule 7 */}
            <h2 className="text-2xl font-bold pt-4">
              7. Keep Score (But Do Not Keep Grudges)
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Keeping score matters. It adds stakes, makes the game more fun,
              and gives people something to remember. But the moment the final
              whistle blows (or someone checks their phone and realizes it is
              9:30pm), it is over. No post-match analysis of why your teammate
              missed that open goal. No lingering resentment. Shake hands, grab
              a drink, and move on.
            </p>

            {/* CTA */}
            <div className="bg-surface border border-border/30 rounded-2xl p-8 text-center mt-12">
              <h2 className="text-2xl font-bold mb-3">
                Fair Games, Every Time
              </h2>
              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                BallR tracks stats, balances teams with ELO ratings, and makes
                sure everyone gets a fair game. No more arguments over who
                picks teams.
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
