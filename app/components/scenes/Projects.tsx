"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, useReducedMotionSafe } from "../motion";
import { SectionHeading } from "../ui";

export function Projects() {
  return (
    <>
      <section
        id="built"
        data-chapter="Work"
        className="flex min-h-[80svh] items-center"
      >
        <div className="mx-auto w-full max-w-[900px] px-6">
          <Reveal>
            <SectionHeading>Recently built</SectionHeading>
            <p className="font-serif italic text-[clamp(1.4rem,2.8vw,2rem)] leading-[1.35] text-muted text-balance">
              Systems designed and shipped inside a real product organization.
            </p>
          </Reveal>
        </div>
      </section>

      <ProjectScene num="01" title="A product intelligence system">
        <p>
          Seven teams used six different tools to answer basic product
          questions. Now they ask an AI chatbot.
        </p>
        <p>
          I built a knowledge vault, a live dashboard pulling from GitHub and
          Asana, and an MCP server that lets any AI client query strategy,
          roadmap, and customer data. Sales gets messaging. Leadership gets
          targets. Engineering gets context. One system, company-wide.
        </p>
      </ProjectScene>

      <ProjectScene num="02" title="Cross-team escalation process" flip>
        <p>
          Support, customer success, engineering. Three teams, zero shared
          visibility.
        </p>
        <p>
          I designed a workflow where progress updates itself from Git signals.
          No status meetings. No spreadsheets. Customer context stays private.
          Built a dashboard so customer success never has to ping an engineer
          for updates. Designed the whole thing to be agent-readable from day
          one.
        </p>
      </ProjectScene>

      <ProjectScene num="03" title="MCP server for enterprise content APIs">
        <p>
          First generation: 147 raw endpoints redesigned into focused tools.
          Presented at Blockchain Jungle 2025. Handed off to engineering.
        </p>
        <p>
          Second generation in progress: two tools. Search and execute.
          Inspired by Cloudflare&apos;s Code Mode and Anthropic&apos;s code
          execution patterns. Simpler architecture, better results.
        </p>
      </ProjectScene>

      <ProjectScene num="04" title="Native analytics for an enterprise CMS" flip>
        <p>Page views. Engagement. Conversions. Attribution.</p>
        <p>
          Built natively into an enterprise CMS competing with Adobe, Sitecore,
          and Contentful. Now in internal rollout, GA target Q2 2026.
        </p>
      </ProjectScene>
    </>
  );
}

function ProjectScene({
  num,
  title,
  flip = false,
  children,
}: {
  num: string;
  title: string;
  flip?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative">
      <div
        aria-hidden
        className={`pointer-events-none flex items-center justify-center motion-safe:sticky motion-safe:top-0 motion-safe:h-svh motion-reduce:hidden ${
          flip ? "lg:justify-start lg:pl-[4vw]" : "lg:justify-end lg:pr-[4vw]"
        }`}
      >
        <motion.span
          data-reveal
          style={reduce ? undefined : { scale, opacity }}
          className="font-serif italic leading-none text-[38vw] lg:text-[30vw] text-ink-strong/[0.05] select-none"
        >
          {num}
        </motion.span>
      </div>

      <div className="motion-safe:-mt-[100svh]">
        <div
          className={`mx-auto flex min-h-svh w-full max-w-[1100px] flex-col justify-center px-6 py-[14svh] ${
            flip ? "lg:items-end" : ""
          }`}
        >
          <article className="max-w-[620px]">
            <Reveal amount={0.6}>
              <p className="mb-4 font-mono text-[11px] tracking-[0.22em] text-accent">
                {num}
              </p>
              <h3 className="mb-7 font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.15] tracking-[-0.01em] text-ink-strong text-balance">
                {title}
              </h3>
            </Reveal>
            <Reveal delay={0.12} amount={0.4}>
              <div className="space-y-5 text-[17px] sm:text-[18px] leading-[1.7] text-ink">
                {children}
              </div>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  );
}
