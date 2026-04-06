import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — BallR | Every Tool Your League Needs',
  description: 'ELO ratings, auto team balancing, season tracking, payments, reliability scores, and more. BallR gives your pickup football league professional-grade tools for free.',
};

const features = [
  {
    icon: '📊',
    title: 'ELO Rating System',
    desc: 'Every player gets a dynamic ELO rating that updates after each game. Based on the same system used in chess — wins against stronger opponents give more points, losses against weaker ones cost more. Watch your rating climb as you improve.',
    details: ['Automatic rating adjustment after each game', 'Head-to-head expected outcome predictions', 'Rating history and progression charts', 'Global and league-specific rankings'],
  },
  {
    icon: '⚖️',
    title: 'Auto Team Balancing',
    desc: 'No more lopsided games. BallR automatically creates balanced teams using ELO ratings. Average team difference is just 12 ELO points — practically equal skill on both sides.',
    details: ['One-tap balanced team generation', 'Multiple balancing algorithms (ELO, random, captains)', 'Manual overrides for friend groups', 'Historical balance accuracy tracking'],
  },
  {
    icon: '💳',
    title: 'Built-in Payments',
    desc: 'Collect game fees, manage subscriptions, split venue costs. No more chasing people on Venmo. Coming soon: automated payment reminders and no-pay-no-play enforcement.',
    details: ['Collect game fees per session', 'Monthly league subscriptions', 'Split venue and equipment costs', 'Payment history and tracking'],
    badge: 'Coming Soon',
  },
  {
    icon: '⭐',
    title: 'Player Reliability Score',
    desc: 'Track who actually shows up. Players earn reliability scores based on RSVP accuracy. Organizers can see at a glance who flakes and who delivers.',
    details: ['RSVP tracking with show/no-show history', 'Automatic reliability percentage', 'Late cancellation penalties', 'Priority access for reliable players'],
  },
  {
    icon: '🏆',
    title: 'Season Tracking',
    desc: 'Run proper seasons with standings, playoffs, and awards. Track wins, draws, losses, goal difference, and points. Crown champions at the end of each season.',
    details: ['Customizable season length and format', 'Automatic standings and point tables', 'Playoff bracket generation', 'Season MVP and awards voting'],
  },
  {
    icon: '📅',
    title: 'Game Scheduling',
    desc: 'Schedule games, manage RSVPs, and auto-remind players. Set recurring weekly games or one-off events. Players get notified and can confirm with one tap.',
    details: ['Recurring and one-off game creation', 'RSVP management with waitlists', 'Automatic reminders 24h and 2h before', 'Weather integration for outdoor games'],
  },
  {
    icon: '🔒',
    title: 'Private & Public Leagues',
    desc: 'Keep your league invite-only with a private code, or make it public and let anyone in your city discover and join. Your league, your rules.',
    details: ['Invite-only with shareable codes', 'Public discovery via marketplace', 'Admin approval for new members', 'Multiple admin roles and permissions'],
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    desc: 'Built for phones first. Quick actions, large touch targets, and fast load times. Check scores on the pitch, RSVP from the bus, manage your league from anywhere.',
    details: ['Progressive Web App (installable)', 'Offline score entry', 'Push notifications', 'Dark mode support'],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-emerald-950/30 to-zinc-950 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm text-emerald-400 mb-6">
            ⚡ All features free. No premium tiers. No catches.
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything Your League Needs
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Professional-grade league management tools, built for pickup football communities. Zero cost, zero friction.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {features.map((feature, i) => (
            <div key={feature.title} className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{feature.icon}</span>
                  <h2 className="text-2xl font-bold">{feature.title}</h2>
                  {feature.badge && (
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-500/20">{feature.badge}</span>
                  )}
                </div>
                <p className="text-zinc-400 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.details.map(detail => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-zinc-500">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-80 h-48 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">BallR vs The Rest</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-800 text-sm font-medium text-zinc-500">
            <span>Feature</span>
            <span className="text-emerald-400">BallR</span>
            <span>WhatsApp</span>
            <span>Meetup</span>
            <span>Facebook</span>
          </div>
          {[
            ['ELO Rating System', '✅', '❌', '❌', '❌'],
            ['Auto Team Balancing', '✅', '❌', '❌', '❌'],
            ['Built-in Payments', '✅', '🔧', '❌', '❌'],
            ['Reliability Score', '✅', '❌', '❌', '❌'],
            ['Season Tracking', '✅', '❌', '❌', '❌'],
            ['Private/Public', '✅', '🔒 only', '🌐 only', '🌐 only'],
            ['Cost', 'Free', 'Free', '$2-5/mo', 'Free'],
          ].map(row => (
            <div key={row[0]} className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-800/50 text-sm">
              <span className="text-zinc-300">{row[0]}</span>
              <span>{row[1]}</span>
              <span className="text-zinc-500">{row[2]}</span>
              <span className="text-zinc-500">{row[3]}</span>
              <span className="text-zinc-500">{row[4]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your League?</h2>
        <p className="text-zinc-400 mb-8">Create your league in 60 seconds. Invite your crew. Start playing.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/create" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors">
            Create Your League →
          </Link>
          <Link href="https://ballr-marketplace.vercel.app" className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors">
            Browse Marketplace →
          </Link>
        </div>
      </div>
    </div>
  );
}
