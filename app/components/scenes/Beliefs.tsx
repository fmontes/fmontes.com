"use client";

import { motion, type MotionValue } from "motion/react";
import { PinnedScene, useBand } from "../motion";
import { SectionHeading } from "../ui";

const BELIEFS: React.ReactNode[] = [
  <>AI will collapse the distance between product strategy and execution.</>,
  <>The future product leader builds systems, not processes.</>,
];

// [in0, in1, out0, out1] over the pinned progress; the first statement is
// already visible at progress 0 so the scene is legible before any scroll.
const BANDS: [number, number, number, number][] = [
  [-0.2, -0.1, 0.38, 0.48],
  [0.44, 0.54, 1.2, 1.3],
];

export function Beliefs() {
  return (
    <PinnedScene height="260svh" id="beliefs" chapter="Beliefs">
      {(progress, reduce) => (
        <div className="mx-auto w-full max-w-[900px]">
          <SectionHeading>What I believe</SectionHeading>
          <div data-stack className="grid gap-10 motion-safe:gap-0">
            {BELIEFS.map((b, i) => (
              <Belief key={i} progress={progress} band={BANDS[i]} reduce={reduce}>
                {b}
              </Belief>
            ))}
          </div>
        </div>
      )}
    </PinnedScene>
  );
}

function Belief({
  progress,
  band,
  reduce,
  children,
}: {
  progress: MotionValue<number>;
  band: [number, number, number, number];
  reduce: boolean;
  children: React.ReactNode;
}) {
  const { opacity, y } = useBand(progress, band);

  return (
    <motion.p
      data-reveal
      style={reduce ? undefined : { opacity, y }}
      className="motion-safe:[grid-area:1/1] self-center font-serif text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.2] tracking-[-0.01em] text-ink-strong text-balance"
    >
      {children}
    </motion.p>
  );
}
