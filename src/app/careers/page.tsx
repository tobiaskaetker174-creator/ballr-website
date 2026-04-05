"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

const tabs = ["Organizer", "Franchise"] as const;
type Tab = (typeof tabs)[number];

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Organizer");

  return (
    <div className="pt-24 pb-16">
      {/* Hero image */}
      <div className="relative h-[25vh] mb-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&q=80"
          alt="Football match at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Join the <span className="text-accent">BallR Network</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Become an organizer in your city and bring football to the people.
          </p>
        </div>

        <div className="space-y-8">
            <div className="bg-surface border border-border/30 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black mb-4">Become a BallR Organizer</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Run pickup games in your city using the BallR platform. You
                handle the venue and the vibe — we handle the tech, payments,
                team balancing, and player ratings. It&apos;s like being a
                football god, but with less paperwork.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80"
                    alt="Friends organizing a football game"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-3 text-text-secondary text-sm flex flex-col justify-center">
                  {[
                    "Manage local pickup games",
                    "Get paid through BallR's payment system",
                    "Access player ratings and reliability scores",
                    "Auto-balanced teams for every game",
                    "Marketing support from BallR HQ",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <OrganizerForm />
          </div>

        <div className="mt-16 bg-surface border border-border/30 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl font-black mb-2">Organizer Community</h3>
          <p className="text-text-secondary text-sm mb-4">
            Connect with other BallR organizers. Share best practices, ask
            questions, and help shape the future of pickup football.
          </p>
          <div className="inline-block bg-primary/20 text-accent text-sm font-semibold px-4 py-2 rounded-lg">
            Forum Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}

function OrganizerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "organizer", ...data }),
      });
      if (res.ok) setSubmitted(true);
    } catch { /* fallback */ }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-accent/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-bold mb-2">Application Submitted</h3>
        <p className="text-text-secondary text-sm">We&apos;ll review your application and get back to you within a few days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-border/30 rounded-2xl p-6 sm:p-8 space-y-5">
      <h3 className="text-lg font-bold">Apply as Organizer</h3>
      <InputField label="Full Name" name="name" required />
      <InputField label="Email" name="email" type="email" required />
      <InputField label="City" name="city" placeholder="e.g. Bangkok, Berlin, Madrid" required />
      <TextareaField label="Why do you want to organize?" name="motivation" required />
      <TextareaField label="Experience organizing sports events" name="experience" />
      <button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary-dark text-text font-bold py-3 rounded-xl transition-colors disabled:opacity-60">
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "franchise", ...data }),
      });
      if (res.ok) setSubmitted(true);
    } catch { /* fallback */ }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-accent/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-bold mb-2">Inquiry Submitted</h3>
        <p className="text-text-secondary text-sm">Our franchise team will reach out to discuss next steps.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-border/30 rounded-2xl p-6 sm:p-8 space-y-5">
      <h3 className="text-lg font-bold">Franchise Inquiry</h3>
      <InputField label="Full Name" name="name" required />
      <InputField label="Email" name="email" type="email" required />
      <InputField label="Target City" name="city" required />
      <InputField label="Company / Organization" name="company" />
      <TextareaField label="Tell us about your plans" name="plans" required />
      <TextareaField label="Budget range (optional)" name="budget" />
      <button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary-dark text-text font-bold py-3 rounded-xl transition-colors disabled:opacity-60">
        {submitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}

function InputField({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-text mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input type={type} id={name} name={name} placeholder={placeholder} required={required}
        className="w-full bg-background border border-border/40 rounded-xl px-4 py-2.5 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors" />
    </div>
  );
}

function TextareaField({ label, name, required }: { label: string; name: string; required?: boolean; }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-text mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea id={name} name={name} required={required} rows={3}
        className="w-full bg-background border border-border/40 rounded-xl px-4 py-2.5 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none" />
    </div>
  );
}
