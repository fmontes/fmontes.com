"use client";

import { useRef, useSyncExternalStore } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

export const EASE_OUT: [number, number, number, number] = [
  0.21, 0.47, 0.32, 0.98,
];

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/**
 * Motion's own useReducedMotion reads matchMedia during the first client
 * render while SSR renders null, which hydration-mismatches when the DOM
 * branches on it. This hook renders false on the server and during
 * hydration, then syncs to the real preference.
 */
export function useReducedMotionSafe() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

export function Reveal({
  children,
  delay = 0,
  amount = 0.4,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Tall wrapper + sticky inner viewport. Progress runs 0→1 across the pinned
 * duration, spring-smoothed. Under prefers-reduced-motion the wrapper
 * collapses to content height and the pin disengages (motion-safe: CSS), and
 * `reduce` lets scenes drop their scrub bindings. Without JS, the noscript
 * block in layout.tsx flattens [data-pin]/[data-pin-inner] the same way.
 */
export function PinnedScene({
  height,
  chapter,
  id,
  className,
  innerClassName,
  children,
}: {
  /** CSS height for the tall wrapper, e.g. "200svh" */
  height: string;
  chapter?: string;
  id?: string;
  className?: string;
  innerClassName?: string;
  children: (progress: MotionValue<number>, reduce: boolean) => React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={ref}
      id={id}
      data-chapter={chapter}
      data-pin
      className={`relative motion-safe:h-(--pin-h) ${className ?? ""}`}
      style={{ "--pin-h": height } as React.CSSProperties}
    >
      <div
        data-pin-inner
        className={`motion-safe:sticky motion-safe:top-0 motion-safe:h-svh flex flex-col items-center justify-center overflow-hidden px-6 py-24 motion-safe:py-0 ${innerClassName ?? ""}`}
      >
        {children(progress, reduce)}
      </div>
    </section>
  );
}

/** Fade+drift a band of a pinned scene's progress: [in0, in1, out0, out1]. */
export function useBand(
  progress: MotionValue<number>,
  band: [number, number, number, number],
  drift = 40,
) {
  const opacity = useTransform(progress, band, [0, 1, 1, 0]);
  const y = useTransform(progress, band, [drift, 0, 0, -drift]);
  return { opacity, y };
}
