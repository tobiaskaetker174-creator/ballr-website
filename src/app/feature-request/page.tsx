"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function FeatureRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/feature-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json();
        setError(json.error || "Something went wrong");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-black mb-4">Feature Request Submitted</h1>
          <p className="text-text-secondary">
            Thanks for the input. Our product team reviews every submission.
            Popular requests get built first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header image */}
      <div className="relative h-[20vh] mb-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=80"
          alt="Football being kicked"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Feature <span className="text-accent">Requests</span>
          </h1>
          <p className="text-text-secondary text-lg">
            Got an idea that would make BallR better? We&apos;re all ears.
            Well, all code. But you get the point.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface border border-border/30 rounded-2xl p-6 sm:p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-background border border-border/40 rounded-xl px-4 py-2.5 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-background border border-border/40 rounded-xl px-4 py-2.5 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="feature" className="block text-sm font-medium text-text mb-1.5">
              Feature Description <span className="text-accent">*</span>
            </label>
            <textarea
              id="feature"
              name="feature"
              required
              rows={4}
              placeholder="Describe the feature you'd like to see..."
              className="w-full bg-background border border-border/40 rounded-xl px-4 py-2.5 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
            />
          </div>

          <div>
            <label htmlFor="problem" className="block text-sm font-medium text-text mb-1.5">
              What Problem Does It Solve?
            </label>
            <textarea
              id="problem"
              name="problem"
              rows={3}
              placeholder="What issue would this feature fix?"
              className="w-full bg-background border border-border/40 rounded-xl px-4 py-2.5 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
            />
          </div>

          <div>
            <label htmlFor="usecase" className="block text-sm font-medium text-text mb-1.5">
              Use Case / Scenario
            </label>
            <textarea
              id="usecase"
              name="usecase"
              rows={3}
              placeholder="Describe a scenario where you'd use this feature..."
              className="w-full bg-background border border-border/40 rounded-xl px-4 py-2.5 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
            />
          </div>

          {error && <p className="text-error text-sm">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary hover:bg-primary-dark text-text font-bold py-3 rounded-xl transition-colors disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Feature Request"}
          </button>

          <p className="text-text-muted text-xs text-center">
            All submissions are reviewed by the product team. Popular requests
            get prioritized. Democracy, but for football apps.
          </p>
        </form>
      </div>
    </div>
  );
}
