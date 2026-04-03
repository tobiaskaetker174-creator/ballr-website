"use client";

import { useState } from "react";

const presetColors = [
  { name: "Forest", primary: "#2D5A27", accent: "#A1D494" },
  { name: "Ocean", primary: "#1E3A5F", accent: "#5BA4E6" },
  { name: "Sunset", primary: "#8B4513", accent: "#FFB347" },
  { name: "Night", primary: "#1A1A2E", accent: "#E94560" },
  { name: "Gold", primary: "#FFD700", accent: "#009B3A" },
  { name: "Royal", primary: "#4B0082", accent: "#DA70D6" },
];

export function CreateLeagueForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [sport, setSport] = useState("football");
  const [visibility, setVisibility] = useState<"private" | "public">("private");
  const [maxPlayers, setMaxPlayers] = useState(7);
  const [eloEnabled, setEloEnabled] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("#2D5A27");
  const [accentColor, setAccentColor] = useState("#A1D494");

  return (
    <div className="space-y-8">
      {/* Preview Card */}
      <div className="bg-surface border border-border/20 rounded-2xl overflow-hidden">
        <div className="h-2" style={{ background: `linear-gradient(to right, ${primaryColor}, ${accentColor})` }} />
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
              style={{ backgroundColor: primaryColor + '30', color: accentColor }}
            >
              {name ? name.charAt(0) : "?"}
            </div>
            <div>
              <h3 className="font-bold">{name || "Your League Name"}</h3>
              <p className="text-xs text-text-muted">{city || "City"} · {sport} · {maxPlayers}v{maxPlayers}</p>
            </div>
          </div>
          <p className="text-text-secondary text-xs">{description || "Your league description will appear here..."}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-text-muted">
            <span>👥 0 players</span>
            {eloEnabled && <span className="text-accent">⚡ ELO enabled</span>}
            <span className={visibility === "public" ? "text-accent" : "text-text-muted"}>
              {visibility === "public" ? "🌍 Public" : "🔒 Private"}
            </span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">League Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Kreuzberg Kickers"
            className="w-full bg-surface border border-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
            maxLength={50}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What's your league about? Who should join?"
            className="w-full bg-surface border border-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors h-24 resize-none"
            maxLength={500}
          />
        </div>

        {/* City + Sport */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Bangkok"
              className="w-full bg-surface border border-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Sport</label>
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="w-full bg-surface border border-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
            >
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="volleyball">Volleyball</option>
              <option value="tennis">Tennis</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Players per team */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Players per Team: <span className="text-accent">{maxPlayers}v{maxPlayers}</span>
          </label>
          <input
            type="range"
            min={3}
            max={11}
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(parseInt(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>3v3</span>
            <span>5v5</span>
            <span>7v7</span>
            <span>11v11</span>
          </div>
        </div>

        {/* Visibility + ELO */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Visibility</label>
            <div className="flex gap-2">
              <button
                onClick={() => setVisibility("private")}
                className={`flex-1 text-xs px-3 py-2.5 rounded-xl border transition-all ${
                  visibility === "private"
                    ? "bg-surface-light border-accent/50 text-accent font-semibold"
                    : "border-border/30 text-text-secondary"
                }`}
              >
                🔒 Private
              </button>
              <button
                onClick={() => setVisibility("public")}
                className={`flex-1 text-xs px-3 py-2.5 rounded-xl border transition-all ${
                  visibility === "public"
                    ? "bg-surface-light border-accent/50 text-accent font-semibold"
                    : "border-border/30 text-text-secondary"
                }`}
              >
                🌍 Public
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">ELO Rating</label>
            <div className="flex gap-2">
              <button
                onClick={() => setEloEnabled(true)}
                className={`flex-1 text-xs px-3 py-2.5 rounded-xl border transition-all ${
                  eloEnabled
                    ? "bg-surface-light border-accent/50 text-accent font-semibold"
                    : "border-border/30 text-text-secondary"
                }`}
              >
                ⚡ On
              </button>
              <button
                onClick={() => setEloEnabled(false)}
                className={`flex-1 text-xs px-3 py-2.5 rounded-xl border transition-all ${
                  !eloEnabled
                    ? "bg-surface-light border-accent/50 text-accent font-semibold"
                    : "border-border/30 text-text-secondary"
                }`}
              >
                Off
              </button>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div>
          <label className="block text-sm font-semibold mb-2">League Colors</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {presetColors.map((preset) => (
              <button
                key={preset.name}
                onClick={() => {
                  setPrimaryColor(preset.primary);
                  setAccentColor(preset.accent);
                }}
                className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border transition-all ${
                  primaryColor === preset.primary
                    ? "border-accent/50 bg-surface-light"
                    : "border-border/30 hover:border-accent/30"
                }`}
              >
                <div className="flex gap-0.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.primary }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.accent }} />
                </div>
                {preset.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-8 h-8 rounded-lg cursor-pointer border-0"
              />
              <span className="text-xs text-text-muted">Primary</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-8 h-8 rounded-lg cursor-pointer border-0"
              />
              <span className="text-xs text-text-muted">Accent</span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          className="w-full font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: accentColor, color: primaryColor }}
          disabled={!name.trim()}
        >
          🏆 Create League
        </button>
        <p className="text-xs text-text-muted text-center">
          You&apos;ll get an invite code to share with your crew. You can change everything later.
        </p>
      </div>
    </div>
  );
}
