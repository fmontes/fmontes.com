import { Prologue } from "@/components/story/prologue";
import { Beliefs } from "@/components/story/beliefs";
import { Builds } from "@/components/story/builds";
import { Cadence } from "@/components/story/cadence";
import { Climax } from "@/components/story/climax";
import { ProgressThread } from "@/components/story/progress-thread";
import { Reveal } from "@/components/story/reveal";
import { ChapterLabel, Dot, Link } from "@/components/story/shared";

export default function Home() {
  return (
    <main className="relative">
      <ProgressThread />

      {/* ── Prologue: the claim ─────────────────────────────────── */}
      <Prologue />

      {/* ── Act I: the short version ────────────────────────────── */}
      <section
        data-chapter="Intro"
        className="mx-auto w-full max-w-[660px] px-6 py-[16svh] text-[17px] leading-[1.7] text-ink"
      >
        <Reveal>
          <ChapterLabel index="01">The short version</ChapterLabel>
        </Reveal>
        <div className="space-y-5">
          <Reveal>
            <p>
              VP of Product. 20 years across engineering, design, architecture,
              and product.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-serif text-[24px] leading-[1.4] text-ink-strong sm:text-[28px]">
              I don&apos;t set strategy and wait. I prototype the system first.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Currently VP of Product at{" "}
              <strong className="font-medium text-ink-strong">dotCMS</strong>,
              used by organizations including Vodafone, Royal Bank of Canada,
              BlueCross BlueShield, Telus, White Castle, City Furniture, and
              Caliber.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Act II: what I believe ──────────────────────────────── */}
      <Beliefs />

      {/* ── Act III: proof, dealt like cards ────────────────────── */}
      <Builds />

      {/* ── Act IV: the method ──────────────────────────────────── */}
      <Cadence />

      {/* ── Climax: the point ───────────────────────────────────── */}
      <Climax />

      {/* ── Epilogue: elsewhere + say hello ─────────────────────── */}
      <section
        data-chapter="Elsewhere"
        className="mx-auto w-full max-w-[660px] px-6 pt-[14svh] text-[17px] leading-[1.7] text-ink"
      >
        <Reveal>
          <ChapterLabel index="05">Elsewhere</ChapterLabel>
          <p className="mb-10">
            Writing and speaking about product engineering in the AI era to
            50K+ developers and product leaders. Co-host of a Spanish-language
            tech podcast for Latin American developers. Speaker at
            international conferences. Built a 10-chapter developer course on
            headless CMS architecture with Next.js.
          </p>
          <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-muted">
            20 years building.
          </p>
        </Reveal>
      </section>

      <section
        data-chapter="Say hello"
        className="mx-auto w-full max-w-[660px] px-6 pt-[18svh] pb-40 text-[17px] leading-[1.7] text-ink"
      >
        <Reveal>
          <p className="mb-8 font-serif text-[26px] leading-[1.35] text-ink-strong sm:text-[30px]">
            Operationalizing AI in your product org. Bridging strategy and
            engineering execution. If that&apos;s your problem, I&apos;m
            interested.
          </p>
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px]">
            <Link href="https://linkedin.com/in/fmontes">LinkedIn</Link>
            <Dot />
            <Link href="https://x.com/fmontes">Twitter / X</Link>
            <Dot />
            <Link href="https://github.com/fmontes">GitHub</Link>
          </nav>
        </Reveal>
      </section>
    </main>
  );
}
