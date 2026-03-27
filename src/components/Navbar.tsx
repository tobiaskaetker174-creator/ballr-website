"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navLinks = [
  { href: "/leagues", label: "Leagues" },
  { href: "/different", label: "Why BallR" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/vote", label: "Next City" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="BallR" width={100} height={34} className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#download"
              className="bg-primary hover:bg-primary-dark text-text text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Download App
            </a>
            <a
              href="https://app.ballr.club"
              className="border border-accent/40 hover:border-accent text-accent text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              Login
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-text-secondary"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-border/30 mt-2">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-text-secondary hover:text-accent transition-colors px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#download"
                className="bg-primary hover:bg-primary-dark text-text text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center mt-2"
              >
                Download App
              </a>
              <a
                href="https://app.ballr.club"
                className="border border-accent/40 hover:border-accent text-accent text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors text-center"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
