"use client";

import { motion } from "motion/react";
import { EASE_OUT } from "../motion";

const LINES = [
  "I build AI systems for my own work first.",
  "Then I figure out what scales.",
  "Then I put it in front of teams.",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.45 } },
};

const line = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export function Manifesto() {
  return (
    <section
      id="method"
      data-chapter="Method"
      className="flex min-h-[70svh] items-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="mx-auto w-full max-w-[900px] space-y-4 px-6"
      >
        {LINES.map((l, i) => (
          <motion.p
            key={i}
            data-reveal
            variants={line}
            className={`font-serif text-[clamp(1.4rem,2.8vw,2rem)] leading-[1.35] ${
              i === LINES.length - 1 ? "text-ink-strong" : "text-muted"
            }`}
          >
            {l}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
