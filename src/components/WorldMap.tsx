"use client";

import { useState } from "react";

interface City {
  name: string;
  x: number;
  y: number;
  leagues: number;
  players: number;
  gamesPerWeek: number;
  isOfficial: boolean;
  hasLiveGame: boolean;
  flag: string;
}

const cities: City[] = [
  { name: "Bangkok", x: 72.5, y: 48, leagues: 12, players: 340, gamesPerWeek: 12, isOfficial: true, hasLiveGame: true, flag: "\u{1F1F9}\u{1F1ED}" },
  { name: "Berlin", x: 50.5, y: 25, leagues: 8, players: 210, gamesPerWeek: 8, isOfficial: true, hasLiveGame: false, flag: "\u{1F1E9}\u{1F1EA}" },
  { name: "Bali", x: 76, y: 58, leagues: 3, players: 87, gamesPerWeek: 4, isOfficial: true, hasLiveGame: true, flag: "\u{1F1EE}\u{1F1E9}" },
];

export function WorldMap() {
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);

  return (
    <div>
      {/* Filter label */}
      <div className="flex gap-2 justify-center mb-6">
        <div className="text-xs px-4 py-1.5 rounded-lg bg-primary text-text font-semibold">
          Official BallR Cities
        </div>
      </div>

      {/* Map container */}
      <div className="relative w-full aspect-[2/1] bg-[#080b10] rounded-2xl overflow-hidden border border-border/20">
        {/* SVG World Map */}
        <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Glow filter for dots */}
            <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feFlood floodColor="#4ade80" floodOpacity="0.6" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="shadow" />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-red" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feFlood floodColor="#f87171" floodOpacity="0.6" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="shadow" />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Pulse animation */}
            <radialGradient id="pulse-gradient">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
            </radialGradient>
            {/* Map land gradient */}
            <linearGradient id="land-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a2332" />
              <stop offset="100%" stopColor="#162029" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[...Array(9)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 50} x2="1000" y2={(i + 1) * 50} stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5" />
          ))}
          {[...Array(19)].map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 50} y1="0" x2={(i + 1) * 50} y2="500" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5" />
          ))}

          {/* North America */}
          <path d="M50,80 L80,60 L120,55 L160,50 L200,55 L230,70 L240,90 L235,110 L220,130 L200,145 L190,160 L180,175 L165,180 L150,175 L135,185 L120,180 L110,170 L100,160 L90,145 L70,130 L55,120 L45,100 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Central America */}
          <path d="M150,175 L165,180 L175,195 L185,210 L180,225 L170,230 L160,225 L155,215 L150,200 L145,190 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* South America */}
          <path d="M180,225 L200,220 L220,230 L240,250 L260,270 L270,290 L280,320 L275,350 L265,370 L250,385 L235,380 L225,365 L220,340 L210,310 L200,290 L190,270 L185,250 L180,235 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Greenland */}
          <path d="M260,30 L290,25 L320,30 L330,50 L320,65 L300,70 L280,65 L265,50 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* Europe */}
          <path d="M420,60 L440,55 L460,50 L480,55 L500,60 L520,70 L530,85 L535,100 L530,115 L520,125 L510,130 L500,135 L485,140 L470,145 L460,140 L450,130 L440,120 L430,110 L420,100 L415,85 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* UK & Ireland */}
          <path d="M405,70 L415,65 L420,75 L418,85 L410,90 L405,80 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Scandinavia */}
          <path d="M465,30 L475,25 L490,28 L500,40 L495,55 L485,50 L475,45 L468,40 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Iberian Peninsula */}
          <path d="M415,120 L435,115 L445,125 L440,140 L425,145 L415,135 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Italy */}
          <path d="M475,120 L482,115 L488,130 L485,145 L478,150 L473,140 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* Africa */}
          <path d="M430,155 L450,150 L470,155 L490,165 L510,180 L520,200 L525,230 L520,260 L510,290 L495,310 L480,320 L465,315 L450,305 L440,285 L435,260 L432,230 L430,200 L428,175 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Madagascar */}
          <path d="M540,280 L548,275 L552,290 L548,305 L540,300 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* Russia / Northern Asia */}
          <path d="M530,30 L570,25 L620,28 L680,30 L740,35 L790,40 L830,50 L840,65 L830,80 L800,85 L760,80 L720,75 L680,70 L640,68 L600,65 L560,60 L540,55 L530,45 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* Middle East */}
          <path d="M535,115 L560,110 L580,120 L590,140 L580,155 L565,160 L550,155 L540,140 L535,125 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* India */}
          <path d="M610,130 L640,120 L660,135 L665,160 L655,185 L640,200 L625,195 L615,180 L610,160 L608,145 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* China / East Asia */}
          <path d="M660,70 L700,65 L740,70 L770,80 L780,100 L775,120 L760,135 L740,140 L720,135 L700,125 L685,115 L670,105 L660,90 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Korea */}
          <path d="M780,90 L790,85 L795,100 L790,110 L782,108 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Japan */}
          <path d="M800,80 L810,75 L815,90 L810,105 L805,110 L798,100 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* Southeast Asia */}
          <path d="M690,145 L710,140 L730,150 L740,165 L735,180 L720,185 L705,180 L695,170 L690,155 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Thailand / Indochina */}
          <path d="M680,140 L700,135 L710,150 L715,170 L710,185 L700,190 L690,180 L685,165 L680,150 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* Indonesia archipelago */}
          <path d="M700,260 L720,255 L740,258 L760,262 L770,270 L765,278 L745,275 L725,272 L705,268 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          <path d="M720,248 L740,245 L755,250 L750,258 L730,255 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Borneo */}
          <path d="M735,220 L755,215 L765,230 L755,240 L740,238 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* Philippines */}
          <path d="M770,175 L780,170 L785,185 L780,200 L772,195 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />

          {/* Australia */}
          <path d="M760,310 L790,295 L830,290 L870,300 L890,320 L885,345 L870,365 L845,375 L815,370 L790,360 L770,340 L760,325 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
          {/* New Zealand */}
          <path d="M910,350 L918,345 L922,360 L918,375 L910,370 Z" fill="url(#land-fill)" stroke="#2a3a4a" strokeWidth="0.5" />
        </svg>

        {/* City dots as HTML overlay for hover interaction */}
        {cities.map((city) => (
          <div
            key={city.name}
            className="absolute cursor-pointer group"
            style={{ left: `${city.x}%`, top: `${city.y}%`, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setHoveredCity(city)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-full opacity-40" style={{
              background: city.hasLiveGame
                ? "radial-gradient(circle, rgba(74,222,128,0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(248,113,113,0.3) 0%, transparent 70%)",
            }} />
            {/* Pulse ring for live games */}
            {city.hasLiveGame && (
              <div className="absolute -inset-2">
                <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
              </div>
            )}
            {/* Dot with glow */}
            <div
              className={`relative w-3.5 h-3.5 rounded-full transition-transform group-hover:scale-[2] ${
                city.hasLiveGame
                  ? "bg-green-400 shadow-[0_0_12px_3px_rgba(74,222,128,0.5)]"
                  : "bg-red-400 shadow-[0_0_12px_3px_rgba(248,113,113,0.4)]"
              }`}
            />
          </div>
        ))}

        {/* Hover tooltip */}
        {hoveredCity && (
          <div
            className="absolute z-20 bg-surface/95 backdrop-blur-md border border-border/40 rounded-xl p-4 shadow-2xl pointer-events-none min-w-[200px]"
            style={{
              left: `${Math.min(Math.max(hoveredCity.x, 15), 85)}%`,
              top: `${hoveredCity.y - 10}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">{hoveredCity.flag}</span>
              <span className="text-sm font-black text-text">{hoveredCity.name}</span>
              {hoveredCity.hasLiveGame && (
                <span className="text-[8px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full font-bold animate-pulse">LIVE</span>
              )}
            </div>
            <div className="text-[11px] text-text-secondary space-y-1">
              <p><span className="text-accent font-semibold">{hoveredCity.leagues}</span> leagues &middot; <span className="text-accent font-semibold">{hoveredCity.players}</span> players</p>
              <p><span className="text-accent font-semibold">{hoveredCity.gamesPerWeek}</span> games/week</p>
            </div>
            <div className="mt-2 pt-2 border-t border-border/20">
              <span className="text-[9px] text-accent font-semibold uppercase tracking-wider">Official BallR City</span>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-3 left-3 flex gap-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/10">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.5)]" />
            <span className="text-[9px] text-text-muted">Official</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
            <span className="text-[9px] text-text-muted">Live Game</span>
          </div>
        </div>

        {/* City count badge */}
        <div className="absolute top-3 right-3 bg-surface/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-border/10">
          <span className="text-[10px] text-text-muted">
            <span className="text-accent font-bold">{cities.length}</span> cities &middot; <span className="text-accent font-bold">{cities.reduce((a, c) => a + c.players, 0)}</span> players
          </span>
        </div>
      </div>
    </div>
  );
}
