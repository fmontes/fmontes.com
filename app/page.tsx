export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[660px] px-6 pt-20 pb-32 sm:pt-28 text-[17px] leading-[1.7] text-ink">
      {/* ── Eyebrow ────────────────────────────────────────────── */}
      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-10">
        Freddy Montes — VP of Product, dotCMS
      </p>

      {/* ── Hero thesis ────────────────────────────────────────── */}
      <h1 className="font-serif text-[44px] sm:text-[60px] leading-[1.05] tracking-[-0.015em] text-ink-strong mb-8">
        I build the <em className="text-accent">AI systems</em> I lead teams to
        ship.
      </h1>

      <p className="font-serif italic text-[22px] sm:text-[26px] leading-[1.35] text-muted mb-14">
        Strategy without prototypes is speculation.
      </p>

      {/* ── Intro ──────────────────────────────────────────────── */}
      <div className="space-y-5 mb-6">
        <p>
          VP of Product. 20 years across engineering, design, architecture, and
          product.
        </p>
        <p>I don&apos;t set strategy and wait. I prototype the system first.</p>
        <p>
          Currently VP of Product at{" "}
          <strong className="font-medium text-ink-strong">dotCMS</strong>, used
          by organizations including Vodafone, Royal Bank of Canada, and
          BlueCross BlueShield.
        </p>
      </div>

      {/* ── Beliefs ────────────────────────────────────────────── */}
      <section className="mt-24 mb-24">
        <SectionHeading>What I believe</SectionHeading>
        <div className="space-y-5 font-serif text-[21px] sm:text-[23px] leading-[1.45] text-ink-strong">
          <p>
            AI will collapse the distance between product strategy and
            execution.
          </p>
          <p>The future product leader builds systems, not processes.</p>
          <p>
            Most people talking about AI-native product orgs are advising from
            the outside. <em className="text-accent">I run one.</em>
          </p>
        </div>
      </section>

      <Rule />

      {/* ── Recently built ────────────────────────────────────── */}
      <section className="mt-16">
        <SectionHeading>Recently built</SectionHeading>
        <p className="font-serif italic text-muted mb-14 text-[18px]">
          Systems designed and shipped inside a real product organization.
        </p>

        <div className="space-y-16">
          <Entry num="01" title="A product intelligence system">
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
          </Entry>

          <Entry num="02" title="Cross-team escalation process">
            <p className="mb-5">
              Support, customer success, engineering. Three teams, zero shared
              visibility.
            </p>
            <p>
              I designed a workflow where progress updates itself from Git
              signals. No status meetings. No spreadsheets. Customer context
              stays private. Built a dashboard so customer success never has to
              ping an engineer for updates. Designed the whole thing to be
              agent-readable from day one.
            </p>
          </Entry>

          <Entry num="03" title="MCP server for enterprise content APIs">
            <p className="mb-5">
              First generation: 147 raw endpoints redesigned into focused tools.
              Presented at Blockchain Jungle 2025. Handed off to engineering.
            </p>
            <p>
              Second generation in progress: two tools. Search and execute.
              Inspired by Cloudflare&apos;s Code Mode and Anthropic&apos;s code
              execution patterns. Simpler architecture, better results.
            </p>
          </Entry>

          <Entry num="04" title="Native analytics for an enterprise CMS">
            <p className="mb-5">
              Page views. Engagement. Conversions. Attribution.
            </p>
            <p>
              Built natively into an enterprise CMS competing with Adobe,
              Sitecore, and Contentful. Now in internal rollout, GA target Q2
              2026.
            </p>
          </Entry>
        </div>
      </section>

      {/* ── Manifesto cadence ─────────────────────────────────── */}
      <section className="mt-28 mb-28">
        <div className="space-y-2 text-[18px] text-muted">
          <p>I build AI systems for my own work first.</p>
          <p>Then I figure out what scales.</p>
          <p>Then I put it in front of teams.</p>
        </div>
      </section>

      {/* ── Kicker ────────────────────────────────────────────── */}
      <p className="font-serif text-[30px] sm:text-[36px] leading-[1.2] tracking-[-0.01em] text-ink-strong mb-28">
        I don&apos;t theorize about AI-native product orgs.
        <br />
        <em className="text-accent">I run one.</em>
      </p>

      <Rule />

      {/* ── Elsewhere ─────────────────────────────────────────── */}
      <section className="mt-16">
        <SectionHeading>Elsewhere</SectionHeading>
        <p className="mb-10">
          Writing and speaking about product engineering in the AI era to 50K+
          developers and product leaders. Co-host of a Spanish-language tech
          podcast for Latin American developers. Speaker at international
          conferences. Built a 10-chapter developer course on headless CMS
          architecture with Next.js.
        </p>
        <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-muted">
          20 years building.
        </p>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section className="mt-28">
        <p className="mb-8 text-ink-strong">
          Operationalizing AI in your product org. Bridging strategy and
          engineering execution. If that&apos;s your problem, I&apos;m
          interested.
        </p>
        <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px]">
          <Link href="https://linkedin.com/in/fmontes">LinkedIn</Link>
          <Dot />
          <Link href="https://twitter.com/faborules">Twitter / X</Link>
          <Dot />
          <Link href="mailto:hello@fmontes.com">Email</Link>
        </nav>
      </section>
    </main>
  );
}

function Rule() {
  return <hr className="border-0 h-px bg-rule" />;
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
    <div className="flex items-center gap-4 mb-8">
      <span className="h-px w-8 bg-accent" />
      <h2 className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
        {children}
      </h2>
    </div>
  );
}

function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-accent underline decoration-rule underline-offset-[5px] hover:decoration-accent transition-colors"
    >
      {children}
    </a>
  );
}

function Entry({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-8">
      <span className="font-serif italic text-[40px] sm:text-[48px] leading-none text-accent select-none pt-1">
        {num}
      </span>
      <div>
        <h3 className="font-serif text-[26px] sm:text-[30px] leading-[1.2] tracking-[-0.01em] text-ink-strong mb-5">
          {title}
        </h3>
        <div className="text-ink">{children}</div>
      </div>
    </article>
  );
}
