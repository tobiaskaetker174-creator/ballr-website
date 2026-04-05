"use client";

import { useEffect, useState } from "react";

interface Activity {
  id: number;
  type: "live" | "starting" | "open" | "completed" | "new_league";
  city: string;
  league: string;
  detail: string;
  flag: string;
}

const activities: Activity[] = [
  { id: 1, type: "live", city: "Bangkok", league: "Thursday Night League", detail: "Game in progress 8/10", flag: "🇹🇭" },
  { id: 2, type: "starting", city: "Berlin", league: "Kreuzberg Kickers", detail: "Starting in 30 min", flag: "🇩🇪" },
  { id: 3, type: "open", city: "Bali", league: "Beach League", detail: "3 spots left for Saturday", flag: "🇮🇩" },
  { id: 4, type: "live", city: "Madrid", league: "Expat League", detail: "Game in progress 14/14", flag: "🇪🇸" },
  { id: 5, type: "open", city: "Sao Paulo", league: "FC Amigos", detail: "Booking open for Sunday", flag: "🇧🇷" },
  { id: 6, type: "completed", city: "London", league: "Shoreditch Ballers", detail: "Final: Team A 4 - 3 Team B", flag: "🇬🇧" },
  { id: 7, type: "new_league", city: "Lagos", league: "Victoria Island FC", detail: "New league just started!", flag: "🇳🇬" },
  { id: 8, type: "live", city: "Singapore", league: "Google SG Ballers", detail: "Game in progress 10/10", flag: "🇸🇬" },
  { id: 9, type: "starting", city: "Bangkok", league: "Sukhumvit League", detail: "Starting in 2 hours", flag: "🇹🇭" },
  { id: 10, type: "open", city: "Barcelona", league: "La Masia Pickup", detail: "5 spots left for Friday", flag: "🇪🇸" },
];

const typeStyles = {
  live: { bg: "bg-green-500/10", dot: "bg-green-400", text: "text-green-400" },
  starting: { bg: "bg-yellow-500/10", dot: "bg-yellow-400", text: "text-yellow-400" },
  open: { bg: "bg-accent/10", dot: "bg-accent", text: "text-accent" },
  completed: { bg: "bg-text-muted/10", dot: "bg-text-muted", text: "text-text-muted" },
  new_league: { bg: "bg-blue-500/10", dot: "bg-blue-400", text: "text-blue-400" },
};

const typeLabels = {
  live: "LIVE",
  starting: "SOON",
  open: "OPEN",
  completed: "DONE",
  new_league: "NEW",
};

export function ActivityFeed() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [gameCount, setGameCount] = useState(47);
  const [cityCount] = useState(23);

  // Simulate live counter
  useEffect(() => {
    const interval = setInterval(() => {
      setGameCount((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Live counter header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-semibold">HAPPENING NOW</span>
        </div>
        <p className="text-2xl sm:text-3xl font-black">
          <span className="text-accent">{gameCount}</span> games this week across{" "}
          <span className="text-accent">{cityCount}</span> cities
        </p>
      </div>

      {/* Feed items */}
      <div className="space-y-2 max-w-2xl mx-auto">
        {activities.slice(0, visibleCount).map((item) => {
          const style = typeStyles[item.type];
          return (
            <div
              key={item.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl ${style.bg} border border-border/10 transition-all hover:border-border/30`}
            >
              <span className="text-lg shrink-0">{item.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-text truncate">{item.league}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${style.bg} ${style.text}`}>
                    {typeLabels[item.type]}
                  </span>
                </div>
                <p className="text-xs text-text-secondary truncate">{item.city} &middot; {item.detail}</p>
              </div>
              {(item.type === "live" || item.type === "starting") && (
                <div className={`w-2 h-2 rounded-full ${style.dot} ${item.type === "live" ? "animate-pulse" : ""}`} />
              )}
            </div>
          );
        })}
      </div>

      {visibleCount < activities.length && (
        <div className="text-center mt-4">
          <button
            onClick={() => setVisibleCount(activities.length)}
            className="text-sm text-accent hover:underline"
          >
            Show more activity
          </button>
        </div>
      )}
    </div>
  );
}

export function TickerTape() {
  const items = [
    '"Bangkok Ballers" just finished a game',
    "New league started in Lagos!",
    '"NickTheBaller" hit Elo 1,500',
    '"Kreuzberg Kickers" completed their 100th game',
    "3 new players joined Berlin Expat League",
    '"Copacabana FC" has a game starting now',
    "Bali Beach League: Team A 5 - 2 Team B",
    '"Google SG Ballers" just started a new season',
  ];

  return (
    <div className="overflow-hidden bg-surface/80 border-y border-border/20 py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-xs text-text-muted mx-8">
            {item} <span className="text-accent mx-2">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
