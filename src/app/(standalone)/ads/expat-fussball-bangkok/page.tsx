import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Expat Fussball Bangkok â Sofort Anschluss finden | BallR",
  description:
    "Expat in Bangkok? Finde sofort Fussball-Spiele und Anschluss an die internationale Community. BallR â die #1 App fuer Expat-Fussball.",
  keywords: [
    "Expat Fussball Bangkok",
    "Fussball fuer Expats Bangkok",
    "internationale Fussball Community Bangkok",
  ],
  robots: "noindex, nofollow",
};

export default function ExpatFussballBangkokAds() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Hero CTA */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Expat Fussball in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-6">
            Neu in Bangkok? Finde sofort Anschluss ueber Fussball.
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
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80"
            alt="Expat Fussball Bangkok"
            fill
            className="object-cover"
          />
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { stat: "20+", label: "Nationalitaeten" },
            { stat: "87+", label: "Aktive Expats" },
            { stat: "Jeden Tag", label: "Spiele" },
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
            "Internationale Community â ueber 20 Laender",
            "Spiele in der Naehe von Sukhumvit, Silom & Sathorn",
            "Kein Thai noetig â Spiele auf Englisch",
            "Sofort Anschluss â komm alleine, geh mit Freunden",
            "Alle Level willkommen â von Anfaenger bis Profi",
          ].map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 bg-surface border border-border/30 rounded-xl p-4"
            >
              <span className="text-accent text-lg">â</span>
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-4 mb-10">
          <div className="bg-surface border border-accent/30 rounded-2xl p-6">
            <p className="text-text-secondary italic mb-3">
              &ldquo;Ich bin vor 3 Monaten nach Bangkok gezogen und habe
              ueber BallR sofort eine tolle Fussball-Gruppe gefunden. Beste
              Entscheidung!&rdquo;
            </p>
            <div className="text-sm font-bold">â Thomas, Expat aus Muenchen</div>
          </div>
          <div className="bg-surface border border-accent/30 rounded-2xl p-6">
            <p className="text-text-secondary italic mb-3">
              &ldquo;Als ich nach Bangkok kam, kannte ich niemanden. Ueber
              BallR habe ich nicht nur Fussball gespielt, sondern auch meine
              besten Freunde gefunden.&rdquo;
            </p>
            <div className="text-sm font-bold">â Lukas, Expat aus Zuerich</div>
          </div>
        </div>

        {/* Contact / Signup Form */}
        <div className="bg-surface border border-border/30 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-black mb-4 text-center">
            Jetzt der Community beitreten
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
            <select className="w-full bg-black/30 border border-border/30 rounded-xl px-4 py-3 text-sm text-text-secondary focus:border-accent focus:outline-none">
              <option value="">Dein Fussball-Level</option>
              <option value="beginner">Anfaenger</option>
              <option value="intermediate">Fortgeschritten</option>
              <option value="advanced">Erfahren</option>
            </select>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-text font-bold py-3 rounded-xl transition-colors"
            >
              Community beitreten
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
