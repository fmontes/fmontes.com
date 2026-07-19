"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { PinnedScene } from "../motion";

export function Kicker() {
  return (
    <PinnedScene height="220svh" id="stance" chapter="Stance">
      {(progress, reduce) => <KickerInner progress={progress} reduce={reduce} />}
    </PinnedScene>
  );
}

function KickerInner({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const lineOpacity = useTransform(
    progress,
    [0.05, 0.22, 0.42, 0.58],
    [0, 1, 1, 0.45],
  );
  const lineY = useTransform(progress, [0.05, 0.22], [40, 0]);

  const punchOpacity = useTransform(progress, [0.42, 0.58], [0, 1]);
  const punchScale = useTransform(progress, [0.42, 0.58], [0.92, 1]);
  const punchY = useTransform(progress, [0.42, 0.58], [30, 0]);

  return (
    <div className="mx-auto w-full max-w-[1000px] text-center">
      <motion.p
        data-reveal
        style={reduce ? undefined : { opacity: lineOpacity, y: lineY }}
        className="font-serif text-[clamp(1.75rem,4.2vw,3.25rem)] leading-[1.2] tracking-[-0.01em] text-ink-strong text-balance"
      >
        I don&apos;t theorize about AI-native product orgs.
      </motion.p>
      <motion.p
        data-reveal
        style={
          reduce
            ? undefined
            : { opacity: punchOpacity, scale: punchScale, y: punchY }
        }
        className="mt-8 font-serif italic text-[clamp(3rem,8vw,6rem)] leading-none tracking-[-0.015em] text-accent"
      >
        I run one.
      </motion.p>
    </div>
  );
}
