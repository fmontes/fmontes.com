"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "./shared";

/**
 * Generic scroll-into-view reveal: rise + fade + de-blur, once.
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A single text line that slides up out of an overflow mask (load-in).
 */
export function MaskedLine({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={`-mb-[0.12em] block overflow-hidden pb-[0.12em] ${className ?? ""}`}>
      <motion.span
        className="block will-change-transform"
        initial={reduce ? false : { y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

type Segment = { t: string; accent?: boolean };

/**
 * Paragraph whose words stagger in (fade + rise + de-blur) when scrolled
 * into view. Used for the big belief statements.
 */
export function StaggeredWords({
  segments,
  className,
}: {
  segments: Segment[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = segments.flatMap((seg) =>
    seg.t
      .split(" ")
      .filter(Boolean)
      .map((w) => ({ w, accent: seg.accent })),
  );

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -22% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : 0.035 } },
      }}
    >
      {words.map(({ w, accent }, i) => (
        <motion.span
          key={`${w}-${i}`}
          className={`inline-block will-change-transform ${
            accent ? "italic text-accent" : ""
          }`}
          variants={{
            hidden: reduce
              ? { opacity: 1 }
              : { opacity: 0, y: "0.4em", filter: "blur(5px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.75, ease: EASE },
            },
          }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.p>
  );
}
