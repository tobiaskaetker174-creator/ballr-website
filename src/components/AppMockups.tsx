export function PhoneFrame({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[260px] sm:w-[280px] rounded-[2.5rem] border-[3px] border-[#333] bg-[#1a1a1a] p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1a1a] rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden bg-[#0f1114]">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-[#555] rounded-full" />
      </div>
      {label && <p className="text-text-secondary text-sm font-medium">{label}</p>}
    </div>
  );
}

export function DiscoverScreen() {
  const games = [
    { venue: "The Pitch BKK", time: "Today 18:00", format: "5v5", level: "Intermediate", slots: "6/10", price: "250 THB" },
    { venue: "Benjakitti Arena", time: "Today 19:30", format: "7v7", level: "All Levels", slots: "9/14", price: "200 THB" },
    { venue: "Arena 10", time: "Thu 18:00", format: "5v5", level: "Advanced", slots: "3/10", price: "300 THB" },
    { venue: "Lumpini Turf", time: "Fri 17:30", format: "6v6", level: "Beginner", slots: "7/12", price: "180 THB" },
  ];

  return (
    <PhoneFrame label="Discover Games">
      <div className="h-[480px] sm:h-[520px]">
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pt-8 pb-2 text-[10px] text-gray-400">
          <span>18:42</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 border border-gray-400 rounded-sm"><div className="w-2 h-1.5 bg-green-400 rounded-sm" /></div>
          </div>
        </div>
        {/* Header */}
        <div className="px-4 pb-3">
          <h3 className="text-white text-lg font-bold">Discover</h3>
          <p className="text-gray-500 text-[10px]">Games near you in Bangkok</p>
        </div>
        {/* Filter chips */}
        <div className="flex gap-1.5 px-4 pb-3 overflow-hidden">
          {["All", "5v5", "7v7", "Today", "This Week"].map((f, i) => (
            <span key={f} className={`shrink-0 text-[9px] px-2.5 py-1 rounded-full ${i === 0 ? "bg-[#2D5A27] text-white" : "bg-[#252525] text-gray-400"}`}>
              {f}
            </span>
          ))}
        </div>
        {/* Game cards */}
        <div className="px-3 space-y-2 overflow-hidden">
          {games.map((game) => (
            <div key={game.venue + game.time} className="bg-[#1c1e22] rounded-xl p-3 border border-[#2a2a2a]">
              <div className="flex justify-between items-start mb-1.5">
                <div>
                  <p className="text-white text-[11px] font-semibold">{game.venue}</p>
                  <p className="text-gray-500 text-[9px]">{game.time}</p>
                </div>
                <span className="text-[9px] bg-[#2D5A27]/30 text-[#A1D494] px-2 py-0.5 rounded-md">{game.format}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-[9px] text-gray-400">{game.level}</span>
                  <span className="text-[9px] text-gray-400">{game.slots} players</span>
                </div>
                <span className="text-[10px] text-[#A1D494] font-semibold">{game.price}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-around items-center px-4 py-2 bg-[#0f1114] border-t border-[#222]">
          {[
            { icon: "ð", label: "Discover", active: true },
            { icon: "ð", label: "My Games", active: false },
            { icon: "ð", label: "Stats", active: false },
            { icon: "ð¤", label: "Profile", active: false },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm">{item.icon}</span>
              <span className={`text-[8px] ${item.active ? "text-[#A1D494]" : "text-gray-600"}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function ProfileScreen() {
  return (
    <PhoneFrame label="Player Profile">
      <div className="h-[480px] sm:h-[520px]">
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pt-8 pb-2 text-[10px] text-gray-400">
          <span>18:42</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 border border-gray-400 rounded-sm"><div className="w-2 h-1.5 bg-green-400 rounded-sm" /></div>
          </div>
        </div>
        {/* Profile header */}
        <div className="px-4 text-center pb-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D5A27] to-[#A1D494] mx-auto mb-2 flex items-center justify-center text-2xl">
            â½
          </div>
          <h3 className="text-white text-sm font-bold">Marco R.</h3>
          <p className="text-gray-500 text-[10px]">Bangkok &middot; Midfielder</p>
          <div className="flex gap-1 justify-center mt-1">
            <span className="text-[8px] bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded">ð¥ 5x POTM</span>
            <span className="text-[8px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">ð¥ 12 streak</span>
          </div>
        </div>
        {/* ELO bar */}
        <div className="px-4 mb-3">
          <div className="bg-[#1c1e22] rounded-xl p-3 border border-[#2a2a2a]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] text-gray-500">Baller Score</span>
              <span className="text-[12px] text-[#A1D494] font-black">1,420</span>
            </div>
            <div className="h-2 bg-[#252525] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#2D5A27] to-[#A1D494] rounded-full" style={{ width: "62%" }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[8px] text-gray-600">500</span>
              <span className="text-[8px] text-gray-600">2500</span>
            </div>
          </div>
        </div>
        {/* Stats grid */}
        <div className="px-4 grid grid-cols-3 gap-2 mb-3">
          {[
            { value: "48", label: "Games" },
            { value: "67%", label: "Win Rate" },
            { value: "94%", label: "Reliability" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#1c1e22] rounded-lg p-2 text-center border border-[#2a2a2a]">
              <div className="text-[#A1D494] text-sm font-bold">{stat.value}</div>
              <div className="text-gray-500 text-[8px]">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Peer ratings */}
        <div className="px-4 mb-3">
          <div className="bg-[#1c1e22] rounded-xl p-3 border border-[#2a2a2a]">
            <p className="text-[10px] text-gray-400 mb-2">Peer Ratings</p>
            {[
              { label: "Skill", value: 4.3 },
              { label: "Sportsmanship", value: 4.7 },
              { label: "Teamwork", value: 4.5 },
            ].map((rating) => (
              <div key={rating.label} className="flex items-center gap-2 mb-1">
                <span className="text-[9px] text-gray-500 w-20">{rating.label}</span>
                <div className="flex-1 h-1.5 bg-[#252525] rounded-full overflow-hidden">
                  <div className="h-full bg-[#A1D494] rounded-full" style={{ width: `${(rating.value / 5) * 100}%` }} />
                </div>
                <span className="text-[9px] text-[#A1D494] font-semibold w-6 text-right">{rating.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Recent */}
        <div className="px-4">
          <p className="text-[10px] text-gray-400 mb-2">Recent Games</p>
          <div className="flex gap-1.5">
            {["W", "W", "L", "W", "W"].map((r, i) => (
              <span key={i} className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold ${r === "W" ? "bg-[#2D5A27]/40 text-[#A1D494]" : "bg-red-500/20 text-red-400"}`}>
                {r}
              </span>
            ))}
          </div>
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-around items-center px-4 py-2 bg-[#0f1114] border-t border-[#222]">
          {[
            { icon: "ð", label: "Discover", active: false },
            { icon: "ð", label: "My Games", active: false },
            { icon: "ð", label: "Stats", active: false },
            { icon: "ð¤", label: "Profile", active: true },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm">{item.icon}</span>
              <span className={`text-[8px] ${item.active ? "text-[#A1D494]" : "text-gray-600"}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function LeaderboardScreen() {
  const players = [
    { rank: 1, name: "Alex K.", elo: 1680, games: 62, badge: "ð¥" },
    { rank: 2, name: "Sam T.", elo: 1620, games: 55, badge: "ð¥" },
    { rank: 3, name: "Marco R.", elo: 1420, games: 48, badge: "ð¥" },
    { rank: 4, name: "David L.", elo: 1380, games: 41, badge: "" },
    { rank: 5, name: "Chris W.", elo: 1350, games: 38, badge: "" },
    { rank: 6, name: "Tom S.", elo: 1310, games: 36, badge: "" },
    { rank: 7, name: "You", elo: 1290, games: 28, badge: "ð" },
  ];

  return (
    <PhoneFrame label="Leaderboard">
      <div className="h-[480px] sm:h-[520px]">
        <div className="flex justify-between items-center px-5 pt-8 pb-2 text-[10px] text-gray-400">
          <span>18:42</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 border border-gray-400 rounded-sm"><div className="w-2 h-1.5 bg-green-400 rounded-sm" /></div>
          </div>
        </div>
        <div className="px-4 pb-3">
          <h3 className="text-white text-lg font-bold">Leaderboard</h3>
          <div className="flex gap-2 mt-2">
            {["This Month", "All Time"].map((tab, i) => (
              <span key={tab} className={`text-[10px] px-3 py-1 rounded-lg ${i === 0 ? "bg-[#2D5A27] text-white" : "bg-[#252525] text-gray-400"}`}>
                {tab}
              </span>
            ))}
          </div>
        </div>
        {/* Baller of the Month */}
        <div className="mx-4 mb-3 bg-gradient-to-r from-[#2D5A27]/30 to-[#1c1e22] rounded-xl p-3 border border-[#2D5A27]/40">
          <p className="text-[8px] text-[#A1D494] font-semibold uppercase tracking-wider mb-1">Baller of the Month</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-sm">ð</div>
            <div>
              <p className="text-white text-[11px] font-bold">Alex K.</p>
              <p className="text-gray-500 text-[9px]">ELO 1680 &middot; 62 games &middot; 78% win rate</p>
            </div>
          </div>
        </div>
        {/* Rankings */}
        <div className="px-4 space-y-1.5">
          {players.map((p) => (
            <div key={p.rank} className={`flex items-center gap-3 p-2 rounded-lg ${p.name === "You" ? "bg-[#2D5A27]/20 border border-[#2D5A27]/30" : "bg-[#1c1e22]"}`}>
              <span className="text-[10px] text-gray-500 w-4 text-center font-mono">{p.rank}</span>
              <span className="text-sm w-5 text-center">{p.badge || ""}</span>
              <div className="flex-1">
                <span className={`text-[11px] font-semibold ${p.name === "You" ? "text-[#A1D494]" : "text-white"}`}>{p.name}</span>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-[#A1D494] font-bold">{p.elo}</div>
                <div className="text-[8px] text-gray-600">{p.games} games</div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-around items-center px-4 py-2 bg-[#0f1114] border-t border-[#222]">
          {[
            { icon: "ð", label: "Discover", active: false },
            { icon: "ð", label: "My Games", active: false },
            { icon: "ð", label: "Stats", active: true },
            { icon: "ð¤", label: "Profile", active: false },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm">{item.icon}</span>
              <span className={`text-[8px] ${item.active ? "text-[#A1D494]" : "text-gray-600"}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function PrivateLeagueScreen() {
  return (
    <PhoneFrame label="Private League">
      <div className="h-[480px] sm:h-[520px]">
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pt-8 pb-2 text-[10px] text-gray-400">
          <span>18:42</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 border border-gray-400 rounded-sm"><div className="w-2 h-1.5 bg-green-400 rounded-sm" /></div>
          </div>
        </div>
        {/* Header */}
        <div className="px-4 pb-3">
          <p className="text-gray-500 text-[9px]">YOUR LEAGUE</p>
          <h3 className="text-white text-lg font-bold">Kreuzberg Kickers</h3>
          <div className="flex gap-2 mt-1">
            <span className="text-[8px] bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded">Private</span>
            <span className="text-[8px] bg-[#2D5A27]/30 text-[#A1D494] px-1.5 py-0.5 rounded">30 Members</span>
          </div>
        </div>
        {/* League stats */}
        <div className="px-4 grid grid-cols-3 gap-2 mb-3">
          {[
            { value: "42", label: "Games" },
            { value: "30", label: "Members" },
            { value: "S3", label: "Season" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#1c1e22] rounded-lg p-2 text-center border border-[#2a2a2a]">
              <div className="text-[#A1D494] text-sm font-bold">{stat.value}</div>
              <div className="text-gray-500 text-[8px]">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* League leaderboard */}
        <div className="px-4 mb-3">
          <p className="text-[10px] text-gray-400 mb-2">League Leaderboard</p>
          <div className="space-y-1.5">
            {[
              { rank: 1, name: "Marcus", elo: 1520, badge: "ð¥" },
              { rank: 2, name: "Jonas", elo: 1480, badge: "ð¥" },
              { rank: 3, name: "You", elo: 1420, badge: "ð¥" },
              { rank: 4, name: "Stefan", elo: 1380, badge: "" },
            ].map((p) => (
              <div key={p.rank} className={`flex items-center gap-2 p-1.5 rounded-lg ${p.name === "You" ? "bg-[#2D5A27]/20 border border-[#2D5A27]/30" : "bg-[#1c1e22]"}`}>
                <span className="text-[9px] text-gray-500 w-3 font-mono">{p.rank}</span>
                <span className="text-xs w-4">{p.badge}</span>
                <span className={`text-[10px] flex-1 ${p.name === "You" ? "text-[#A1D494] font-semibold" : "text-white"}`}>{p.name}</span>
                <span className="text-[10px] text-[#A1D494] font-bold">{p.elo}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Next game */}
        <div className="px-4 mb-3">
          <p className="text-[10px] text-gray-400 mb-2">Next Game</p>
          <div className="bg-[#1c1e22] rounded-xl p-3 border border-[#2D5A27]/30">
            <div className="flex justify-between items-start mb-1.5">
              <div>
                <p className="text-white text-[11px] font-semibold">Sunday Session</p>
                <p className="text-gray-500 text-[9px]">Sun 16:00 Â· GÃ¶rlitzer Park</p>
              </div>
              <span className="text-[9px] bg-[#2D5A27] text-white px-2 py-0.5 rounded-md">7/10</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-[9px] bg-[#2D5A27] text-white px-2.5 py-1 rounded-lg font-semibold">Join</span>
              <span className="text-[9px] bg-[#252525] text-gray-400 px-2.5 py-1 rounded-lg">Invite</span>
            </div>
          </div>
        </div>
        {/* Invite link */}
        <div className="px-4">
          <div className="bg-[#252525] rounded-lg p-2 flex items-center gap-2">
            <span className="text-[9px] text-gray-400 flex-1 truncate">ballr.app/join/kreuzberg-kickers</span>
            <span className="text-[9px] bg-[#2D5A27] text-white px-2 py-0.5 rounded">Copy</span>
          </div>
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-around items-center px-4 py-2 bg-[#0f1114] border-t border-[#222]">
          {[
            { icon: "ð ", label: "League", active: true },
            { icon: "ð", label: "Games", active: false },
            { icon: "ð", label: "Stats", active: false },
            { icon: "âï¸", label: "Settings", active: false },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm">{item.icon}</span>
              <span className={`text-[8px] ${item.active ? "text-[#A1D494]" : "text-gray-600"}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function CreateLeagueScreen() {
  return (
    <PhoneFrame label="Create League">
      <div className="h-[480px] sm:h-[520px]">
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 pt-8 pb-2 text-[10px] text-gray-400">
          <span>18:42</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 border border-gray-400 rounded-sm"><div className="w-2 h-1.5 bg-green-400 rounded-sm" /></div>
          </div>
        </div>
        {/* Header */}
        <div className="px-4 pb-4">
          <h3 className="text-white text-lg font-bold">Create Your League</h3>
          <p className="text-gray-500 text-[10px]">Set it up in 60 seconds</p>
        </div>
        {/* Form fields */}
        <div className="px-4 space-y-3">
          <div>
            <label className="text-[9px] text-gray-400 block mb-1">League Name</label>
            <div className="bg-[#1c1e22] rounded-lg p-2.5 border border-[#2a2a2a] text-white text-[11px]">
              Sunday Ballers FC
            </div>
          </div>
          <div>
            <label className="text-[9px] text-gray-400 block mb-1">Type</label>
            <div className="flex gap-2">
              <span className="text-[10px] bg-[#252525] text-gray-400 px-3 py-1.5 rounded-lg">Public</span>
              <span className="text-[10px] bg-[#2D5A27] text-white px-3 py-1.5 rounded-lg ring-1 ring-[#A1D494]/50">Private â</span>
            </div>
          </div>
          <div>
            <label className="text-[9px] text-gray-400 block mb-1">City</label>
            <div className="bg-[#1c1e22] rounded-lg p-2.5 border border-[#2a2a2a] text-white text-[11px]">
              Berlin
            </div>
          </div>
          <div>
            <label className="text-[9px] text-gray-400 block mb-1">Game Fee</label>
            <div className="bg-[#1c1e22] rounded-lg p-2.5 border border-[#2a2a2a] text-white text-[11px]">
              5 EUR per game
            </div>
          </div>
          <div>
            <label className="text-[9px] text-gray-400 block mb-1">Default Format</label>
            <div className="flex gap-2">
              {["5v5", "6v6", "7v7", "8v8"].map((f, i) => (
                <span key={f} className={`text-[10px] px-3 py-1.5 rounded-lg ${i === 0 ? "bg-[#2D5A27] text-white" : "bg-[#252525] text-gray-400"}`}>{f}</span>
              ))}
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="px-4 mt-6">
          <div className="bg-[#2D5A27] text-white text-center text-[12px] font-bold py-3 rounded-xl">
            Create League
          </div>
          <p className="text-center text-[8px] text-gray-500 mt-2">Free to start. No credit card.</p>
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-around items-center px-4 py-2 bg-[#0f1114] border-t border-[#222]">
          {[
            { icon: "ð", label: "Discover", active: false },
            { icon: "â", label: "Create", active: true },
            { icon: "ð", label: "Stats", active: false },
            { icon: "ð¤", label: "Profile", active: false },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm">{item.icon}</span>
              <span className={`text-[8px] ${item.active ? "text-[#A1D494]" : "text-gray-600"}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function MapScreen() {
  return (
    <PhoneFrame label="Pitch Radar">
      <div className="h-[480px] sm:h-[520px] relative">
        <div className="flex justify-between items-center px-5 pt-8 pb-2 text-[10px] text-gray-400">
          <span>18:42</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 border border-gray-400 rounded-sm"><div className="w-2 h-1.5 bg-green-400 rounded-sm" /></div>
          </div>
        </div>
        <div className="px-4 pb-2">
          <h3 className="text-white text-lg font-bold">Pitch Radar</h3>
          <p className="text-gray-500 text-[10px]">Live games in Bangkok</p>
        </div>
        {/* Fake map */}
        <div className="mx-3 rounded-xl overflow-hidden flex-1 relative h-[280px] bg-[#1a2332]">
          {/* Map grid lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div key={`h${i}`} className="absolute w-full h-px bg-gray-500" style={{ top: `${(i + 1) * 12.5}%` }} />
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`v${i}`} className="absolute h-full w-px bg-gray-500" style={{ left: `${(i + 1) * 16.6}%` }} />
            ))}
          </div>
          {/* Road-like lines */}
          <div className="absolute top-[30%] left-0 right-0 h-[2px] bg-[#2a3a4a]" />
          <div className="absolute top-[60%] left-0 right-0 h-[2px] bg-[#2a3a4a]" />
          <div className="absolute left-[40%] top-0 bottom-0 w-[2px] bg-[#2a3a4a]" />
          <div className="absolute left-[70%] top-0 bottom-0 w-[2px] bg-[#2a3a4a]" />
          {/* Venue pins */}
          {[
            { x: "25%", y: "20%", label: "The Pitch", status: "active", players: "6/10" },
            { x: "55%", y: "35%", label: "Benjakitti", status: "upcoming", players: "9/14" },
            { x: "70%", y: "65%", label: "Arena 10", status: "active", players: "8/10" },
            { x: "35%", y: "75%", label: "Lumpini", status: "none", players: "" },
          ].map((pin) => (
            <div key={pin.label} className="absolute" style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] shadow-lg ${
                pin.status === "active" ? "bg-[#2D5A27] ring-2 ring-[#A1D494]/50" :
                pin.status === "upcoming" ? "bg-yellow-600 ring-2 ring-yellow-400/50" :
                "bg-gray-600"
              }`}>â½</div>
              <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1c1e22] rounded px-1.5 py-0.5 text-[8px] text-white border border-[#333]">
                {pin.label} {pin.players && <span className="text-[#A1D494]">{pin.players}</span>}
              </div>
            </div>
          ))}
        </div>
        {/* Legend */}
        <div className="px-4 mt-2 flex gap-3">
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#2D5A27]" /><span className="text-[8px] text-gray-500">Active</span></div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-600" /><span className="text-[8px] text-gray-500">Upcoming</span></div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-600" /><span className="text-[8px] text-gray-500">No Games</span></div>
        </div>
        {/* Nearby card */}
        <div className="mx-3 mt-2 bg-[#1c1e22] rounded-xl p-3 border border-[#2a2a2a]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-[11px] font-semibold">The Pitch BKK</p>
              <p className="text-gray-500 text-[9px]">5v5 &middot; Starting in 2h &middot; 4 spots left</p>
            </div>
            <span className="text-[9px] bg-[#2D5A27] text-white px-2.5 py-1 rounded-lg font-semibold">Join</span>
          </div>
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-around items-center px-4 py-2 bg-[#0f1114] border-t border-[#222]">
          {[
            { icon: "ð", label: "Discover", active: false },
            { icon: "ðºï¸", label: "Map", active: true },
            { icon: "ð", label: "Stats", active: false },
            { icon: "ð¤", label: "Profile", active: false },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm">{item.icon}</span>
              <span className={`text-[8px] ${item.active ? "text-[#A1D494]" : "text-gray-600"}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
