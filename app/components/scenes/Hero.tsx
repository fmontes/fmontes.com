"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { PinnedScene } from "../motion";
import { Dot, Link } from "../ui";

const WORDS: { text: string; em?: boolean; breakBefore?: boolean }[] = [
  { text: "I" },
  { text: "build" },
  { text: "the" },
  // One unit so the phrase never wraps mid-emphasis on small screens.
  { text: "AI systems", em: true },
  { text: "I", breakBefore: true },
  { text: "lead" },
  { text: "teams" },
  { text: "to" },
  { text: "ship." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const word = {
  hidden: { y: "115%" },
  show: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.19, 1, 0.22, 1] as const },
  },
};

export function Hero() {
  return (
    <PinnedScene height="180svh" id="start" chapter="Start">
      {(progress, reduce) => <HeroInner progress={progress} reduce={reduce} />}
    </PinnedScene>
  );
}

function HeroInner({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const scale = useTransform(progress, [0.15, 0.9], [1, 0.95]);
  const opacity = useTransform(progress, [0.3, 0.85], [1, 0]);
  const cueOpacity = useTransform(progress, [0, 0.12], [1, 0]);

  return (
    <motion.div
      style={reduce ? undefined : { scale, opacity }}
      className="flex h-svh w-full flex-col px-6 sm:px-10"
    >
      <motion.header
        data-reveal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 pt-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:pt-10"
      >
        <div>
          <p className="font-serif text-[24px] sm:text-[28px] leading-none tracking-[-0.01em] text-ink-strong whitespace-nowrap">
            Freddy Montes
          </p>
          <p className="mt-2 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-muted">
            VP of Product, dotCMS
          </p>
        </div>
        <nav className="flex items-center gap-x-3 sm:gap-x-4 text-[13px] sm:text-[14px]">
          <Link href="https://linkedin.com/in/fmontes">LinkedIn</Link>
          <Dot />
          <Link href="https://x.com/fmontes">Twitter</Link>
          <Dot />
          <Link href="https://github.com/fmontes">GitHub</Link>
        </nav>
      </motion.header>

      <div className="flex flex-1 items-center">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          aria-label="I build the AI systems I lead teams to ship."
          className="mx-auto w-full max-w-[1200px] font-serif text-[clamp(2.75rem,8.5vw,6rem)] leading-[1.04] tracking-[-0.015em] text-ink-strong"
        >
          {WORDS.map((w, i) => (
            <span key={i} aria-hidden>
              {w.breakBefore && <br />}
              <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
                <motion.span
                  data-reveal
                  variants={word}
                  className={`inline-block ${w.em ? "italic text-accent" : ""}`}
                >
                  {w.text}
                </motion.span>
              </span>
              {i < WORDS.length - 1 && " "}
            </span>
          ))}
        </motion.h1>
      </div>

      <motion.div
        data-reveal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.9 }}
        className="mx-auto flex w-full max-w-[1200px] justify-center pb-10"
      >
        <motion.div
          style={reduce ? undefined : { opacity: cueOpacity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted">
            Scroll
          </span>
          <span className="relative block h-9 w-px overflow-hidden bg-rule">
            <span className="absolute left-0 top-0 block h-3 w-px bg-accent motion-safe:animate-cue" />
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
