"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function StoryMotion() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercent(Math.round(latest * 100));
  });

  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    root.classList.add("motion-ready");

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { rootMargin: "-12% 0px -18%", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [prefersReducedMotion]);

  return (
    <aside className="story-progress" aria-label={`Page progress: ${percent}%`}>
      <span className="progress-track" />
      <motion.span
        className="progress-fill"
        style={{ scaleY: prefersReducedMotion ? 1 : progress }}
      />
      <span className="progress-value" aria-hidden="true">
        {String(percent).padStart(2, "0")}
      </span>
    </aside>
  );
}
