"use client";

import { useState } from "react";
import Image from "next/image";
import type { Venue } from "@/lib/league-data";

export function PitchCard({ venue }: { venue: Venue }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-surface border border-border/20 rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-accent/30"
      onClick={() => setExpanded(!expanded)}
    >
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
            <div className="flex items-center gap-2 shrink-0 ml-2">
              <span className="text-accent text-xs font-semibold">{venue.price}</span>
              <span className={`text-[10px] text-text-muted transition-transform ${expanded ? "rotate-180" : ""}`}>&#9660;</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-[10px] bg-primary/10 text-accent px-2 py-0.5 rounded-lg">{venue.type}</span>
            <span className="text-[10px] bg-surface border border-border/30 text-text-muted px-2 py-0.5 rounded-lg">{venue.surface}</span>
            <span className="text-[10px] bg-surface border border-border/30 text-text-muted px-2 py-0.5 rounded-lg">{venue.capacity}</span>
          </div>
        </div>
      </div>

      {/* Expanded pitch stats */}
      {expanded && (
        <div className="border-t border-border/20 p-4 bg-[#0d1117]">
          <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Pitch Stats</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-surface/50 rounded-xl p-3 border border-border/10">
              <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Best Player</p>
              <p className="text-sm font-bold">{venue.pitchStats.bestPlayer.name}</p>
              <p className="text-xs text-accent font-semibold">Elo {venue.pitchStats.bestPlayer.elo}</p>
            </div>
            <div className="bg-surface/50 rounded-xl p-3 border border-border/10">
              <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Most Games Played</p>
              <p className="text-sm font-bold">{venue.pitchStats.mostGames.name}</p>
              <p className="text-xs text-accent font-semibold">{venue.pitchStats.mostGames.count} games</p>
            </div>
            <div className="bg-surface/50 rounded-xl p-3 border border-border/10">
              <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Most Wins</p>
              <p className="text-sm font-bold">{venue.pitchStats.mostWins.name}</p>
              <p className="text-xs text-accent font-semibold">{venue.pitchStats.mostWins.count} wins</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
