import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Expat Football Guide to Southeast Asia — BallR Blog",
  description:
    "A complete guide for expats playing football in Southeast Asia. Find games in Bangkok, Bali, Ho Chi Minh City, Singapore, and Kuala Lumpur with tips on costs, culture, and communities.",
  keywords: [
    "expat football Southeast Asia",
    "pickup soccer Bangkok",
    "football Bali expats",
    "soccer Ho Chi Minh City",
    "expat sports Singapore",
    "football Kuala Lumpur",
    "casual football Asia",
  ],
  openGraph: {
    title: "The Expat Football Guide to Southeast Asia",
    description:
      "Where and how to play pickup football as an expat in Bangkok, Bali, HCMC, Singapore, and KL.",
    type: "article",
    siteName: "BallR",
  },
};

export default function ExpatFootballGuideSoutheastAsiaPage() {
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
              Guide
            </span>
            <span className="text-xs text-text-muted">March 2026</span>
            <span className="text-xs text-text-muted">&middot; 7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            The Expat Football Guide to{" "}
            <span className="text-accent">Southeast Asia</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            You moved abroad for the adventure, the food, maybe the cost of
            living. But you didn&apos;t move abroad to stop playing football.
            Here&apos;s your city-by-city breakdown of the pickup football scene
            across Southeast Asia.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80"
            alt="Football on a pitch in a tropical setting"
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
              Southeast Asia is one of the most football-mad regions on the
              planet. The Premier League is practically a religion here, local
              leagues are growing fast, and pickup games happen every single day
              in every major city. As an expat, you&apos;re actually in a great
              position &mdash; the football community is welcoming, the pitches
              are affordable, and there&apos;s always someone looking for one more
              player.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              That said, every city has its quirks. Here&apos;s what you need to
              know.
            </p>
          </section>

          {/* Bangkok */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Bangkok, Thailand
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center mb-4">
              <div>
                <p className="text-text-secondary leading-relaxed">
                  Bangkok has the most developed expat football scene in the
                  region, hands down. There are dozens of pitches scattered across
                  the city, from rooftop cages in Thonglor to full-size turf
                  fields near the BTS lines. Games run almost every day of the
                  week, and you can usually find something within 30 minutes of
                  wherever you live.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  The mix of nationalities is wild &mdash; you&apos;ll play with
                  Thais, Japanese, Brits, Brazilians, and Nigerians all in the
                  same game. Skill levels range from total beginners to guys who
                  clearly played at a decent level back home. Most games are
                  5-a-side or 7-a-side on artificial turf.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80"
                  alt="Evening football under floodlights in Bangkok"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-surface border border-border/30 rounded-2xl p-5">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-muted">Typical cost</span>
                  <p className="font-medium">150&ndash;300 THB / person</p>
                </div>
                <div>
                  <span className="text-text-muted">Common format</span>
                  <p className="font-medium">5v5 or 7v7 turf</p>
                </div>
                <div>
                  <span className="text-text-muted">Finding games</span>
                  <p className="font-medium">BallR, Facebook groups, LINE</p>
                </div>
                <div>
                  <span className="text-text-muted">Best areas</span>
                  <p className="font-medium">Thonglor, On Nut, Sathorn</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bali */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Bali, Indonesia
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center mb-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden sm:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80"
                  alt="Football on a tropical pitch"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-text-secondary leading-relaxed">
                  Bali&apos;s football scene is smaller but growing fast, fueled
                  by the digital nomad explosion. Most of the action is in the
                  Canggu/Seminyak corridor, where expats and nomads have set up
                  regular weekly games. The vibe is relaxed &mdash; this is Bali,
                  after all &mdash; and the post-game Bintang is considered
                  mandatory.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Pitches are a mix of turf and grass, and the quality varies
                  wildly. Some are international standard, others have a slight
                  slope and a goat somewhere nearby. Both have their charm.
                  Indonesians are incredibly passionate about football and very
                  welcoming to expats who want to join in.
                </p>
              </div>
            </div>
            <div className="bg-surface border border-border/30 rounded-2xl p-5">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-muted">Typical cost</span>
                  <p className="font-medium">50k&ndash;100k IDR / person</p>
                </div>
                <div>
                  <span className="text-text-muted">Common format</span>
                  <p className="font-medium">5v5 to 7v7</p>
                </div>
                <div>
                  <span className="text-text-muted">Finding games</span>
                  <p className="font-medium">BallR, Instagram, WhatsApp</p>
                </div>
                <div>
                  <span className="text-text-muted">Best areas</span>
                  <p className="font-medium">Canggu, Seminyak, Ubud</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ho Chi Minh City */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Ho Chi Minh City, Vietnam
            </h2>
            <p className="text-text-secondary leading-relaxed">
              HCMC is a hidden gem for pickup football. The Vietnamese are
              absolutely obsessed with the sport, and mini-pitches are everywhere
              &mdash; often tucked behind apartment blocks or on rooftops in
              District 1. The local standard is surprisingly high, and the pace
              of games tends to be fast and technical.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              The expat scene is growing, with regular games organized through
              Facebook groups and word of mouth. Costs are very low, and most
              venues include water and sometimes even a basic post-game meal. The
              heat is similar to Bangkok, so the same seasonal advice applies:
              play early or play late.
            </p>
            <div className="bg-surface border border-border/30 rounded-2xl p-5 mt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-muted">Typical cost</span>
                  <p className="font-medium">50k&ndash;150k VND / person</p>
                </div>
                <div>
                  <span className="text-text-muted">Common format</span>
                  <p className="font-medium">5v5 or 7v7 mini-pitch</p>
                </div>
                <div>
                  <span className="text-text-muted">Finding games</span>
                  <p className="font-medium">Facebook groups, Zalo</p>
                </div>
                <div>
                  <span className="text-text-muted">Best areas</span>
                  <p className="font-medium">District 2, District 7, Thu Duc</p>
                </div>
              </div>
            </div>
          </section>

          {/* Singapore */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Singapore
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center mb-4">
              <div>
                <p className="text-text-secondary leading-relaxed">
                  Singapore does pickup football like it does everything else:
                  organized, efficient, and slightly expensive. The pitches are
                  excellent &mdash; mostly high-quality turf managed by the
                  government or private operators &mdash; and booking systems
                  are well-established.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  The main challenge in Singapore is pitch availability and cost.
                  Prime-time slots (evenings and weekends) book out fast and can
                  run SGD 200+ for a pitch, which gets split among players. The
                  expat community is huge though, and there are games at every
                  skill level. The humidity is constant and brutal year-round, so
                  hydration is non-negotiable.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80"
                  alt="Well-maintained football pitch in a modern city"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-surface border border-border/30 rounded-2xl p-5">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-muted">Typical cost</span>
                  <p className="font-medium">SGD 10&ndash;20 / person</p>
                </div>
                <div>
                  <span className="text-text-muted">Common format</span>
                  <p className="font-medium">5v5 to 11v11</p>
                </div>
                <div>
                  <span className="text-text-muted">Finding games</span>
                  <p className="font-medium">Meetup, Facebook, ActiveSG</p>
                </div>
                <div>
                  <span className="text-text-muted">Best areas</span>
                  <p className="font-medium">Turf City, East Coast, Kallang</p>
                </div>
              </div>
            </div>
          </section>

          {/* KL */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Kuala Lumpur, Malaysia
            </h2>
            <p className="text-text-secondary leading-relaxed">
              KL flies under the radar but has a solid pickup football scene.
              Malaysians love futsal &mdash; indoor 5v5 is more popular here than
              outdoor football for casual play &mdash; and futsal courts are
              everywhere. You&apos;ll find them in malls, on rooftops, in parking
              structures, and behind convenience stores. It&apos;s honestly
              impressive how many pitches they&apos;ve squeezed into the city.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              The expat football community is concentrated around Mont Kiara and
              Bangsar, with regular games most evenings. Costs are very
              reasonable, and the quality of facilities is generally good. The
              weather pattern is similar to Bangkok&apos;s rainy season
              year-round, with afternoon storms that clear up by evening.
            </p>
            <div className="bg-surface border border-border/30 rounded-2xl p-5 mt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-muted">Typical cost</span>
                  <p className="font-medium">RM 10&ndash;25 / person</p>
                </div>
                <div>
                  <span className="text-text-muted">Common format</span>
                  <p className="font-medium">Futsal (5v5 indoor)</p>
                </div>
                <div>
                  <span className="text-text-muted">Finding games</span>
                  <p className="font-medium">Facebook, WhatsApp groups</p>
                </div>
                <div>
                  <span className="text-text-muted">Best areas</span>
                  <p className="font-medium">Mont Kiara, Bangsar, TTDI</p>
                </div>
              </div>
            </div>
          </section>

          {/* General tips */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              General Tips for <span className="text-accent">Expat Football</span> in SEA
            </h2>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1200&q=80"
                alt="Group of friends playing casual football together"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Bring Cash",
                  desc: "Most games collect payment on the spot. Digital payments are growing but cash is still king at the pitch.",
                },
                {
                  title: "Respect the Locals",
                  desc: "You're a guest. Keep the intensity appropriate, don't argue with refs, and remember this is supposed to be fun.",
                },
                {
                  title: "Hydrate Like Your Life Depends On It",
                  desc: "Because in 35-degree heat with 90% humidity, it kind of does. Bring your own water, plus extra.",
                },
                {
                  title: "Show Up Consistently",
                  desc: "The fastest way to get invited to better games is to be reliable. Show up when you say you will.",
                },
                {
                  title: "Learn Basic Local Phrases",
                  desc: "Knowing how to say 'pass' and 'nice one' in Thai or Bahasa goes a long way toward making friends.",
                },
                {
                  title: "Invest in Good Boots",
                  desc: "Turf shoes are essential. Most SEA pitches are artificial, and molded studs will wreck them (and your knees).",
                },
              ].map((tip) => (
                <div
                  key={tip.title}
                  className="bg-surface border border-border/30 rounded-2xl p-5"
                >
                  <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Cultural differences */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Cultural Differences to Know About
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Football culture varies more than you might expect across
              Southeast Asia. In Thailand, games are generally friendly and
              non-confrontational &mdash; aggressive play is frowned upon, and
              tempers stay cool even when the scoreline doesn&apos;t. In
              Vietnam and Indonesia, the intensity ramps up and competitive fire
              is part of the fun. Singapore games tend to be well-organized with
              clear rules established upfront.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              Across all countries, there&apos;s a shared love of the game that
              transcends language barriers. You don&apos;t need to speak Thai or
              Bahasa to play a one-two or celebrate a goal. Football is the
              universal language, and Southeast Asia speaks it fluently.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-surface border border-accent/20 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-xl font-black mb-3">
              Find Your Game <span className="text-accent">Anywhere in SEA</span>
            </h2>
            <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
              BallR connects you to pickup football communities in Bangkok, Bali,
              and expanding across Southeast Asia. Find games, join up, and
              play &mdash; no WhatsApp group hunting required.
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
