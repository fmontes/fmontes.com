const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <main id="top" className="text-[17px] leading-[1.7] text-ink">
      {/* Margin thread: fills as the journey progresses */}
      <div className="scroll-thread" aria-hidden>
        <div className="scroll-thread-fill" data-thread-fill />
      </div>

      {/* ── Cover: full-viewport thesis ──────────────────────── */}
      <header className="relative flex min-h-[100svh] flex-col px-6 pt-8 pb-8 sm:px-12 sm:pt-10">
        <div className="flex items-baseline justify-between gap-6">
          <p
            className="hero-fade font-serif text-[26px] sm:text-[30px] leading-none tracking-[-0.01em] text-ink-strong"
            style={d(0)}
          >
            Freddy Montes
          </p>
          <nav
            className="hero-fade flex items-center gap-x-3 sm:gap-x-4 text-[13px] sm:text-[14px]"
            style={d(90)}
          >
            <Link href="https://linkedin.com/in/fmontes">LinkedIn</Link>
            <Dot />
            <Link href="https://x.com/fmontes">Twitter</Link>
            <Dot />
            <Link href="https://github.com/fmontes">GitHub</Link>
          </nav>
        </div>

        <div
          className="flex flex-1 flex-col justify-center"
          data-parallax="0.12"
        >
          <p
            className="hero-fade font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-muted mb-6 sm:mb-10"
            style={d(180)}
            data-scramble
          >
            VP of Product, dotCMS
          </p>

          <h1 className="font-serif text-[clamp(44px,8.5vw,110px)] leading-[1.02] tracking-[-0.015em] text-ink-strong mb-6 sm:mb-8 text-balance">
            <W ms={380}>I</W> <W ms={435}>build</W> <W ms={490}>the</W>{" "}
            <W ms={545}>
              <em className="text-accent u-line hero-line" style={d(1000)}>
                AI&nbsp;systems
              </em>
            </W>{" "}
            <W ms={600}>I</W> <W ms={655}>lead</W> <W ms={710}>teams</W>{" "}
            <W ms={765}>to</W> <W ms={820}>ship.</W>
          </h1>

          <p
            className="hero-fade font-serif italic text-[clamp(19px,2.2vw,26px)] leading-[1.35] text-muted"
            style={d(1020)}
          >
            Strategy without prototypes is speculation.
          </p>
        </div>

        <div
          className="scroll-cue flex flex-col items-center gap-3"
          aria-hidden
        >
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted">
            Scroll
          </span>
          <span className="cue-line" />
        </div>
      </header>

      {/* ── Intro: the credibility beat ──────────────────────── */}
      <div className="mx-auto w-full max-w-[660px] px-6 pt-10">
        <div className="space-y-5">
          <p data-reveal>
            VP of Product. 20 years across engineering, design, architecture,
            and product.
          </p>
          <p data-reveal style={d(90)}>
            I don&apos;t set strategy and wait. I prototype the system first.
          </p>
          <p data-reveal style={d(180)}>
            Currently VP of Product at{" "}
            <strong className="font-medium text-ink-strong">dotCMS</strong>,
            used by organizations including Vodafone, Royal Bank of Canada,
            BlueCross BlueShield, Telus, White Castle, City Furniture, and
            Caliber.
          </p>
        </div>
      </div>

      {/* ── Beliefs: kinetic type, ignite at the reading zone ─── */}
      <section className="mt-32 mb-36 sm:mt-44 px-6 sm:px-12">
        <SectionHeading>What I believe</SectionHeading>
        <div className="font-serif text-[clamp(26px,4.2vw,48px)] leading-[1.15] tracking-[-0.015em] text-ink-strong space-y-12 sm:space-y-16">
          <p data-focus data-drift="1" className="max-w-[85vw]">
            AI will collapse the distance between product strategy and
            execution.
          </p>
          <p data-focus data-drift="-1" className="max-w-[85vw] ml-[8vw]">
            The future product leader builds systems, not processes.
          </p>
          <p data-focus data-drift="1" className="max-w-[85vw] ml-[3vw]">
            Most people talking about AI-native product orgs are advising from
            the outside.{" "}
            <em className="text-accent u-line reveal-line">I run one.</em>
          </p>
        </div>
      </section>

      {/* ── Recently built: horizontal gallery ───────────────── */}
      <section className="hscroll" data-hscroll>
        <div className="hscroll-sticky">
          <div className="hscroll-head flex items-center gap-4 px-6 sm:px-12 mb-10 sm:mb-14">
            <span className="h-px w-8 bg-accent" aria-hidden />
            <h2 className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
              Recently built
            </h2>
            <span
              className="hscroll-index ml-auto font-mono text-[11px] tracking-[0.22em] uppercase text-muted tabular-nums"
              data-hscroll-index
            >
              01 / 04
            </span>
          </div>

          <div className="hscroll-track" data-hscroll-track>
            <Panel num="01" title="A product intelligence system">
              <p className="mb-5">
                Seven teams used six different tools to answer basic product
                questions. Now they ask an AI chatbot.
              </p>
              <p>
                I built a knowledge vault, a live dashboard pulling from GitHub
                and Asana, and an MCP server that lets any AI client query
                strategy, roadmap, and customer data. Sales gets messaging.
                Leadership gets targets. Engineering gets context. One system,
                company-wide.
              </p>
            </Panel>

            <Panel num="02" title="Cross-team escalation process">
              <p className="mb-5">
                Support, customer success, engineering. Three teams, zero
                shared visibility.
              </p>
              <p>
                I designed a workflow where progress updates itself from Git
                signals. No status meetings. No spreadsheets. Customer context
                stays private. Built a dashboard so customer success never has
                to ping an engineer for updates. Designed the whole thing to
                be agent-readable from day one.
              </p>
            </Panel>

            <Panel num="03" title="MCP server for enterprise content APIs">
              <p className="mb-5">
                First generation: 147 raw endpoints redesigned into focused
                tools. Presented at Blockchain Jungle 2025. Handed off to
                engineering.
              </p>
              <p>
                Second generation in progress: two tools. Search and execute.
                Inspired by Cloudflare&apos;s Code Mode and Anthropic&apos;s
                code execution patterns. Simpler architecture, better results.
              </p>
            </Panel>

            <Panel num="04" title="Native analytics for an enterprise CMS">
              <p className="mb-5">
                Page views. Engagement. Conversions. Attribution.
              </p>
              <p>
                Built natively into an enterprise CMS competing with Adobe,
                Sitecore, and Contentful. Now in internal rollout, GA target
                Q2 2026.
              </p>
            </Panel>
          </div>

          <div className="hscroll-progress" aria-hidden>
            <span data-hscroll-bar />
          </div>
        </div>
      </section>

      {/* ── The method: pinned walkthrough ───────────────────── */}
      <section className="method my-28" data-method aria-label="The method">
        <div className="method-sticky">
          <div className="method-panel">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-8 bg-accent" aria-hidden />
              <h2 className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
                The method
              </h2>
              <span
                className="method-index ml-auto font-mono text-[11px] tracking-[0.22em] uppercase text-muted tabular-nums"
                data-method-index
              >
                01 / 03
              </span>
            </div>

            <div className="method-lines">
              <p data-method-line>I build AI systems for my own work first.</p>
              <p data-method-line>Then I figure out what scales.</p>
              <p data-method-line>Then I put it in front of teams.</p>
            </div>

            <div className="method-dashes mt-10 flex gap-2" aria-hidden>
              <span className="method-dash" data-method-dash />
              <span className="method-dash" data-method-dash />
              <span className="method-dash" data-method-dash />
            </div>
          </div>
        </div>
      </section>

      {/* ── Kicker: the held beat, centered ──────────────────── */}
      <section className="kicker" data-kicker>
        <div className="kicker-sticky">
          <p
            className="mx-auto max-w-[24ch] px-6 text-center font-serif text-[clamp(32px,5vw,60px)] leading-[1.15] tracking-[-0.015em] text-ink-strong my-28 text-balance"
            data-reveal="settle"
          >
            I don&apos;t theorize about AI-native product orgs.
            <br />
            <em className="text-accent u-line kicker-line" data-kicker-line>
              I run one.
            </em>
          </p>
        </div>
      </section>

      {/* ── Elsewhere: the readout ───────────────────────────── */}
      <section className="mt-16 px-6 sm:px-12">
        <SectionHeading>Elsewhere</SectionHeading>

        <p
          className="font-serif leading-[0.85] tracking-[-0.02em] text-ink-strong text-[clamp(96px,20vw,220px)] select-none"
          data-reveal="settle"
        >
          <span data-countup="50" data-suffix="K+">
            50K+
          </span>
        </p>
        <p className="mt-6 max-w-[46ch] text-muted" data-reveal>
          developers and product leaders reached through writing and speaking
          on product engineering in the AI era.
        </p>

        <div className="mt-16">
          <ElseRow label="Podcast">
            Co-host of a Spanish-language tech podcast for Latin American
            developers.
          </ElseRow>
          <ElseRow label="Conferences">
            Speaker at international conferences.
          </ElseRow>
          <ElseRow label="Course">
            A 10-chapter developer course on headless CMS architecture with
            Next.js.
          </ElseRow>
        </div>

        <p
          className="mt-14 font-mono text-[12px] tracking-[0.18em] uppercase text-muted"
          data-reveal
          data-scramble
        >
          20 years building.
        </p>
      </section>

      {/* ── Contact: the conversion moment ───────────────────── */}
      <section className="mt-36 px-6 sm:px-12">
        <SectionHeading>Start a conversation</SectionHeading>

        <p
          className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-10"
          data-reveal
        >
          <span className="pulse-dot" aria-hidden />
          Open to conversations
        </p>

        <p
          className="font-serif text-[clamp(26px,3.8vw,40px)] leading-[1.3] tracking-[-0.01em] text-ink-strong max-w-[26ch] mb-14 text-balance"
          data-reveal="settle"
        >
          Operationalizing AI in your product org. Bridging strategy and
          engineering execution. If that&apos;s your problem,{" "}
          <em className="text-accent u-line reveal-line">
            I&apos;m interested.
          </em>
        </p>

        <nav
          className="flex flex-wrap items-center gap-x-8 gap-y-4"
          data-reveal
        >
          <Link href="https://linkedin.com/in/fmontes" primary>
            Message me on LinkedIn
          </Link>
          <span className="flex items-center gap-x-3 text-[15px]">
            <Link href="https://x.com/fmontes">Twitter / X</Link>
            <Dot />
            <Link href="https://github.com/fmontes">GitHub</Link>
          </span>
        </nav>
      </section>

      {/* ── Colophon ─────────────────────────────────────────── */}
      <footer className="mt-32 px-6 pb-10 sm:px-12">
        <div className="h-px bg-rule mb-8" data-reveal="draw" aria-hidden />
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
          <p data-reveal>© 2026 Freddy Montes</p>
          <p data-reveal style={d(90)} className="normal-case tracking-normal">
            Instrument Serif · Inter · JetBrains Mono
          </p>
          <p data-reveal style={d(180)}>
            <Link href="#top" internal>
              Back to top ↑
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}

function W({ ms, children }: { ms: number; children: React.ReactNode }) {
  return (
    <span className="hero-word" style={d(ms)}>
      <span>{children}</span>
    </span>
  );
}

function Dot() {
  return (
    <span className="text-muted/60" aria-hidden>
      ·
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10" data-reveal>
      <span className="h-px w-8 bg-accent" />
      <h2 className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
        {children}
      </h2>
    </div>
  );
}

function ElseRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="else-row grid gap-x-8 gap-y-2 border-t border-rule py-7 sm:grid-cols-[150px_1fr]"
      data-reveal
    >
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted pt-2">
        {label}
      </span>
      <p className="font-serif text-[20px] sm:text-[22px] leading-[1.4] text-ink-strong max-w-[52ch]">
        {children}
      </p>
    </div>
  );
}

function Link({
  href,
  children,
  primary = false,
  internal = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  internal?: boolean;
}) {
  return (
    <a
      href={href}
      data-magnetic
      className={`link ${primary ? "font-medium text-[clamp(20px,2.4vw,28px)]" : ""}`}
      {...(internal ? {} : { target: "_blank", rel: "noreferrer" })}
    >
      {children}
      {primary ? (
        <span className="link-arrow" aria-hidden>
          &nbsp;→
        </span>
      ) : null}
    </a>
  );
}

function Panel({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="hscroll-panel">
      <span
        className="block font-serif italic leading-none text-accent select-none text-[clamp(72px,13vw,150px)]"
        aria-hidden
      >
        {num}
      </span>
      <h3 className="font-serif text-[clamp(26px,3.4vw,42px)] leading-[1.15] tracking-[-0.015em] text-ink-strong mt-6 mb-6 max-w-[18ch] text-balance">
        {title}
      </h3>
      <div className="max-w-[54ch]">{children}</div>
    </article>
  );
}
