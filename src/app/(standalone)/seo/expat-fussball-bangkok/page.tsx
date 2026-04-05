import { FeatureCard } from "@/components/FeatureCard";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Expat Fussball in Bangkok — Finde Anschluss & spiele mit | BallR",
  description:
    "Als Expat Fussball in Bangkok spielen? BallR verbindet dich mit der internationalen Fussball-Community. Finde Spiele, lerne Leute kennen und bleib aktiv.",
  keywords: [
    "Expat Fussball Bangkok",
    "Fussball fuer Expats Bangkok",
    "internationale Fussball Community Bangkok",
    "Expat Sport Bangkok",
    "Fussball Auslaender Bangkok",
  ],
  openGraph: {
    title: "Expat Fussball in Bangkok — Finde Anschluss & spiele mit | BallR",
    description:
      "Als Expat Fussball in Bangkok spielen? BallR verbindet dich mit der internationalen Fussball-Community.",
    type: "website",
    siteName: "BallR",
  },
};

export default function ExpatFussballBangkokSEO() {
  return (
    <div className="pt-12 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Expat Fussball in{" "}
            <span className="text-accent">Bangkok</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Du lebst als Expat in Bangkok und vermisst den Fussball? Entdecke
            die groesste internationale Fussball-Community der Stadt und finde
            sofort Anschluss.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80"
            alt="Expat Fussball Community Bangkok"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium opacity-80">
              Internationale Community — ueber 20 Nationalitaeten
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-4">
              Fussball als Expat in Bangkok — Die Herausforderung
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Als Expat in einer neuen Stadt Fussball zu spielen, ist oft
              leichter gesagt als getan. Wo findet man Spiele? Wie kommt man
              in bestehende Gruppen rein? Und wie findet man Spieler auf dem
              eigenen Level?
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              In Bangkok gibt es eine lebendige Expat-Fussball-Szene mit
              Spielern aus ueber 20 Laendern. Das Problem ist nicht das
              Angebot — es ist die Zugaenglichkeit. Informationen sind ueber
              dutzende Messenger-Gruppen verstreut, und als Neuankoemmling
              braucht man oft Wochen, um die richtigen Kontakte zu finden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Warum Expats BallR lieben
            </h2>
            <p className="text-text-secondary leading-relaxed">
              BallR wurde genau fuer diese Situation entwickelt. Statt
              wochenlang nach der richtigen Gruppe zu suchen, oeffnest du
              einfach die App und siehst sofort alle verfuegbaren Spiele —
              gefiltert nach deinem Standort, deiner bevorzugten Spielzeit und
              deinem Skill-Level.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <FeatureCard
                icon="🌍"
                title="Internationale Community"
                description="Spieler aus ueber 20 Laendern. Die Sprache auf dem Platz? Fussball."
              />
              <FeatureCard
                icon="🤝"
                title="Sofort Anschluss"
                description="Kein muehsames Suchen. Melde dich an und spiele noch am selben Abend."
              />
              <FeatureCard
                icon="⚖️"
                title="Faire Spiele"
                description="ELO-basierte Team-Aufteilung sorgt fuer ausgeglichene Matches."
              />
              <FeatureCard
                icon="🔄"
                title="Flexibel"
                description="Keine Vereinsverpflichtung. Spiele wann und wie oft du willst."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Die Expat-Fussball-Szene in Bangkok
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Bangkoks Expat-Fussball-Szene ist eine der aktivsten in
              Suedostasien. Es gibt Spiele fuer jeden Geschmack: entspannte
              Freizeitruenden nach der Arbeit, kompetitive Matches am
              Wochenende und sogar Expat-Ligen und Turniere.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              Die meisten Spiele finden auf modernen Kunstrasenplaetzen statt,
              viele davon in der Naehe von Sukhumvit, Silom und Sathorn — den
              beliebtesten Expat-Vierteln der Stadt. Die Spiele sind in der
              Regel abends zwischen 18 und 22 Uhr, perfekt nach einem langen
              Arbeitstag.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Haeufige Fragen von Expats
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Muss ich gut sein, um mitzuspielen?",
                  a: "Nein! BallR bietet Spiele fuer alle Level — von kompletten Anfaengern bis zu ehemaligen Vereinsspielern.",
                },
                {
                  q: "Wie viel kostet ein Spiel?",
                  a: "Typischerweise 200-400 Baht pro Person, je nach Spielort. Alles wird direkt in der App bezahlt.",
                },
                {
                  q: "Muss ich Thai sprechen?",
                  a: "Nein. Die Expat-Spiele laufen ueberwiegend auf Englisch. Fussball ist sowieso eine universelle Sprache.",
                },
                {
                  q: "Kann ich alleine kommen?",
                  a: "Absolut! Die meisten Spieler kommen alleine. BallR ist genau dafuer gemacht.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-surface border border-border/30 rounded-2xl p-5"
                >
                  <h3 className="font-bold text-sm mb-2">{faq.q}</h3>
                  <p className="text-text-secondary text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4">
              Mehr als nur Fussball
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Fuer viele Expats ist Fussball mehr als nur Sport — es ist eine
              Moeglichkeit, Freundschaften zu schliessen, fit zu bleiben und
              sich in einer neuen Stadt heimisch zu fuehlen. Die BallR-Community
              organisiert regelmaessig After-Game-Events, und viele Spieler
              berichten, dass sie ihre besten Freunde in Bangkok auf dem
              Fussballplatz gefunden haben.
            </p>
          </section>
        </article>

        {/* CTA */}
        <div className="text-center mt-16 bg-surface border border-accent/30 rounded-3xl p-8">
          <h2 className="text-2xl font-black mb-3">
            Finde deine Fussball-Community in Bangkok
          </h2>
          <p className="text-text-secondary mb-6">
            Ueber 87 aktive Expat-Spieler. Spiele jeden Tag. Lade BallR
            herunter und finde sofort Anschluss.
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
