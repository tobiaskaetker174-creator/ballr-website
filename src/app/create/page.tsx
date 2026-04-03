import type { Metadata } from "next";
import { CreateLeagueForm } from "@/components/CreateLeagueForm";

export const metadata: Metadata = {
  title: "Create Your League — BallR",
  description: "Start your own pickup football league in 60 seconds. Set your rules, invite your crew, track ELO ratings.",
};

export default function CreateLeaguePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black mb-3">
            Create Your <span className="text-accent">League</span>
          </h1>
          <p className="text-text-secondary max-w-lg mx-auto">
            Set your rules, pick your colors, and invite your crew. Your league, your way.
          </p>
        </div>
        <CreateLeagueForm />
      </div>
    </div>
  );
}
