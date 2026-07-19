"use client";

import { useEffect, useState } from "react";

// Mirrors the id/data-chapter pairs on the scene <section>s in flow order.
const CHAPTERS = [
  { id: "start", label: "Start" },
  { id: "thesis", label: "Thesis" },
  { id: "about", label: "About" },
  { id: "beliefs", label: "Beliefs" },
  { id: "built", label: "Work" },
  { id: "method", label: "Method" },
  { id: "stance", label: "Stance" },
  { id: "contact", label: "Contact" },
];

export function ProgressRail() {
  const [active, setActive] = useState<string>(CHAPTERS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive((entry.target as HTMLElement).id);
          }
        }
      },
      // A thin band at the vertical center of the viewport decides the
      // active chapter, so tall pinned scenes stay active while pinned.
      { rootMargin: "-49% 0px -49% 0px", threshold: 0 },
    );
    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
    >
      {CHAPTERS.map((c) => (
        <button
          key={c.id}
          type="button"
          aria-label={c.label}
          aria-current={active === c.id ? "true" : undefined}
          onClick={() =>
            document.getElementById(c.id)?.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "auto"
                : "smooth",
            })
          }
          className="group relative flex items-center justify-center p-1"
        >
          <span
            className={`block h-1.5 w-1.5 rounded-full transition-[background-color,transform] duration-300 ${
              active === c.id ? "bg-accent scale-125" : "bg-rule group-hover:bg-muted"
            }`}
          />
          <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap font-mono text-[10px] tracking-[0.18em] uppercase text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            {c.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
