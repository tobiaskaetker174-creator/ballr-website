"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface City {
  name: string;
  country: string;
  votes: number;
  flag: string;
  launched: boolean;
  region: string;
}

const initialCities: City[] = [
  { name: "Bangkok", country: "Thailand", votes: 156, flag: "ð¹ð­", launched: true, region: "Southeast Asia" },
  { name: "Bali", country: "Indonesia", votes: 89, flag: "ð®ð©", launched: true, region: "Southeast Asia" },
  { name: "London", country: "UK", votes: 143, flag: "ð¬ð§", launched: false, region: "Europe" },
  { name: "Berlin", country: "Germany", votes: 134, flag: "ð©ðª", launched: false, region: "Europe" },
  { name: "Madrid", country: "Spain", votes: 112, flag: "ðªð¸", launched: false, region: "Europe" },
  { name: "Barcelona", country: "Spain", votes: 98, flag: "ðªð¸", launched: false, region: "Europe" },
  { name: "Lisbon", country: "Portugal", votes: 87, flag: "ðµð¹", launched: false, region: "Europe" },
  { name: "Buenos Aires", country: "Argentina", votes: 76, flag: "ð¦ð·", launched: false, region: "South America" },
  { name: "Dubai", country: "UAE", votes: 65, flag: "ð¦ðª", launched: false, region: "Middle East" },
  { name: "Singapore", country: "Singapore", votes: 58, flag: "ð¸ð¬", launched: false, region: "Southeast Asia" },
  { name: "Manila", country: "Philippines", votes: 52, flag: "ðµð­", launched: false, region: "Southeast Asia" },
  { name: "Jakarta", country: "Indonesia", votes: 47, flag: "ð®ð©", launched: false, region: "Southeast Asia" },
  { name: "Ho Chi Minh City", country: "Vietnam", votes: 45, flag: "ð»ð³", launched: false, region: "Southeast Asia" },
  { name: "Kuala Lumpur", country: "Malaysia", votes: 41, flag: "ð²ð¾", launched: false, region: "Southeast Asia" },
  { name: "Chiang Mai", country: "Thailand", votes: 38, flag: "ð¹ð­", launched: false, region: "Southeast Asia" },
  { name: "Phuket", country: "Thailand", votes: 35, flag: "ð¹ð­", launched: false, region: "Southeast Asia" },
  { name: "Hanoi", country: "Vietnam", votes: 33, flag: "ð»ð³", launched: false, region: "Southeast Asia" },
  { name: "Phnom Penh", country: "Cambodia", votes: 28, flag: "ð°ð­", launched: false, region: "Southeast Asia" },
  { name: "Yangon", country: "Myanmar", votes: 22, flag: "ð²ð²", launched: false, region: "Southeast Asia" },
  { name: "Vientiane", country: "Laos", votes: 15, flag: "ð±ð¦", launched: false, region: "Southeast Asia" },
];

export default function VotePage() {
  const [votedCities, setVotedCities] = useState<Set<string>>(new Set());
  const [cityList, setCityList] = useState(initialCities);
  const [filter, setFilter] = useState<string>("All");
  const [loading, setLoading] = useState<string | null>(null);

  // Fetch live vote counts on mount
  useEffect(() => {
    fetch("/api/vote")
      .then((r) => r.json())
      .then((data) => {
        if (data.cities) {
          const countMap = new Map(data.cities.map((c: { city_name: string; vote_count: number }) => [c.city_name, c.vote_count]));
          setCityList((prev) =>
            prev
              .map((c) => ({
                ...c,
                votes: (countMap.get(c.name) as number) ?? c.votes,
              }))
              .sort((a, b) => b.votes - a.votes)
          );
        }
      })
      .catch(() => {});
  }, []);

  const maxVotes = Math.max(...cityList.map((c) => c.votes));
  const regions = ["All", ...new Set(initialCities.map((c) => c.region))];
  const filtered = filter === "All" ? cityList : cityList.filter((c) => c.region === filter);

  const handleVote = async (cityName: string) => {
    if (votedCities.has(cityName)) return;
    setLoading(cityName);

    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: cityName }),
      });
      if (res.ok || res.status === 409) {
        setVotedCities(new Set([...votedCities, cityName]));
        if (res.ok) {
          setCityList((prev) =>
            prev
              .map((c) => c.name === cityName ? { ...c, votes: c.votes + 1 } : c)
              .sort((a, b) => b.votes - a.votes)
          );
        }
      }
    } catch {
      // Fallback: still update locally
      setVotedCities(new Set([...votedCities, cityName]));
      setCityList((prev) =>
        prev
          .map((c) => c.name === cityName ? { ...c, votes: c.votes + 1 } : c)
          .sort((a, b) => b.votes - a.votes)
      );
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero image */}
      <div className="relative h-[30vh] mb-12 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1920&q=80"
          alt="Football players from around the world"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background flex items-end justify-center pb-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-black mb-3">
              Where Should We
              <span className="text-accent"> Expand Next?</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Vote for your city. We launch wherever the demand is.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-text-muted text-sm text-center mb-8">
          You can vote for multiple cities. One vote per city. No account needed.
        </p>

        {/* Top 3 highlight */}
        <div className="bg-surface border border-accent/30 rounded-2xl p-6 mb-10">
          <h3 className="text-sm text-accent font-semibold uppercase tracking-wider mb-4 text-center">
            Launching Next In
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            {cityList
              .filter((c) => !c.launched)
              .slice(0, 3)
              .map((city, i) => (
                <div key={city.name}>
                  <div className="text-2xl mb-1">{city.flag}</div>
                  <div className="text-sm font-bold">{city.name}</div>
                  <div className="text-xs text-accent">{city.votes} votes</div>
                  {i === 0 && (
                    <span className="inline-block mt-1 text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                      #1
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Region filter */}
        <div className="flex gap-2 flex-wrap mb-6">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
                filter === r ? "bg-primary text-text" : "bg-surface text-text-secondary hover:text-text"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* City list */}
        <div className="space-y-3">
          {filtered.map((city) => (
            <div
              key={city.name}
              className="bg-surface border border-border/20 rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="text-2xl">{city.flag}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">{city.name}</span>
                  <span className="text-text-muted text-xs">{city.country}</span>
                  {city.launched && (
                    <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                      LIVE
                    </span>
                  )}
                </div>
                <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${(city.votes / maxVotes) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-text-muted mt-1">
                  {city.votes} people would play here
                </div>
              </div>
              {!city.launched && (
                <button
                  onClick={() => handleVote(city.name)}
                  disabled={votedCities.has(city.name) || loading === city.name}
                  className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    votedCities.has(city.name)
                      ? "bg-accent/20 text-accent cursor-default"
                      : loading === city.name
                      ? "bg-surface-light text-text-muted cursor-wait"
                      : "bg-primary hover:bg-primary-dark text-text"
                  }`}
                >
                  {votedCities.has(city.name) ? "Voted â" : loading === city.name ? "..." : "Vote"}
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="text-text-muted text-xs text-center mt-8">
          Votes are anonymous and tracked by IP to prevent duplicates.
        </p>
      </div>
    </div>
  );
}
