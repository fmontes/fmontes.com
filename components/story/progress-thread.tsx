"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "./shared";

/**
 * Fixed left-edge "story thread": a line that fills as you scroll,
 * with the current chapter label rotating in at its foot.
 */
export function ProgressThread() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });
  const [chapter, setChapter] = useState("Prologue");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-chapter]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setChapter(entry.target.getAttribute("data-chapter") ?? chapter);
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-6 z-40 hidden h-svh lg:block"
    >
      <div className="relative h-full w-px bg-rule/60">
        <motion.div
          className="absolute inset-0 origin-top bg-accent"
          style={{ scaleY }}
        />
      </div>
      <div className="absolute bottom-8 left-0 h-px w-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={chapter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="absolute bottom-3 left-0 origin-bottom-left rotate-[-90deg] font-mono text-[10px] tracking-[0.32em] uppercase whitespace-nowrap text-muted"
          >
            {chapter}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
