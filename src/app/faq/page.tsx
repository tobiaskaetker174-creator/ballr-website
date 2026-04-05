import Link from 'next/link';

const faqs = [
  { q: 'What is BallR?', a: 'BallR is a pickup football platform that helps you find, book, and play football games in your city. Think of it as "Airbnb for pickup football" — we connect players with games, handle payments, and use ELO ratings to make every match competitive and fair.' },
  { q: 'How much does it cost to play?', a: 'Game prices vary by venue and format, typically $5-15 per player. The cost is split evenly among all participants. There are no platform fees — what you see is what you pay. Payment is handled securely via Stripe.' },
  { q: 'What skill levels are welcome?', a: 'All levels! BallR uses an ELO rating system to match players of similar skill. Whether you\'re a beginner or ex-semi-pro, there\'s a game for you. Games are tagged with skill level recommendations so you can find the right fit.' },
  { q: 'How does the ELO rating system work?', a: 'Similar to chess ELO, your rating starts at 1000 and changes based on game outcomes. Beat a team with higher-rated players? Your rating jumps more. Lose to lower-rated players? It drops more. This creates naturally balanced, competitive games over time.' },
  { q: 'What is Baller of the Month?', a: 'Each month, we crown the top-performing player in each city based on a combination of ELO gains, games played, and sportsmanship ratings. Winners get featured on the leaderboard and earn exclusive bragging rights.' },
  { q: 'Can I cancel a booking?', a: 'Yes, you can cancel up to 2 hours before game time for a full refund. Cancellations within 2 hours are non-refundable to ensure games aren\'t disrupted. Frequent no-shows affect your reliability score.' },
  { q: 'What happens if not enough players show up?', a: 'If a game doesn\'t reach minimum players 2 hours before kickoff, all players are notified and given a full refund. We also have a waitlist system that automatically fills spots from interested players.' },
  { q: 'How does team balancing work?', a: 'Our algorithm uses ELO ratings to create the most balanced teams possible. Each team\'s total ELO is matched within a tight range, ensuring competitive games regardless of individual skill differences.' },
  { q: 'What about safety and fair play?', a: 'All players can be reported for unsportsmanlike behavior. We have a sportsmanship rating alongside skill ratings. Players with consistently low sportsmanship scores are warned and can be suspended. We take fair play seriously.' },
  { q: 'Which cities is BallR available in?', a: 'Currently Bangkok and Bali, with Singapore, Kuala Lumpur, and Ho Chi Minh City coming in 2026. We\'re expanding rapidly across Southeast Asia. Interested in bringing BallR to your city? Let us know!' },
  { q: 'Can I create my own league?', a: 'Yes! BallR Leagues lets you create closed communities with custom rules, schedules, and leaderboards. Perfect for office leagues, friend groups, or neighborhood tournaments. Organizers get a revenue dashboard and management tools.' },
  { q: 'How do Crews work?', a: 'Crews are closed communities for regular groups. Create a crew, invite friends via code, and organize private games. Each crew has its own ELO leaderboard, game history, and chat. Think of it as your football squad\'s home base.' },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800/50 backdrop-blur-xl sticky top-0 z-50 bg-gray-950/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-purple-400">⚽ BallR</Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link>
            <Link href="/faq" className="text-purple-400 font-medium">FAQ</Link>
          </div>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-center text-gray-400 mb-12">Everything you need to know about BallR</p>

        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
              <h3 className="font-semibold text-white mb-2 text-lg">{q}</h3>
              <p className="text-gray-400 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
          <h2 className="text-xl font-bold mb-3">Still have questions?</h2>
          <p className="text-gray-400 mb-4">Reach out to us on social media or join a game and ask the community!</p>
          <Link href="/how-it-works" className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-colors">
            See How It Works →
          </Link>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(({ q, a }) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": { "@type": "Answer", "text": a }
            }))
          })
        }}
      />

      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        © 2026 BallR. Pickup football, reimagined.
      </footer>
    </div>
  );
}
