"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { EASE } from "./shared";

const LINE = "I don\u2019t theorize about AI-native product orgs.";

export function Climax() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });
  const words = LINE.split(" ");

  return (
    <section
      ref={ref}
      data-chapter="The point"
      className="relative flex min-h-svh flex-col items-center justify-center px-6 py-[22svh] text-center"
    >
      <p className="max-w-6xl font-serif text-[clamp(2.4rem,7vw,6.8rem)] leading-[1.06] tracking-[-0.02em] text-balance text-ink-strong">
        {words.map((word, i) => (
          <ScrubWord
            key={`${word}-${i}`}
            word={word}
            index={i}
            total={words.length}
            progress={scrollYProgress}
            reduce={!!reduce}
          />
        ))}
      </p>

      <RunOne reduce={!!reduce} />
    </section>
  );
}

function ScrubWord({
  word,
  index,
  total,
  progress,
  reduce,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const opacity = useTransform(
    progress,
    [index / total, (index + 0.85) / total, 1],
    [0.12, 1, 1],
  );
  return (
    <motion.span
      style={{ opacity: reduce ? 1 : opacity }}
      className="inline-block"
    >
      {word}
      {index < total - 1 ? "\u00A0" : ""}
    </motion.span>
  );
}

function RunOne({ reduce }: { reduce: boolean }) {
  const textClasses =
    "font-serif italic text-[clamp(3.2rem,10vw,9.5rem)] leading-[1.05] tracking-[-0.02em]";

  if (reduce) {
    return (
      <p className={`mt-8 ${textClasses} text-accent`}>
        I run one.
      </p>
    );
  }

  return (
    <motion.p
      className="relative mt-8 inline-block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -28% 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {/* base layer: accent text on the page */}
      <span className={`${textClasses} text-accent`}>I&nbsp;run one.</span>

      {/* accent block sweeps in, carrying the knockout (paper) text */}
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-accent"
        initial={{ clipPath: "inset(-12% 101% -12% -1%)" }}
        whileInView={{ clipPath: "inset(-12% -1% -12% -1%)" }}
        viewport={{ once: true, margin: "0px 0px -28% 0px" }}
        transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
      >
        <span className={`${textClasses} block text-background`}>
          I&nbsp;run one.
        </span>
      </motion.span>
    </motion.p>
  );
}
