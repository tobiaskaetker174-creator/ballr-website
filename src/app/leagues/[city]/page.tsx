import { cityData, allCitySlugs } from "@/lib/league-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return allCitySlugs.map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const data = cityData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.name} Pickup Football Leagues â BallR`,
    description: `Join ${data.stats.leagues} pickup football leagues in ${data.name}. ${data.stats.players} active players. Find games, track your Elo, play tonight.`,
    keywords: [`${data.name} pickup football`, `${data.name} football league`, `football ${data.name}`, `BallR ${data.name}`],
  };
}

export default async function CityLeaguePage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const data = cityData[slug];
  if (!data) notFound();

  return (
    <div className="pt-20 pb-16">
      {/* City Hero */}
      <div className="relative h-[40vh] sm:h-[45vh] overflow-hidden">
        <Image src={data.img} alt={`Football in ${data.name}`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background flex items-end pb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{data.flag}</span>
              <div>
                <h1 className="text-3xl sm:text-5xl font-black">{data.name}</h1>
                <p className="text-text-secondary text-sm">{data.country}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-text-secondary text-sm">
              <span className="bg-surface/80 backdrop-blur-sm rounded-lg px-3 py-1"><span className="text-accent font-bold">{data.stats.leagues}</span> leagues</span>
              <span className="bg-surface/80 backdrop-blur-sm rounded-lg px-3 py-1"><span className="text-accent font-bold">{data.stats.players}</span> players</span>
              <span className="bg-surface/80 backdrop-blur-sm rounded-lg px-3 py-1"><span className="text-accent font-bold">{data.stats.gamesThisMonth}</span> games this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social links bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6 mb-10">
        <div className="flex items-center gap-3">
          <span className="text-text-muted text-sm">Follow BallR {data.name}:</span>
          {data.socials.instagram && (
            <a href={data.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-surface border border-border/20 rounded-lg px-3 py-1.5 hover:border-accent/40 transition-colors text-sm">
              <span>ð¸</span> <span className="text-text-secondary">Instagram</span>
            </a>
          )}
          {data.socials.tiktok && (
            <a href={data.socials.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-surface border border-border/20 rounded-lg px-3 py-1.5 hover:border-accent/40 transition-colors text-sm">
              <span>ðµ</span> <span className="text-text-secondary">TikTok</span>
            </a>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Photo gallery */}
            <section>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {data.photos.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image src={src} alt={`BallR ${data.name} game photo ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* Public Leagues */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <h2 className="text-xl font-black">Official BallR League</h2>
              </div>
              <div className="space-y-3">
                {data.publicLeagues.map((league) => (
                  <div key={league.name} className="bg-surface border border-border/20 rounded-2xl p-4 flex items-center justify-between hover:border-accent/20 transition-colors">
                    <div>
                      <p className="font-bold text-sm">{league.name}</p>
                      <p className="text-xs text-text-muted">public &middot; {league.players} players</p>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <p className="text-accent font-semibold text-sm">{league.price}</p>
                      <span className="text-[10px] bg-primary/20 text-accent px-3 py-1 rounded-lg font-semibold cursor-pointer hover:bg-primary/30 transition-colors">Join</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Private Leagues */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <h2 className="text-xl font-black">Private Leagues</h2>
              </div>
              <div className="space-y-3">
                {data.privateLeagues.map((league) => (
                  <div key={league.name} className="bg-surface border border-border/20 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm">{league.name}</p>
                      <p className="text-xs text-text-muted">private &middot; {league.members} members</p>
                    </div>
                    <span className="text-[10px] bg-yellow-500/10 text-yellow-400 px-2.5 py-1 rounded-lg font-semibold">Invite Only</span>
                  </div>
                ))}
                <p className="text-text-muted text-xs mt-2">
                  Want your own private league in {data.name}? <Link href="/leagues#start" className="text-accent hover:underline">Start one in 60 seconds â</Link>
                </p>
              </div>
            </section>

            {/* City Organizer */}
            <section>
              <h2 className="text-xl font-black mb-4">ð¤ Your Organizer</h2>
              <div className="bg-surface border border-border/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-accent/50">
                    <Image src={data.organizer.img} alt={data.organizer.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-black">{data.organizer.name}</p>
                    <p className="text-xs text-accent font-semibold mb-2">{data.organizer.role}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{data.organizer.bio}</p>
                    <div className="flex gap-4 mt-3 text-xs text-text-muted">
                      <span>Since <span className="text-text font-semibold">{data.organizer.since}</span></span>
                      <span><span className="text-text font-semibold">{data.organizer.gamesOrganized}</span> games organized</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Venues / Pitches */}
            <section>
              <h2 className="text-xl font-black mb-4">ð Where We Play</h2>
              <div className="space-y-4">
                {data.venues.map((venue) => (
                  <div key={venue.name} className="bg-surface border border-border/20 rounded-2xl overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-48 h-36 sm:h-auto shrink-0">
                        <Image src={venue.img} alt={venue.name} fill className="object-cover" />
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-sm">{venue.name}</h3>
                            <p className="text-xs text-text-muted">{venue.address}</p>
                          </div>
                          <span className="text-accent text-xs font-semibold shrink-0 ml-2">{venue.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-[10px] bg-primary/10 text-accent px-2 py-0.5 rounded-lg">{venue.type}</span>
                          <span className="text-[10px] bg-surface border border-border/30 text-text-muted px-2 py-0.5 rounded-lg">{venue.surface}</span>
                          <span className="text-[10px] bg-surface border border-border/30 text-text-muted px-2 py-0.5 rounded-lg">{venue.capacity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini map placeholder */}
              <div className="mt-4 bg-[#0f1114] border border-border/20 rounded-2xl p-6 text-center">
                <div className="text-text-muted text-sm mb-2">ð All venues on map</div>
                <div className="flex flex-wrap justify-center gap-3">
                  {data.venues.map((v) => (
                    <a
                      key={v.name}
                      href={`https://www.google.com/maps?q=${v.lat},${v.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline bg-surface/50 rounded-lg px-3 py-1.5"
                    >
                      {v.name} â
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Player of the Month */}
            <section>
              <h2 className="text-xl font-black mb-4">ð Baller of the Month â {data.playerOfMonth.month}</h2>
              <div className="bg-gradient-to-r from-[#2D5A27]/20 to-surface rounded-2xl border border-[#2D5A27]/30 p-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                    <Image src={data.playerOfMonth.img} alt={data.playerOfMonth.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-black">{data.playerOfMonth.name}</p>
                    <div className="flex gap-3 text-xs text-text-secondary mt-1">
                      <span>Elo <span className="text-accent font-bold">{data.playerOfMonth.elo}</span></span>
                      <span>{data.playerOfMonth.games} games</span>
                      <span>{data.playerOfMonth.winRate} win rate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Archive */}
              <details className="mt-4 group">
                <summary className="text-sm text-accent cursor-pointer hover:underline flex items-center gap-1">
                  <span className="group-open:rotate-90 transition-transform">â¶</span> View past Ballers of the Month
                </summary>
                <div className="mt-3 space-y-2">
                  {data.playerOfMonthArchive.map((p) => (
                    <div key={p.month} className="bg-surface border border-border/20 rounded-xl p-3 flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <Image src={p.img} alt={p.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold truncate">{p.name}</span>
                          <span className="text-[10px] text-text-muted">{p.month}</span>
                        </div>
                        <div className="text-xs text-text-muted">
                          Elo {p.elo} &middot; {p.games} games &middot; {p.winRate} win rate
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </section>

            {/* Goal of the Month */}
            <section>
              <h2 className="text-xl font-black mb-4">â½ Goal of the Month â {data.goalOfMonth.month}</h2>
              <div className="bg-surface border border-accent/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-lg">ð¥</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{data.goalOfMonth.scorer}</p>
                    <p className="text-text-secondary text-sm mt-1 leading-relaxed">{data.goalOfMonth.description}</p>
                    <p className="text-accent text-xs font-semibold mt-2">{data.goalOfMonth.votes} votes</p>
                  </div>
                </div>
                <div className="mt-4 bg-primary/10 rounded-xl p-3 text-center">
                  <p className="text-xs text-text-muted">Video coming soon via Pixelot integration</p>
                </div>
              </div>

              {/* Archive */}
              <details className="mt-4 group">
                <summary className="text-sm text-accent cursor-pointer hover:underline flex items-center gap-1">
                  <span className="group-open:rotate-90 transition-transform">â¶</span> View past Goals of the Month
                </summary>
                <div className="mt-3 space-y-2">
                  {data.goalOfMonthArchive.map((g) => (
                    <div key={g.month} className="bg-surface border border-border/20 rounded-xl p-3 flex items-center gap-3">
                      <span className="text-lg shrink-0">â½</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold">{g.scorer}</span>
                          <span className="text-[10px] text-text-muted">{g.month}</span>
                        </div>
                        <p className="text-xs text-text-muted truncate">{g.description}</p>
                      </div>
                      <span className="text-xs text-accent font-semibold shrink-0">{g.votes} votes</span>
                    </div>
                  ))}
                </div>
              </details>
            </section>

            {/* Blog links */}
            <section>
              <h2 className="text-xl font-black mb-4">ð° Articles about {data.name}</h2>
              <div className="space-y-2">
                {data.blogLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block bg-surface border border-border/20 rounded-xl p-4 hover:border-accent/30 transition-colors group">
                    <p className="text-sm font-semibold text-text group-hover:text-accent transition-colors">{link.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTAs */}
            <div className="bg-surface border border-accent/20 rounded-2xl p-6 text-center sticky top-24">
              <a href="#" className="block bg-primary hover:bg-primary-dark text-text font-bold py-3 rounded-xl transition-colors mb-3 text-sm">
                Join a {data.name} League
              </a>
              <Link href="/leagues#start" className="block border border-accent/40 hover:border-accent text-accent font-semibold py-3 rounded-xl transition-colors text-sm">
                Start Your Own in {data.name}
              </Link>
            </div>

            {/* Full Leaderboard â Top 10 */}
            <div className="bg-surface border border-border/20 rounded-2xl p-6">
              <h3 className="text-sm font-black uppercase tracking-wider text-accent mb-4">{data.name} Top 10</h3>
              <div className="space-y-2">
                {data.leaderboard.map((player) => (
                  <div key={player.rank} className={`flex items-center gap-2 ${player.rank <= 3 ? "py-1" : ""}`}>
                    <span className="text-text-muted text-xs w-5 font-mono text-right">{player.rank}</span>
                    <span className="text-sm w-5 text-center">{player.rank <= 3 ? ["ð¥", "ð¥", "ð¥"][player.rank - 1] : ""}</span>
                    <span className={`text-sm flex-1 ${player.rank <= 3 ? "font-bold" : ""}`}>{player.name}</span>
                    <span className="text-xs text-accent font-bold">{player.elo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials sidebar */}
            <div className="bg-surface border border-border/20 rounded-2xl p-6">
              <h3 className="text-sm font-black uppercase tracking-wider text-text-muted mb-4">Follow Us</h3>
              <div className="space-y-2">
                {data.socials.instagram && (
                  <a href={data.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors">
                    <span className="text-lg">ð¸</span>
                    <div>
                      <p className="text-sm font-semibold">Instagram</p>
                      <p className="text-xs text-text-muted">@ballr.{data.slug}</p>
                    </div>
                  </a>
                )}
                {data.socials.tiktok && (
                  <a href={data.socials.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors">
                    <span className="text-lg">ðµ</span>
                    <div>
                      <p className="text-sm font-semibold">TikTok</p>
                      <p className="text-xs text-text-muted">@ballr.{data.slug}</p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Quick POTM card */}
            <div className="bg-gradient-to-b from-[#2D5A27]/20 to-surface border border-[#2D5A27]/20 rounded-2xl p-6 text-center">
              <p className="text-[10px] text-accent font-semibold uppercase tracking-wider mb-2">Baller of the Month</p>
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent mx-auto mb-2">
                <Image src={data.playerOfMonth.img} alt={data.playerOfMonth.name} fill className="object-cover" />
              </div>
              <p className="font-bold text-sm">{data.playerOfMonth.name}</p>
              <p className="text-xs text-accent font-semibold">Elo {data.playerOfMonth.elo}</p>
              <p className="text-[10px] text-text-muted mt-1">{data.playerOfMonth.month}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-12 flex items-center gap-4">
          <Link href="/leagues" className="text-sm text-accent hover:underline">&larr; Back to all leagues</Link>
          <span className="text-text-muted text-xs">&middot;</span>
          <Link href="/player-of-the-month" className="text-sm text-text-secondary hover:text-accent transition-colors">Player of the Month Archive</Link>
          <span className="text-text-muted text-xs">&middot;</span>
          <Link href="/goal-of-the-month" className="text-sm text-text-secondary hover:text-accent transition-colors">Goal of the Month</Link>
        </div>
      </div>
    </div>
  );
}
