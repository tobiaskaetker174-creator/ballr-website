import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BallR â Our Story",
  description:
    "BallR started because organizing pickup football shouldn't require a degree in project management. Here's our story.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            About <span className="text-accent">BallR</span>
          </h1>
          <p className="text-text-secondary text-lg">
            The story behind the app that&apos;s fixing pickup football.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1200&q=80"
            alt="Group of friends playing casual football"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="space-y-12">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-black mb-4 text-accent">Our Mission</h2>
            <p className="text-text-secondary leading-relaxed">
              Make pickup football accessible, fair, and fun for everyone. Whether
              you&apos;re an expat in Bangkok who just wants a kick-around, or a
              competitive player in Bali chasing ELO points â BallR is your home
              pitch.
            </p>
          </section>

          {/* The Problem */}
          <section>
            <h2 className="text-2xl font-black mb-4">The Problem</h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <p className="text-text-secondary leading-relaxed">
                We&apos;ve all been there. You move to a new city, you want to
                play football, and you end up in 12 WhatsApp groups where nobody
                shows up, teams are always stacked, and that one guy plays like
                it&apos;s a Champions League final against his in-laws. We built
                BallR because we were tired of it.
              </p>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80"
                  alt="Evening football under floodlights"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* The Vision */}
          <section>
            <h2 className="text-2xl font-black mb-4">The Vision</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              A global network of organized, skill-rated pickup football
              communities. Starting with Bangkok and Bali. Then everywhere else
              people kick a ball around.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Find a game", icon: "ð", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80" },
                { label: "Pay online", icon: "ð³", img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&q=80" },
                { label: "Show up and play", icon: "â½", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80" },
              ].map((step) => (
                <div key={step.label} className="bg-surface border border-border/30 rounded-2xl overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image src={step.img} alt={step.label} fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-2xl mb-1">{step.icon}</div>
                    <p className="text-sm text-text font-medium">{step.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-black mb-4">
              Impact <span className="text-accent">So Far</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "87+", label: "Players" },
                { value: "2", label: "Cities" },
                { value: "100+", label: "Games Played" },
                { value: "4.8", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface border border-border/30 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-accent">{stat.value}</div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Team photo */}
          <section>
            <h2 className="text-2xl font-black mb-4">The Team</h2>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&q=80"
                alt="BallR team playing football together"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-text-secondary leading-relaxed">
              BallR is built by football-obsessed developers and designers who
              believe technology should make playing easier, not harder. We&apos;re
              based in Bangkok, and yes, we play every week. Our ELOs are
              classified information.
            </p>
          </section>
        </div>

        <div className="text-center mt-16">
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105"
          >
            Join the Community
          </a>
        </div>
      </div>
    </div>
  );
}
