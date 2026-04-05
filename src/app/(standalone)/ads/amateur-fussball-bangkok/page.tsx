import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Amateur Fussball Bangkok — Jetzt mitspielen | BallR",
  description:
    "Amateur Fussball in Bangkok. Finde Spiele fuer dein Level, melde dich an und spiele noch heute. BallR — die App fuer Hobbykicker.",
  keywords: [
    "Amateur Fussball Bangkok",
    "Hobbyfussball Bangkok",
    "Freizeitfussball Bangkok",
  ],
  robots: "noindex, nofollow",
};

export default function AmateurFussballBangkokAds() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Hero CTA */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Amateur Fussball in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-6">
            Hobbykicker? Finde Spiele auf deinem Level — jeden Tag.
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
            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=80"
            alt="Amateur Fussball Bangkok"
            fill
            className="object-cover"
          />
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { stat: "200+", label: "Spiele gespielt" },
            { stat: "5", label: "Spielorte" },
            { stat: "100%", label: "Organisiert" },
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
            "Spiele fuer Anfaenger bis Fortgeschrittene",
            "Faire Team-Aufteilung durch ELO-System",
            "Keine Vereinspflicht — spiele wann du willst",
            "Online zahlen, kein Bargeld noetig",
            "Freundliche internationale Community",
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
            &ldquo;Endlich eine App, die Amateur-Fussball in Bangkok einfach
            macht. Ich spiele jetzt regelmaessig und habe tolle Leute
            kennengelernt.&rdquo;
          </p>
          <div className="text-sm font-bold">— Stefan, Hobbykicker aus Wien</div>
        </div>

        {/* Contact / Signup Form */}
        <div className="bg-surface border border-border/30 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-black mb-4 text-center">
            Bleib auf dem Laufenden
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
              Benachrichtige mich
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
