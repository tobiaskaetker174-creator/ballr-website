"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navLinks = [
  { href: "/leagues", label: "Leagues" },
  { href: "/create", label: "Create League" },
  { href: "/different", label: "Why BallR" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b transition-shadow duration-300 ${scrolled ? "border-border/40 shadow-lg shadow-black/20" : "border-border/30"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image src="/logo.svg" alt="BallR" width={100} height={34} className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
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
            className="md:hidden p-2 text-text-secondary hover:text-text transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg className="w-6 h-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 border-t border-border/30 mt-2">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-text-secondary hover:text-accent hover:bg-surface/50 transition-colors px-3 py-2.5 rounded-lg text-base"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border/20 my-1" />
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="bg-primary hover:bg-primary-dark text-text text-sm font-semibold px-5 py-3 rounded-xl transition-colors text-center"
              >
                Download App
              </a>
              <a
                href="https://app.ballr.club"
                className="border border-accent/40 hover:border-accent text-accent text-sm font-semibold px-4 py-3 rounded-xl transition-colors text-center"
              >
                Login
              </a>
              <div className="flex justify-center pt-1">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
