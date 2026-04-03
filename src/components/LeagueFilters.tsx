"use client";

import { useState } from "react";

const cities = ["All Cities", "Bangkok", "Berlin", "Bali", "Singapore", "Rio de Janeiro", "Lagos"];
const sports = ["All Sports", "football", "basketball", "volleyball"];

export function LeagueFiltersBar() {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedSport, setSelectedSport] = useState("All Sports");

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {/* City filter */}
      <div className="flex gap-2 flex-wrap justify-center">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              selectedCity === city
                ? "bg-accent text-background border-accent font-semibold"
                : "border-border/30 text-text-secondary hover:border-accent/50"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Sport filter */}
      <div className="flex gap-2">
        {sports.map((sport) => (
          <button
            key={sport}
            onClick={() => setSelectedSport(sport)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              selectedSport === sport
                ? "bg-primary text-text border-primary font-semibold"
                : "border-border/30 text-text-secondary hover:border-primary/50"
            }`}
          >
            {sport === "All Sports" ? sport : sport.charAt(0).toUpperCase() + sport.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
