"use client";

import { MotionConfig } from "motion/react";
import { ProgressRail } from "./ProgressRail";

export function StoryShell({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ProgressRail />
      {children}
    </MotionConfig>
  );
}
