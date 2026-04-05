import { FeatureCard } from "@/components/FeatureCard";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pickup Fussball in Bangkok — Spiele finden & mitspielen | BallR",
  description:
    "Du suchst Pickup Fussball in Bangkok? BallR verbindet dich mit organisierten Spielen in der ganzen Stadt. Finde dein Level, tritt einem Spiel bei und spiele noch heute.",
  keywords: [
    "Pickup Fussball Bangkok",
    "Fussball spielen Bangkok",
    "Pickup Soccer Bangkok",
    "Fussball Spiele Bangkok",
    "Expat Fussball Bangkok",
  ],
  openGraph: {
    title: "Pickup Fussball in Bangkok — Spiele finden & mitspielen | BallR",
    description:
      "Du suchst Pickup Fussball in Bangkok? BallR verbindet dich mit organisierten Spielen in der ganzen Stadt.",
    type: "website",
    siteName: "BallR",
  },
};

export default function PickupFussballBangkokSEO() {
  return (
    <div className="pt-12 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Pickup Fussball in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Dein kompletter Guide, um Pickup-Fussball-Spiele in Bangkok zu
            finden und mitzuspielen. Von Sukhumvit bis Silom — BallR hat alles
            fuer dich.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1200&q=80"
            alt="Pickup Fussball in Bangkok"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium opacity-80">Jeden Tag Spiele in Bangkok</p>
          </div>
        </div>

        {/* Content */}
        <article className="prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-4">
              Was ist Pickup Fussball?
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Pickup Fussball ist informeller, organisierter Fussball ohne feste
              Mannschaften oder Ligaverpflichtungen. Spieler melden sich fuer
              einzelne Spiele an, Teams werden vor Ort eingeteilt, und jeder kann
              mitmachen — unabhaengig von Erfahrung oder Herkunft. Es ist die
              einfachste Art, in einer neuen Stadt Fussball zu spielen.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              In Bangkok ist die Pickup-Szene besonders lebendig. Tausende von
              Expats, digitalen Nomaden und Einheimischen suchen regelmaessig
              nach Spielmoeglichkeiten. Das Problem? Die meisten Spiele werden
              ueber verstreute WhatsApp- und LINE-Gruppen koordiniert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Pickup Fussball in Bangkok finden
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkok hat eine bluehende Pickup-Fussball-Szene, aber
              konsistente, gut organisierte Spiele zu finden, kann eine
              Herausforderung sein. Die meisten Spiele werden ueber verschiedene
              Messenger-Gruppen koordiniert, was es schwierig macht zu wissen,
              was an einem bestimmten Tag verfuegbar ist.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              BallR loest dieses Problem, indem alle verfuegbaren Spiele an
              einem Ort zusammengefasst werden — gefiltert nach Spielstaerke,
              Uhrzeit, Spielort und verfuegbaren Plaetzen. Kein Raten mehr,
              keine kurzfristigen Absagen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Beliebte Spielorte in Bangkok
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Benjakitti Park Field",
                  surface: "Kunstrasen",
                  amenities: "Umkleiden, Duschen, Parkplatz, Flutlicht",
                },
                {
                  name: "The Pitch BKK",
                  surface: "Kunstrasen",
                  amenities: "Umkleiden, Duschen, Bar, Flutlicht",
                },
                {
                  name: "Lumpini Stadium Pitch",
                  surface: "Rasen",
                  amenities: "Parkplatz, Flutlicht",
                },
              ].map((venue) => (
                <div
                  key={venue.name}
                  className="bg-surface border border-border/30 rounded-2xl p-5"
                >
                  <h3 className="font-bold text-sm mb-2">{venue.name}</h3>
                  <div className="text-xs text-accent mb-1">
                    {venue.surface}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {venue.amenities}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Warum BallR fuer Pickup Fussball nutzen?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon="🎯"
                title="Skill-basierte Spiele"
                description="Anfaenger, Fortgeschrittene, Profis oder gemischt — spiele auf deinem Level."
              />
              <FeatureCard
                icon="⚖️"
                title="Faire Teams"
                description="ELO-basierte Team-Aufteilung, damit jedes Spiel ausgeglichen ist."
              />
              <FeatureCard
                icon="💳"
                title="Online bezahlen"
                description="Kein Bargeld-Stress mehr. Bezahle bei der Buchung, Erstattung bei Absage."
              />
              <FeatureCard
                icon="📊"
                title="Fortschritt verfolgen"
                description="Baue dein ELO-Rating Spiel fuer Spiel auf. Sieh, wie du abschneidest."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              So funktioniert BallR
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "App herunterladen",
                  desc: "BallR ist kostenlos fuer iOS und Android verfuegbar.",
                },
                {
                  step: "2",
                  title: "Spiel finden",
                  desc: "Durchsuche verfuegbare Spiele nach Ort, Zeit und Spielstaerke.",
                },
                {
                  step: "3",
                  title: "Anmelden & spielen",
                  desc: "Melde dich an, bezahle online und erscheine zum Spiel. So einfach.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 bg-surface border border-border/30 rounded-2xl p-5"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="text-center mt-16 bg-surface border border-accent/30 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">
            Bereit fuer Pickup Fussball in Bangkok?
          </h2>
          <p className="text-text-secondary mb-6">
            87+ aktive Spieler. Spiele jeden Tag. Lade BallR herunter und
            spiele noch heute Abend mit.
          </p>
          <a
            href="/#download"
            className="inline-block bg-primary hover:bg-primary-dark text-text font-bold px-8 py-3 rounded-xl transition-colors"
          >
            BallR herunterladen
          </a>
        </div>
      </div>
    </div>
  );
}
