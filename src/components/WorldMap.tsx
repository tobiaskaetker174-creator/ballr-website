"use client";

import { useState } from "react";

interface City {
  name: string;
  x: number; // percentage position on map
  y: number;
  leagues: number;
  players: number;
  gamesPerWeek: number;
  isOfficial: boolean;
  hasLiveGame: boolean;
  flag: string;
}

const cities: City[] = [
  { name: "Bangkok", x: 72, y: 48, leagues: 12, players: 340, gamesPerWeek: 12, isOfficial: true, hasLiveGame: true, flag: "🇹🇭" },
  { name: "Berlin", x: 50, y: 26, leagues: 8, players: 210, gamesPerWeek: 8, isOfficial: true, hasLiveGame: false, flag: "🇩🇪" },
  { name: "Bali", x: 76, y: 58, leagues: 3, players: 87, gamesPerWeek: 4, isOfficial: true, hasLiveGame: true, flag: "🇮🇩" },
  { name: "Madrid", x: 44, y: 32, leagues: 6, players: 178, gamesPerWeek: 6, isOfficial: true, hasLiveGame: false, flag: "🇪🇸" },
  { name: "London", x: 46, y: 24, leagues: 5, players: 156, gamesPerWeek: 5, isOfficial: false, hasLiveGame: true, flag: "🇬🇧" },
  { name: "Singapore", x: 74, y: 54, leagues: 4, players: 98, gamesPerWeek: 4, isOfficial: false, hasLiveGame: false, flag: "🇸🇬" },
  { name: "Lagos", x: 46, y: 50, leagues: 2, players: 65, gamesPerWeek: 3, isOfficial: false, hasLiveGame: false, flag: "🇳🇬" },
  { name: "Sao Paulo", x: 30, y: 62, leagues: 3, players: 92, gamesPerWeek: 4, isOfficial: false, hasLiveGame: true, flag: "🇧🇷" },
  { name: "Barcelona", x: 45, y: 33, leagues: 4, players: 134, gamesPerWeek: 5, isOfficial: false, hasLiveGame: false, flag: "🇪🇸" },
  { name: "Dubai", x: 58, y: 40, leagues: 2, players: 72, gamesPerWeek: 3, isOfficial: false, hasLiveGame: false, flag: "🇦🇪" },
  { name: "Ho Chi Minh", x: 74, y: 50, leagues: 2, players: 54, gamesPerWeek: 3, isOfficial: false, hasLiveGame: false, flag: "🇻🇳" },
  { name: "Lisbon", x: 42, y: 33, leagues: 2, players: 68, gamesPerWeek: 3, isOfficial: false, hasLiveGame: false, flag: "🇵🇹" },
  { name: "Buenos Aires", x: 28, y: 70, leagues: 3, players: 85, gamesPerWeek: 4, isOfficial: false, hasLiveGame: false, flag: "🇦🇷" },
  { name: "KL", x: 73, y: 53, leagues: 2, players: 48, gamesPerWeek: 2, isOfficial: false, hasLiveGame: false, flag: "🇲🇾" },
];

type Filter = "all" | "official" | "open";

export function WorldMap() {
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = cities.filter((c) => {
    if (filter === "official") return c.isOfficial;
    if (filter === "open") return c.hasLiveGame;
    return true;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 justify-center mb-6">
        {[
          { key: "all" as Filter, label: "All Leagues" },
          { key: "official" as Filter, label: "Official Only" },
          { key: "open" as Filter, label: "Live Now" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
              filter === f.key ? "bg-primary text-text" : "bg-surface text-text-secondary hover:text-text"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div className="relative w-full aspect-[2/1] bg-[#0f1114] rounded-2xl overflow-hidden border border-border/20">
        {/* Simplified world map outline using CSS */}
        <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full opacity-10">
          {/* Continents as rough shapes */}
          {/* North America */}
          <path d="M5,10 Q15,8 22,12 L25,18 Q20,22 18,25 L12,22 Q8,18 5,15 Z" fill="#A1D494" />
          {/* South America */}
          <path d="M22,32 Q28,30 30,35 L32,45 Q28,48 25,46 L22,40 Z" fill="#A1D494" />
          {/* Europe */}
          <path d="M42,10 Q48,8 52,12 L54,18 Q50,22 48,20 L44,16 Z" fill="#A1D494" />
          {/* Africa */}
          <path d="M44,25 Q50,24 52,30 L50,42 Q46,44 44,40 L42,32 Z" fill="#A1D494" />
          {/* Asia */}
          <path d="M55,8 Q70,6 82,14 L85,22 Q78,28 72,25 L60,20 Q56,16 55,12 Z" fill="#A1D494" />
          {/* SE Asia */}
          <path d="M70,28 Q78,26 80,32 L78,36 Q74,38 72,34 Z" fill="#A1D494" />
          {/* Australia */}
          <path d="M78,40 Q84,38 88,42 L86,46 Q82,48 78,44 Z" fill="#A1D494" />
        </svg>

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(10)].map((_, i) => (
            <div key={`h${i}`} className="absolute w-full h-px bg-accent" style={{ top: `${(i + 1) * 10}%` }} />
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`v${i}`} className="absolute h-full w-px bg-accent" style={{ left: `${(i + 1) * 10}%` }} />
          ))}
        </div>

        {/* City dots */}
        {filtered.map((city) => (
          <div
            key={city.name}
            className="absolute cursor-pointer group"
            style={{ left: `${city.x}%`, top: `${city.y}%`, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setHoveredCity(city)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            {/* Pulse ring for live games */}
            {city.hasLiveGame && (
              <div className="absolute inset-0 w-5 h-5 -translate-x-[4px] -translate-y-[4px]">
                <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
              </div>
            )}
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full shadow-lg transition-transform group-hover:scale-150 ${
                city.hasLiveGame
                  ? "bg-green-400 shadow-green-400/50"
                  : city.isOfficial
                  ? "bg-red-400 shadow-red-400/50"
                  : "bg-yellow-400 shadow-yellow-400/50"
              }`}
            />
          </div>
        ))}

        {/* Hover tooltip */}
        {hoveredCity && (
          <div
            className="absolute z-20 bg-surface border border-border/40 rounded-xl p-3 shadow-xl pointer-events-none min-w-[180px]"
            style={{
              left: `${Math.min(Math.max(hoveredCity.x, 15), 85)}%`,
              top: `${hoveredCity.y - 8}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">{hoveredCity.flag}</span>
              <span className="text-sm font-bold text-text">{hoveredCity.name}</span>
              {hoveredCity.hasLiveGame && (
                <span className="text-[8px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">LIVE</span>
              )}
            </div>
            <div className="text-[10px] text-text-secondary space-y-0.5">
              <p>{hoveredCity.leagues} leagues &middot; {hoveredCity.players} players</p>
              <p>{hoveredCity.gamesPerWeek} games/week</p>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-3 left-3 flex gap-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-[9px] text-text-muted">Official</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-[9px] text-text-muted">Community</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-[9px] text-text-muted">Live Game</span>
          </div>
        </div>
      </div>
    </div>
  );
}
