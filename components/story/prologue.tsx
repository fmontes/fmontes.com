"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { Dot, EASE, Link } from "./shared";
import { MaskedLine } from "./reveal";

export function Prologue() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section
      ref={ref}
      data-chapter="Prologue"
      className="relative flex min-h-svh flex-col px-6 sm:px-10"
    >
      {/* ── Header: name + socials ── */}
      <motion.header
        className="flex items-baseline justify-between gap-6 pt-7 sm:pt-9"
        initial={reduce ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="font-serif text-[22px] leading-none tracking-[-0.01em] text-ink-strong sm:text-[26px]">
          Freddy Montes
        </p>
        <nav className="flex items-center gap-x-3 text-[13px] sm:gap-x-4 sm:text-[14px]">
          <Link href="https://linkedin.com/in/fmontes">LinkedIn</Link>
          <Dot />
          <Link href="https://x.com/fmontes">Twitter</Link>
          <Dot />
          <Link href="https://github.com/fmontes">GitHub</Link>
        </nav>
      </motion.header>

      {/* ── Hero thesis ── */}
      <motion.div
        style={reduce ? undefined : { opacity, scale, y }}
        className="mx-auto flex w-full max-w-7xl flex-1 origin-top flex-col justify-center py-16"
      >
        <motion.p
          className="mb-8 font-mono text-[11px] tracking-[0.22em] uppercase text-muted sm:mb-12"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          VP of Product, dotCMS
        </motion.p>

        <h1 className="font-serif text-[clamp(3.2rem,10.5vw,10rem)] leading-[1.02] tracking-[-0.02em] text-ink-strong">
          <MaskedLine delay={0.3}>I build the</MaskedLine>
          <MaskedLine delay={0.42}>
            <em className="text-accent">AI systems</em>
          </MaskedLine>
          <MaskedLine delay={0.54}>I lead teams to ship.</MaskedLine>
        </h1>

        <motion.p
          className="mt-10 font-serif italic text-[clamp(1.3rem,2.6vw,2.1rem)] leading-[1.35] text-muted sm:mt-14"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: EASE }}
        >
          Strategy without prototypes is speculation.
        </motion.p>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="flex items-center gap-4 pb-8 sm:pb-10"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        aria-hidden
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
          The story so far
        </span>
        <span className="relative h-px w-16 overflow-hidden bg-rule">
          <motion.span
            className="absolute inset-0 origin-left bg-accent"
            animate={reduce ? undefined : { scaleX: [0, 1, 0], x: ["0%", "0%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
