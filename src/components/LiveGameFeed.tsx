"use client";

import { useState, useEffect } from "react";

interface Game {
  id: string;
  league: string;
  format: string;
  location: string;
  city: string;
  emoji: string;
  kickoff: Date;
  spots: number;
  totalSpots: number;
}

function getUpcomingGames(): Game[] {
  const now = new Date();
  return [
    {
      id: "g1",
      league: "Bangkok Ballers",
      format: "7v7",
      location: "Thonglor FC Arena",
      city: "Bangkok",
      emoji: "🇹🇭",
      kickoff: new Date(now.getTime() + 2 * 60 * 60 * 1000), // 2h from now
      spots: 3,
      totalSpots: 14,
    },
    {
      id: "g2",
      league: "Kreuzberg Kickers",
      format: "5v5",
      location: "Görlitzer Park Pitch",
      city: "Berlin",
      emoji: "🇩🇪",
      kickoff: new Date(now.getTime() + 5 * 60 * 60 * 1000), // 5h
      spots: 1,
      totalSpots: 10,
    },
    {
      id: "g3",
      league: "Canggu Sunset League",
      format: "6v6",
      location: "Canggu Beach Field",
      city: "Bali",
      emoji: "🇮🇩",
      kickoff: new Date(now.getTime() + 26 * 60 * 60 * 1000), // ~1 day
      spots: 5,
      totalSpots: 12,
    },
    {
      id: "g4",
      league: "Copacabana FC",
      format: "5v5",
      location: "Posto 6 Beach Court",
      city: "Rio de Janeiro",
      emoji: "🇧🇷",
      kickoff: new Date(now.getTime() + 48 * 60 * 60 * 1000), // ~2 days
      spots: 4,
      totalSpots: 10,
    },
    {
      id: "g5",
      league: "Bangkok Ballers",
      format: "5v5",
      location: "Sukhumvit Arena",
      city: "Bangkok",
      emoji: "🇹🇭",
      kickoff: new Date(now.getTime() + 72 * 60 * 60 * 1000), // ~3 days
      spots: 6,
      totalSpots: 10,
    },
  ];
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return "LIVE NOW";
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  return `${minutes}m ${seconds}s`;
}

function CountdownTimer({ kickoff }: { kickoff: Date }) {
  const [timeLeft, setTimeLeft] = useState(() => kickoff.getTime() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(kickoff.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [kickoff]);

  const isLive = timeLeft <= 0;
  const isUrgent = timeLeft > 0 && timeLeft < 2 * 60 * 60 * 1000; // < 2h

  return (
    <div
      className={`font-mono text-sm font-bold tabular-nums ${
        isLive
          ? "text-red-400 animate-pulse"
          : isUrgent
          ? "text-orange-400"
          : "text-accent"
      }`}
    >
      {isLive && <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1.5 animate-pulse" />}
      {formatCountdown(timeLeft)}
    </div>
  );
}

export default function LiveGameFeed() {
  const [games] = useState(getUpcomingGames);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-surface/30 to-background" aria-label="Live game feed">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black">
            Live <span className="text-accent">Game Feed</span>
          </h2>
        </div>
        <p className="text-text-secondary text-center mb-10 text-sm max-w-md mx-auto">
          Real games happening across BallR leagues. Claim your spot before they fill up.
        </p>

        <div className="space-y-3">
          {games.map((game) => {
            const spotsPercent = ((game.totalSpots - game.spots) / game.totalSpots) * 100;
            return (
              <div
                key={game.id}
                className="group bg-surface border border-border/20 rounded-2xl p-5 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Left: League info */}
                  <div className="flex items-center gap-3 sm:w-1/3">
                    <span className="text-2xl">{game.emoji}</span>
                    <div>
                      <h3 className="font-bold text-sm text-text group-hover:text-accent transition-colors">
                        {game.league}
                      </h3>
                      <p className="text-xs text-text-muted">
                        📍 {game.location}
                      </p>
                    </div>
                  </div>

                  {/* Center: Format + Countdown */}
                  <div className="flex items-center gap-4 sm:w-1/3 sm:justify-center">
                    <span className="text-[10px] px-2.5 py-1 bg-accent/10 text-accent rounded-full font-bold uppercase tracking-wider">
                      {game.format}
                    </span>
                    <CountdownTimer kickoff={game.kickoff} />
                  </div>

                  {/* Right: Spots + Join */}
                  <div className="flex items-center gap-4 sm:w-1/3 sm:justify-end">
                    <div className="flex-1 sm:flex-none sm:w-32">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-text-muted">
                          {game.totalSpots - game.spots}/{game.totalSpots} joined
                        </span>
                      </div>
                      <div className="w-full bg-border/20 rounded-full h-1.5">
                        <div
                          className="bg-accent rounded-full h-1.5 transition-all duration-500"
                          style={{ width: `${spotsPercent}%` }}
                        />
                      </div>
                      <p className="text-xs font-semibold text-green-400 mt-1">
                        {game.spots} spot{game.spots !== 1 ? "s" : ""} left
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-accent hover:bg-accent/90 text-background text-xs font-bold rounded-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
                      Join Game
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button className="text-accent hover:text-accent/80 text-sm font-semibold transition-colors">
            View all upcoming games →
          </button>
        </div>
      </div>
    </section>
  );
}
