import { FeatureCard } from "@/components/FeatureCard";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Amateur Fussball in Bangkok — Dein Guide fuer Hobbykicker | BallR",
  description:
    "Amateur Fussball in Bangkok: Finde organisierte Spiele fuer Hobbyspieler aller Level. BallR bringt Bangkoks Amateur-Fussball-Community zusammen.",
  keywords: [
    "Amateur Fussball Bangkok",
    "Hobbyfussball Bangkok",
    "Fussball fuer Anfaenger Bangkok",
    "Freizeitfussball Bangkok",
    "Fussball Community Bangkok",
  ],
  openGraph: {
    title: "Amateur Fussball in Bangkok — Dein Guide fuer Hobbykicker | BallR",
    description:
      "Amateur Fussball in Bangkok: Finde organisierte Spiele fuer Hobbyspieler aller Level.",
    type: "website",
    siteName: "BallR",
  },
};

export default function AmateurFussballBangkokSEO() {
  return (
    <div className="pt-12 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Amateur Fussball in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Du bist Hobbykicker und lebst in Bangkok? Entdecke eine wachsende
            Community von Amateurfussballern und finde Spiele, die zu deinem
            Level passen.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80"
            alt="Amateur Fussball in Bangkok"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium opacity-80">
              Amateur Fussball fuer jedes Level
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-4">
              Amateur Fussball in Bangkok — Was dich erwartet
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkok ist ein Paradies fuer Amateur-Fussballer. Die Stadt
              bietet dutzende Kunstrasen- und Rasenplaetze, die abends und am
              Wochenende fuer organisierte Spiele genutzt werden. Von
              entspannten Freizeitrunden bis hin zu kompetitiven
              Amateur-Matches — es gibt fuer jeden das Richtige.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              Die groesste Herausforderung? Die richtige Gruppe zu finden.
              Viele Spiele werden informell ueber Messenger organisiert, und
              als Neuankoemmling ist es schwer, den Anschluss zu finden. Genau
              hier kommt BallR ins Spiel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Fuer wen ist Amateur Fussball geeignet?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Anfaenger",
                  desc: "Du hast gerade erst angefangen? Kein Problem. BallR bietet Spiele speziell fuer Anfaenger, in denen der Spass im Vordergrund steht.",
                },
                {
                  title: "Gelegenheitsspieler",
                  desc: "Du spielst ab und zu und suchst flexible Moeglichkeiten? Melde dich einfach an, wenn du Zeit hast — keine Verpflichtungen.",
                },
                {
                  title: "Fortgeschrittene",
                  desc: "Du hast frueher im Verein gespielt? Finde Spiele mit hoeherer Intensitaet und besserer Technik.",
                },
                {
                  title: "Comeback-Spieler",
                  desc: "Nach einer laengeren Pause zurueck? Starte langsam und arbeite dich hoch — in deinem eigenen Tempo.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface border border-border/30 rounded-2xl p-5"
                >
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Was BallR fuer Amateure bietet
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureCard
                icon="🏟️"
                title="Beste Spielorte"
                description="Zugang zu den besten Kunstrasen- und Rasenplaetzen in ganz Bangkok."
              />
              <FeatureCard
                icon="📱"
                title="Einfache Buchung"
                description="In wenigen Klicks angemeldet. Bezahle online und erscheine einfach."
              />
              <FeatureCard
                icon="👥"
                title="Faire Aufteilung"
                description="ELO-basierte Teams sorgen fuer ausgeglichene und spassige Spiele."
              />
              <FeatureCard
                icon="📈"
                title="Dein Fortschritt"
                description="Verfolge deine Entwicklung mit deinem persoenlichen ELO-Rating."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Typische Spielformate in Bangkok
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Die meisten Amateur-Spiele in Bangkok werden als 5-gegen-5,
              6-gegen-6 oder 7-gegen-7 auf Kunstrasenplaetzen gespielt. Die
              Spiele dauern in der Regel 60 bis 90 Minuten und finden abends
              zwischen 18 und 22 Uhr statt. Am Wochenende gibt es oft
              zusaetzliche Sessions am Vormittag.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              Die Kosten pro Spiel liegen typischerweise zwischen 200 und 400
              Baht pro Person, je nach Spielort und Spieleranzahl. Bei BallR
              ist die Zahlung direkt in der App moeglich — kein Bargeld noetig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Tipps fuer deinen Einstieg
            </h2>
            <div className="space-y-3">
              {[
                "Bring Schienbeinschoner und Indoor-Schuhe (TF) mit",
                "Komm 10 Minuten frueher zum Aufwaermen",
                "Trink genuegend Wasser — Bangkok ist heiss!",
                "Sei offen und kommunikativ — die Community ist freundlich",
                "Starte mit gemischten Spielen, bevor du dich an kompetitivere wagst",
              ].map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-3 text-text-secondary text-sm"
                >
                  <span className="text-accent mt-0.5">→</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="text-center mt-16 bg-surface border border-accent/30 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">
            Starte jetzt mit Amateur Fussball in Bangkok
          </h2>
          <p className="text-text-secondary mb-6">
            Hunderte Hobbykicker warten auf dich. Lade BallR herunter und finde
            dein erstes Spiel.
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
