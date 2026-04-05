import Link from 'next/link';

const steps = [
  { num: 1, emoji: '📱', title: 'Download the App', desc: 'Get BallR from the App Store or Google Play. Create your profile in 30 seconds — name, position, skill level. That\'s it.' },
  { num: 2, emoji: '🔍', title: 'Find a Game', desc: 'Browse upcoming pickup games in your city. Filter by date, venue, skill level, and format (5v5, 7v7, 11v11). See who\'s already joined.' },
  { num: 3, emoji: '💳', title: 'Book & Pay', desc: 'Reserve your spot with one tap. Pay securely via Stripe — prices are split evenly among players. Transparent, no hidden fees.' },
  { num: 4, emoji: '⚽', title: 'Show Up & Play', desc: 'Arrive at the venue, check in, and play. Teams are balanced by our ELO algorithm so every game is competitive and fun.' },
  { num: 5, emoji: '⭐', title: 'Get Rated & Climb', desc: 'After the game, rate other players on skill and sportsmanship. Your ELO updates in real-time. Compete for Baller of the Month!' },
];

const features = [
  { icon: '🏆', title: 'ELO Rating System', desc: 'Chess-style ELO ratings for football. Win against better players? Bigger rating boost. Fair, transparent, motivating.' },
  { icon: '👥', title: 'Crews & Leagues', desc: 'Create or join closed communities. Organize private leagues with custom rules, schedules, and leaderboards.' },
  { icon: '🛡️', title: 'Safety & Fair Play', desc: 'Verified players, sportsmanship ratings, and a reporting system. We keep games clean and competitive.' },
  { icon: '📊', title: 'Stats & Analytics', desc: 'Track your performance over time. See your ELO history, win rate, favorite venues, and more.' },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800/50 backdrop-blur-xl sticky top-0 z-50 bg-gray-950/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-purple-400">⚽ BallR</Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/how-it-works" className="text-purple-400 font-medium">How It Works</Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">How BallR Works</h1>
        <p className="text-xl text-gray-400">From download to your first game in under 5 minutes.</p>
      </section>

      {/* Steps */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent hidden sm:block" />
          <div className="space-y-8">
            {steps.map(step => (
              <div key={step.num} className="relative flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-2xl flex items-center justify-center text-3xl z-10">
                  {step.emoji}
                </div>
                <div className="pt-2">
                  <div className="text-xs text-purple-400 font-mono mb-1">Step {step.num}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-800">
        <h2 className="text-2xl font-bold text-center mb-10">What Makes BallR Different</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-bold text-lg mt-3 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Ball?</h2>
          <p className="text-gray-400 mb-6">Join 500+ players in Bangkok and Bali. Your first game is on us.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm text-gray-400">📱 App Store — Coming Soon</span>
            <span className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm text-gray-400">🤖 Google Play — Coming Soon</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        © 2026 BallR. Pickup football, reimagined.
      </footer>
    </div>
  );
}
