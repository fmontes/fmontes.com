"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { ChapterLabel } from "./shared";

const lines = [
  "I build AI systems for my own work first.",
  "Then I figure out what scales.",
  "Then I put it in front of teams.",
];

export function Cadence() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} data-chapter="Method" className="relative h-[340svh]">
      <div className="sticky top-0 flex h-svh flex-col justify-center px-6 sm:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <ChapterLabel index="04">How I work</ChapterLabel>
          <div className="mt-6 space-y-6 sm:space-y-10">
            {lines.map((line, i) => (
              <CadenceLine
                key={line}
                line={line}
                index={i}
                total={lines.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CadenceLine({
  line,
  index,
  total,
  progress,
}: {
  line: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  // Each line lights up during its third of the pinned scroll, then stays lit
  // (explicit hold at 1 through the end of the range).
  const start = index / total;
  const lit = start + 0.45 / total;
  const range = [start, lit, 1];
  const opacity = useTransform(progress, range, [0.14, 1, 1]);
  const x = useTransform(progress, range, [36, 0, 0]);
  const blur = useTransform(
    progress,
    range,
    ["blur(4px)", "blur(0px)", "blur(0px)"],
  );

  return (
    <div className="flex items-baseline gap-5 sm:gap-8">
      <motion.span
        style={{ opacity: reduce ? 0.5 : opacity }}
        className="font-mono text-[11px] tracking-[0.3em] text-accent"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>
      <motion.p
        style={
          reduce
            ? undefined
            : { opacity, x, filter: blur, willChange: "transform, opacity" }
        }
        className="font-serif text-[clamp(1.7rem,4.6vw,4.2rem)] leading-[1.15] tracking-[-0.015em] text-ink-strong"
      >
        {line}
      </motion.p>
    </div>
  );
}
