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
import { Reveal } from "./reveal";

type Build = {
  num: string;
  title: string;
  lead: string;
  body: string;
};

const builds: Build[] = [
  {
    num: "01",
    title: "A product intelligence system",
    lead: "Seven teams used six different tools to answer basic product questions. Now they ask an AI chatbot.",
    body: "I built a knowledge vault, a live dashboard pulling from GitHub and Asana, and an MCP server that lets any AI client query strategy, roadmap, and customer data. Sales gets messaging. Leadership gets targets. Engineering gets context. One system, company-wide.",
  },
  {
    num: "02",
    title: "Cross-team escalation process",
    lead: "Support, customer success, engineering. Three teams, zero shared visibility.",
    body: "I designed a workflow where progress updates itself from Git signals. No status meetings. No spreadsheets. Customer context stays private. Built a dashboard so customer success never has to ping an engineer for updates. Designed the whole thing to be agent-readable from day one.",
  },
  {
    num: "03",
    title: "MCP server for enterprise content APIs",
    lead: "First generation: 147 raw endpoints redesigned into focused tools. Presented at Blockchain Jungle 2025. Handed off to engineering.",
    body: "Second generation in progress: two tools. Search and execute. Inspired by Cloudflare\u2019s Code Mode and Anthropic\u2019s code execution patterns. Simpler architecture, better results.",
  },
  {
    num: "04",
    title: "Native analytics for an enterprise CMS",
    lead: "Page views. Engagement. Conversions. Attribution.",
    body: "Built natively into an enterprise CMS competing with Adobe, Sitecore, and Contentful. Now in internal rollout, GA target Q2 2026.",
  },
];

export function Builds() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section data-chapter="Proof" className="relative px-4 sm:px-10">
      <div className="mx-auto w-full max-w-[920px] pt-[16svh] pb-[8svh]">
        <Reveal>
          <ChapterLabel index="03">Recently built</ChapterLabel>
          <p className="-mt-2 mb-4 font-serif italic text-[18px] text-muted sm:text-[20px]">
            Systems designed and shipped inside a real product organization.
          </p>
        </Reveal>
      </div>

      <div ref={stackRef} className="relative">
        {builds.map((build, i) => (
          <BuildCard
            key={build.num}
            build={build}
            index={i}
            total={builds.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function BuildCard({
  build,
  index,
  total,
  progress,
}: {
  build: Build;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  // As the story advances past this card, it settles back: smaller + dimmer.
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const dim = useTransform(progress, [index / total, 1], [0, 0.55]);

  return (
    <div className="sticky top-0 flex h-svh items-center justify-center">
      <motion.article
        style={{
          scale: reduce ? 1 : scale,
          top: `${index * 1.75}rem`,
          transformOrigin: "center top",
        }}
        className="relative flex max-h-[82svh] w-full max-w-[920px] flex-col overflow-hidden rounded-md border border-rule bg-surface p-7 shadow-[0_18px_60px_-24px_rgba(15,15,14,0.35)] sm:p-12"
      >
        <div className="grid gap-x-10 gap-y-4 sm:grid-cols-[auto_1fr]">
          <span
            aria-hidden
            className="font-serif italic leading-none text-accent select-none text-[clamp(4rem,9vw,8rem)]"
          >
            {build.num}
          </span>
          <div>
            <h3 className="mb-5 font-serif text-[clamp(1.7rem,3.4vw,2.9rem)] leading-[1.12] tracking-[-0.01em] text-balance text-ink-strong">
              {build.title}
            </h3>
            <p className="mb-5 text-[15px] leading-[1.65] font-medium text-ink-strong sm:text-[17px]">
              {build.lead}
            </p>
            <p className="text-[14px] leading-[1.7] text-muted sm:text-[16px]">
              {build.body}
            </p>
          </div>
        </div>

        {/* dim veil as the next card covers this one */}
        <motion.div
          aria-hidden
          style={{ opacity: reduce ? 0 : dim }}
          className="pointer-events-none absolute inset-0 bg-background"
        />
      </motion.article>
    </div>
  );
}
