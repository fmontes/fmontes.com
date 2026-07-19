"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { PinnedScene } from "../motion";

const SENTENCE = "Strategy without prototypes is speculation.";
const WORDS = SENTENCE.split(" ");

export function Interstitial() {
  return (
    <PinnedScene height="200svh" id="thesis" chapter="Thesis">
      {(progress, reduce) => (
        <InterstitialInner progress={progress} reduce={reduce} />
      )}
    </PinnedScene>
  );
}

function InterstitialInner({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const y = useTransform(progress, [0, 0.35], [48, 0]);

  return (
    <motion.p
      style={reduce ? undefined : { y }}
      className="mx-auto max-w-[1000px] text-center font-serif italic text-[clamp(2rem,5.5vw,4rem)] leading-[1.2] tracking-[-0.01em] text-ink-strong text-balance"
    >
      <span className="sr-only">{SENTENCE}</span>
      <span aria-hidden>
        {WORDS.map((w, i) => (
          <ScrubWord key={i} progress={progress} index={i} reduce={reduce}>
            {w + (i < WORDS.length - 1 ? " " : "")}
          </ScrubWord>
        ))}
      </span>
    </motion.p>
  );
}

function ScrubWord({
  progress,
  index,
  reduce,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  reduce: boolean;
  children: React.ReactNode;
}) {
  const start = 0.12 + index * 0.12;
  const opacity = useTransform(progress, [start, start + 0.13], [0.14, 1]);

  return (
    <motion.span data-reveal style={reduce ? undefined : { opacity }}>
      {children}
    </motion.span>
  );
}
