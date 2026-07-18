"use client";

import { ChapterLabel } from "./shared";
import { StaggeredWords } from "./reveal";

const beliefs: { index: string; segments: { t: string; accent?: boolean }[] }[] =
  [
    {
      index: "01",
      segments: [
        { t: "AI will collapse the distance between product strategy and execution." },
      ],
    },
    {
      index: "02",
      segments: [
        { t: "The future product leader builds systems, not processes." },
      ],
    },
    {
      index: "03",
      segments: [
        {
          t: "Most people talking about AI-native product orgs are advising from the outside. ",
        },
        { t: "I run one.", accent: true },
      ],
    },
  ];

export function Beliefs() {
  return (
    <section data-chapter="Beliefs" className="relative px-6 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="pt-[14svh]">
          <ChapterLabel index="02">What I believe</ChapterLabel>
        </div>

        {beliefs.map((belief) => (
          <div
            key={belief.index}
            className="flex min-h-[85svh] flex-col justify-center py-[10svh]"
          >
            <span className="mb-8 font-mono text-[11px] tracking-[0.3em] text-muted">
              {belief.index}
            </span>
            <StaggeredWords
              segments={belief.segments}
              className="max-w-5xl font-serif text-[clamp(2rem,4.8vw,4.4rem)] leading-[1.14] tracking-[-0.015em] text-ink-strong"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
