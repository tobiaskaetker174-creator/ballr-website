"use client";

import { useState, useRef, useEffect } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);

  useEffect(() => {
    if (open) {
      const el = contentRef.current;
      if (el) {
        setHeight(el.scrollHeight);
        // After transition, set to auto for dynamic content
        const timeout = setTimeout(() => setHeight(undefined), 300);
        return () => clearTimeout(timeout);
      }
    } else {
      // First set explicit height, then collapse to 0
      const el = contentRef.current;
      if (el) {
        setHeight(el.scrollHeight);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setHeight(0));
        });
      }
    }
  }, [open]);

  return (
    <div className={`border rounded-2xl overflow-hidden bg-surface transition-colors duration-300 ${open ? "border-accent/30" : "border-border/30"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-surface-light/50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-text pr-4">{title}</span>
        <svg
          className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ height: height !== undefined ? `${height}px` : "auto", opacity: open ? 1 : 0 }}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
