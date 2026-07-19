import { Reveal } from "../motion";
import { Dot, Link, Rule, SectionHeading } from "../ui";

export function Epilogue() {
  return (
    <section
      id="contact"
      data-chapter="Contact"
      className="flex min-h-svh items-center"
    >
      <div className="mx-auto w-full max-w-[660px] px-6 py-[12svh] text-[17px] leading-[1.7] text-ink">
        <Reveal amount={0.2}>
          <Rule />
          <div className="mt-16">
            <SectionHeading>Elsewhere</SectionHeading>
            <p className="mb-10">
              Writing and speaking about product engineering in the AI era to
              50K+ developers and product leaders. Co-host of a
              Spanish-language tech podcast for Latin American developers.
              Speaker at international conferences. Built a 10-chapter
              developer course on headless CMS architecture with Next.js.
            </p>
            <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-muted">
              20 years building.
            </p>
          </div>
        </Reveal>

        <Reveal amount={0.2} delay={0.1}>
          <div className="mt-24">
            <p className="mb-10 text-ink-strong">
              Operationalizing AI in your product org. Bridging strategy and
              engineering execution. If that&apos;s your problem, I&apos;m
              interested.
            </p>
            <a
              href="https://linkedin.com/in/fmontes"
              className="group inline-flex items-baseline gap-3 font-serif italic text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-accent"
            >
              <span className="underline decoration-rule decoration-2 underline-offset-8 transition-colors group-hover:decoration-accent">
                Message me on LinkedIn
              </span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                &rarr;
              </span>
            </a>
            <nav className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px]">
              <Link href="https://x.com/fmontes">Twitter / X</Link>
              <Dot />
              <Link href="https://github.com/fmontes">GitHub</Link>
            </nav>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
