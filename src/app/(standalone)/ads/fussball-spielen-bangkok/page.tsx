import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fussball spielen in Bangkok â Jetzt loslegen | BallR",
  description:
    "Fussball spielen in Bangkok. Finde Spiele, buche in Sekunden und spiele noch heute. BallR â die #1 Fussball-App in Bangkok.",
  keywords: [
    "Fussball spielen Bangkok",
    "Fussball Bangkok",
    "Kicken Bangkok",
    "wo Fussball spielen Bangkok",
  ],
  robots: "noindex, nofollow",
};

export default function FussballSpielenBangkokAds() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Hero CTA */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Fussball spielen in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-6">
            Finde Spiele. Buche in Sekunden. Spiele noch heute.
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
            src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=900&q=80"
            alt="Fussball spielen in Bangkok"
            fill
            className="object-cover"
          />
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { stat: "500+", label: "Spiele organisiert" },
            { stat: "5+", label: "Spielorte" },
            { stat: "30 Sek", label: "Zum ersten Spiel" },
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
            "Spiele jeden Tag â morgens, mittags, abends",
            "5v5, 6v6, 7v7 â alle Formate verfuegbar",
            "Faire Teams durch ELO-basierte Aufteilung",
            "Online bezahlen â 200-400 THB pro Spiel",
            "Alle Level willkommen",
            "Kunstrasen & Rasenplaetze in ganz Bangkok",
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

        {/* How it works - compact */}
        <div className="bg-surface border border-border/30 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-black mb-4 text-center">
            So einfach geht&apos;s
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { step: "1", label: "App laden" },
              { step: "2", label: "Spiel finden" },
              { step: "3", label: "Mitspielen" },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-lg mx-auto mb-2">
                  {item.step}
                </div>
                <div className="text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-4 mb-10">
          <div className="bg-surface border border-accent/30 rounded-2xl p-6">
            <p className="text-text-secondary italic mb-3">
              &ldquo;BallR hat Fussball in Bangkok fuer mich komplett
              veraendert. Ich finde jetzt in Sekunden ein Spiel, statt ewig in
              Gruppen zu suchen.&rdquo;
            </p>
            <div className="text-sm font-bold">â Jan, Digitaler Nomade</div>
          </div>
          <div className="bg-surface border border-accent/30 rounded-2xl p-6">
            <p className="text-text-secondary italic mb-3">
              &ldquo;Die Team-Aufteilung ist super fair. Jedes Spiel ist eng
              und macht Spass. Genau so soll Fussball sein.&rdquo;
            </p>
            <div className="text-sm font-bold">â Felix, Expat aus Berlin</div>
          </div>
        </div>

        {/* Contact / Signup Form */}
        <div className="bg-surface border border-border/30 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-black mb-4 text-center">
            Werde benachrichtigt ueber neue Spiele
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
            <div className="grid grid-cols-2 gap-3">
              <select className="bg-black/30 border border-border/30 rounded-xl px-4 py-3 text-sm text-text-secondary focus:border-accent focus:outline-none">
                <option value="">Dein Level</option>
                <option value="beginner">Anfaenger</option>
                <option value="intermediate">Fortgeschritten</option>
                <option value="advanced">Erfahren</option>
              </select>
              <select className="bg-black/30 border border-border/30 rounded-xl px-4 py-3 text-sm text-text-secondary focus:border-accent focus:outline-none">
                <option value="">Bevorzugte Zeit</option>
                <option value="morning">Morgens</option>
                <option value="evening">Abends</option>
                <option value="weekend">Wochenende</option>
              </select>
            </div>
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
