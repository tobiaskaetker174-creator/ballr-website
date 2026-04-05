"use client";

import { useState, useEffect, useCallback } from "react";

interface SpotlightPlayer {
  name: string;
  elo: number;
  games: number;
  winRate: number;
  quote: string;
  city: string;
  position: string;
  streak: string;
  avatar: string;
}

const players: SpotlightPlayer[] = [
  {
    name: "Marco D.",
    elo: 1487,
    games: 52,
    winRate: 67,
    quote: "BallR made Bangkok feel like home. I found my football family here.",
    city: "Bangkok",
    position: "Midfielder",
    streak: "🔥 5 wins",
    avatar: "⚽",
  },
  {
    name: "Sofia R.",
    elo: 1523,
    games: 78,
    winRate: 71,
    quote: "Finally, a league that rewards consistency. The ELO system is addictive.",
    city: "Berlin",
    position: "Striker",
    streak: "🔥 8 wins",
    avatar: "⚡",
  },
  {
    name: "Lucas M.",
    elo: 1401,
    games: 45,
    winRate: 64,
    quote: "Beach football with proper stats? This is the dream.",
    city: "Rio de Janeiro",
    position: "Defender",
    streak: "🔥 3 wins",
    avatar: "🛡️",
  },
  {
    name: "Yuki T.",
    elo: 1456,
    games: 61,
    winRate: 68,
    quote: "From office league to city champion. BallR tracks it all.",
    city: "Singapore",
    position: "Goalkeeper",
    streak: "🔥 4 wins",
    avatar: "🧤",
  },
  {
    name: "Aisha K.",
    elo: 1510,
    games: 34,
    winRate: 73,
    quote: "Started playing 6 months ago. Now I'm top 10 in my league.",
    city: "Bali",
    position: "Winger",
    streak: "🔥 6 wins",
    avatar: "💨",
  },
];

export default function PlayerSpotlightCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % players.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + players.length) % players.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goToNext]);

  const player = players[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-surface/50 to-transparent" aria-label="Player spotlight">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            🏅 <span className="text-accent">Player Spotlight</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Meet the legends dominating their leagues worldwide.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-10 h-10 bg-surface border border-border/30 rounded-full flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
            aria-label="Previous player"
          >
            <span className="text-text-secondary">←</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-10 h-10 bg-surface border border-border/30 rounded-full flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
            aria-label="Next player"
          >
            <span className="text-text-secondary">→</span>
          </button>

          {/* Card */}
          <div
            key={currentIndex}
            className={`bg-surface border border-border/20 rounded-3xl p-8 sm:p-10 transition-all duration-500 ${
              direction === "right" ? "animate-slideInRight" : "animate-slideInLeft"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Left: Avatar + Identity */}
              <div className="flex flex-col items-center sm:items-start sm:w-1/3">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-4xl mb-4 border border-accent/20">
                  {player.avatar}
                </div>
                <h3 className="text-2xl font-black">{player.name}</h3>
                <p className="text-sm text-text-muted">{player.city}</p>
                <p className="text-xs text-accent font-semibold mt-1">{player.position}</p>
                <div className="mt-3 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                  <span className="text-xs font-bold text-orange-400">{player.streak}</span>
                </div>
              </div>

              {/* Right: Stats + Quote */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-surface/50 rounded-xl border border-border/10">
                  <div className="text-center">
                    <div className="text-3xl font-black text-accent">{player.elo}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wide mt-1">ELO</div>
                  </div>
                  <div className="text-center border-l border-r border-border/30">
                    <div className="text-3xl font-black text-accent">{player.games}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Games</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-accent">{player.winRate}%</div>
                    <div className="text-xs text-text-muted uppercase tracking-wide mt-1">Win Rate</div>
                  </div>
                </div>

                <blockquote className="text-text-secondary italic text-base leading-relaxed border-l-2 border-accent/30 pl-4">
                  &ldquo;{player.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {players.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? "right" : "left");
                  setCurrentIndex(i);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? "w-8 h-2 bg-accent"
                    : "w-2 h-2 bg-border/40 hover:bg-border/60"
                }`}
                aria-label={`View player ${i + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-3">
            <span className="text-[10px] text-text-muted">
              {isAutoPlaying ? "▶ Auto-rotating" : "⏸ Paused — hover off to resume"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
