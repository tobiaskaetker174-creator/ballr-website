import { FeatureCard } from "@/components/FeatureCard";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fussball spielen in Bangkok â Der komplette Guide 2026 | BallR",
  description:
    "Fussball spielen in Bangkok: Alles was du wissen musst. Spielorte, Kosten, Formate und wie du mit BallR sofort loslegen kannst. Dein Guide fuer 2026.",
  keywords: [
    "Fussball spielen Bangkok",
    "Fussball Bangkok",
    "wo Fussball spielen Bangkok",
    "Fussball Plaetze Bangkok",
    "Fussball Spiele Bangkok",
    "Kicken Bangkok",
  ],
  openGraph: {
    title: "Fussball spielen in Bangkok â Der komplette Guide 2026 | BallR",
    description:
      "Fussball spielen in Bangkok: Alles was du wissen musst. Spielorte, Kosten, Formate und wie du sofort loslegen kannst.",
    type: "website",
    siteName: "BallR",
  },
};

export default function FussballSpielenBangkokSEO() {
  return (
    <div className="pt-12 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Fussball spielen in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Dein kompletter Guide fuer 2026: Wo, wann und wie du in Bangkok
            Fussball spielen kannst â ob Expat, Tourist oder Einheimischer.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&q=80"
            alt="Fussball spielen in Bangkok"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium opacity-80">
              Bangkok â eine der aktivsten Fussball-Staedte Suedostasiens
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-4">
              Fussball in Bangkok â Ein Ueberblick
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkok ist eine der besten Staedte in Suedostasien, um Fussball
              zu spielen. Die Stadt bietet eine riesige Auswahl an
              Spielmoeglichkeiten: von professionellen Kunstrasenplaetzen ueber
              Freizeitfelder in Parks bis hin zu Indoor-Hallen. Und das Beste?
              Es gibt fast rund um die Uhr Spiele.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              Egal ob du ein erfahrener Spieler bist oder zum ersten Mal auf
              dem Platz stehst â Bangkok hat fuer jeden das Richtige. Die
              Fussball-Community ist vielfaeltig, international und
              einladend.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Wo kann man in Bangkok Fussball spielen?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Bangkok hat dutzende von Fussballplaetzen, die ueber die ganze
              Stadt verteilt sind. Hier sind die beliebtesten Gegenden:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  area: "Sukhumvit",
                  desc: "Das Herz der Expat-Szene. Mehrere Kunstrasenplaetze in der Naehe von BTS-Stationen. Ideal fuer After-Work-Spiele.",
                },
                {
                  area: "Silom / Sathorn",
                  desc: "Business-Viertel mit guten Spielmoeglichkeiten abends. Beliebt bei Bueroangestellten und Expats.",
                },
                {
                  area: "Chatuchak / Ladprao",
                  desc: "Groessere Plaetze, oft guenstiger. Gut erreichbar ueber MRT. Beliebt am Wochenende.",
                },
                {
                  area: "On Nut / Bangna",
                  desc: "Aufstrebende Gegend mit neuen Sportanlagen. Oft weniger voll und guenstigere Preise.",
                },
              ].map((item) => (
                <div
                  key={item.area}
                  className="bg-surface border border-border/30 rounded-2xl p-5"
                >
                  <h3 className="font-bold mb-2">{item.area}</h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Spielformate & Kosten
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Die haeufigsten Formate in Bangkok sind 5-gegen-5 und
              7-gegen-7 auf Kunstrasen. Die Kosten variieren je nach Spielort
              und Anzahl der Spieler:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                {
                  format: "5 vs 5",
                  price: "200-300 THB",
                  duration: "60 Min",
                },
                {
                  format: "6 vs 6",
                  price: "250-350 THB",
                  duration: "60-90 Min",
                },
                {
                  format: "7 vs 7",
                  price: "300-400 THB",
                  duration: "90 Min",
                },
              ].map((item) => (
                <div
                  key={item.format}
                  className="bg-surface border border-border/30 rounded-2xl p-5 text-center"
                >
                  <div className="text-xl font-black text-accent mb-2">
                    {item.format}
                  </div>
                  <div className="text-sm font-bold">{item.price}</div>
                  <div className="text-xs text-text-secondary mt-1">
                    {item.duration}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              BallR â Die einfachste Art, Fussball zu spielen
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              BallR buendelt alle verfuegbaren Spiele in einer App. Statt
              stundenlang in Messenger-Gruppen zu suchen, findest du in
              Sekunden das perfekte Spiel.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon="ð"
                title="Spiele finden"
                description="Alle verfuegbaren Spiele in Bangkok auf einen Blick â gefiltert nach deinen Praeferenzen."
              />
              <FeatureCard
                icon="â¡"
                title="Sofort buchen"
                description="In wenigen Sekunden angemeldet und bezahlt. Keine komplizierten Prozesse."
              />
              <FeatureCard
                icon="ð"
                title="ELO-Rating"
                description="Baue dein persoenliches Rating auf und sieh, wie du dich verbesserst."
              />
              <FeatureCard
                icon="ð"
                title="Leaderboard"
                description="Miss dich mit anderen Spielern und klettere in der Rangliste nach oben."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Praktische Tipps fuer Fussball in Bangkok
            </h2>
            <div className="space-y-3">
              {[
                "Trinke viel Wasser â die Hitze und Luftfeuchtigkeit sind nicht zu unterschaetzen",
                "Trage Kunstrasen-Schuhe (TF/Turf) fuer die meisten Plaetze",
                "Bringe ein Handtuch und Wechselkleidung mit",
                "Plane mit dem BTS/MRT â Parkplaetze sind oft begrenzt",
                "Abendspiele (18-22 Uhr) sind am beliebtesten â frueh buchen!",
                "Schienbeinschoner sind bei den meisten organisierten Spielen Pflicht",
              ].map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-3 text-text-secondary text-sm"
                >
                  <span className="text-accent mt-0.5">â</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Die beste Jahreszeit fuer Fussball in Bangkok
            </h2>
            <p className="text-text-secondary leading-relaxed">
              In Bangkok kann man das ganze Jahr ueber Fussball spielen. Die
              kuehle Jahreszeit (November bis Februar) ist am angenehmsten,
              mit Temperaturen um 25-30 Grad. In der heissen Jahreszeit (Maerz
              bis Mai) sind Abendspiele empfehlenswert. Waehrend der Regenzeit
              (Juni bis Oktober) kann es zu kurzen, heftigen Regenschauern
              kommen, aber die meisten Kunstrasenplaetze sind schnell wieder
              bespielbar.
            </p>
          </section>
        </article>

        {/* CTA */}
        <div className="text-center mt-16 bg-surface border border-accent/30 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">
            Bereit, in Bangkok Fussball zu spielen?
          </h2>
          <p className="text-text-secondary mb-6">
            Lade BallR herunter und finde noch heute dein erstes Spiel. Es
            dauert nur 30 Sekunden.
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
