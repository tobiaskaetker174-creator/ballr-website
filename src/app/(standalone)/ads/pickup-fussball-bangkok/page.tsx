import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pickup Fussball Bangkok — Jetzt mitspielen | BallR",
  description:
    "Pickup Fussball in Bangkok. Finde Spiele, melde dich an und spiele noch heute. BallR — die #1 App fuer Pickup Fussball.",
  keywords: [
    "Pickup Fussball Bangkok",
    "Fussball spielen Bangkok",
    "Pickup Soccer Bangkok",
  ],
  robots: "noindex, nofollow",
};

export default function PickupFussballBangkokAds() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Hero CTA */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Pickup Fussball in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-6">
            Finde Spiele. Melde dich an. Spiele noch heute.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#download"
              className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              BallR kostenlos herunterladen
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-10">
          <Image
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=900&q=80"
            alt="Pickup Fussball Bangkok"
            fill
            className="object-cover"
          />
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { stat: "87+", label: "Aktive Spieler" },
            { stat: "7", label: "Spiele pro Woche" },
            { stat: "4.9★", label: "App Bewertung" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-surface border border-border/30 rounded-2xl p-4 text-center"
            >
              <div className="text-2xl font-black text-accent">{item.stat}</div>
              <div className="text-xs text-text-secondary mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-10">
          {[
            "Spiele jeden Tag in Bangkok verfuegbar",
            "Skill-basierte Teams fuer faire Spiele",
            "Online bezahlen — kein Bargeld noetig",
            "ELO-Rating & Leaderboard",
            "Kostenlos herunterladen",
          ].map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 bg-surface border border-border/30 rounded-xl p-4"
            >
              <span className="text-accent text-lg">✓</span>
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-surface border border-accent/30 rounded-2xl p-6 mb-10">
          <p className="text-text-secondary italic mb-3">
            &ldquo;Seit ich BallR nutze, spiele ich 3x pro Woche. Die
            Team-Aufteilung ist genial und die Spiele sind immer
            ausgeglichen.&rdquo;
          </p>
          <div className="text-sm font-bold">— Marco, Expat aus Deutschland</div>
        </div>

        {/* Contact / Signup Form */}
        <div className="bg-surface border border-border/30 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-black mb-4 text-center">
            Erfahre als Erster von neuen Spielen
          </h2>
          <form className="space-y-3" action="/#download" method="GET">
            <input
              type="text"
              placeholder="Dein Name"
              className="w-full bg-black/30 border border-border/30 rounded-xl px-4 py-3 text-sm placeholder:text-text-secondary focus:border-accent focus:outline-none"
            />
            <input
              type="email"
              placeholder="Deine E-Mail"
              className="w-full bg-black/30 border border-border/30 rounded-xl px-4 py-3 text-sm placeholder:text-text-secondary focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-text font-bold py-3 rounded-xl transition-colors"
            >
              Jetzt anmelden
            </button>
          </form>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            BallR jetzt herunterladen
          </a>
          <p className="text-text-secondary text-xs mt-3">
            Kostenlos fuer iOS & Android
          </p>
        </div>
      </div>
    </div>
  );
}
