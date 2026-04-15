export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[640px] px-6 py-24 sm:py-32 text-[17px] leading-[1.7] text-foreground">
      <h1 className="font-serif text-[56px] sm:text-[72px] leading-[1.05] tracking-[-0.01em] mb-8">
        Freddy Montes
      </h1>

      <p className="font-serif text-[28px] sm:text-[34px] leading-[1.2] tracking-[-0.01em] mb-6">
        I build the <em>AI systems</em> I lead teams to ship.
      </p>

      <p className="font-serif italic text-[20px] sm:text-[22px] leading-[1.4] text-muted mb-12">
        Strategy without prototypes is speculation.
      </p>

      <p className="mb-5">
        VP of Product. 20 years across engineering, design, architecture, and
        product.
      </p>

      <p className="mb-5">
        I don&apos;t set strategy and wait. I prototype the system first.
      </p>

      <p className="mb-10">
        Currently VP of Product at <strong className="font-medium">dotCMS</strong>,
        used by organizations including Vodafone, Royal Bank of Canada, and
        BlueCross BlueShield.
      </p>

      <Rule />

      <SectionHeading>What I believe</SectionHeading>

      <p className="mb-5">
        AI will collapse the distance between product strategy and execution.
      </p>

      <p className="mb-5">
        The future product leader builds systems, not processes.
      </p>

      <p className="mb-10">
        Most people talking about AI-native product orgs are advising from the
        outside. <em>I run one.</em>
      </p>

      <Rule />

      <SectionHeading>Recently built</SectionHeading>

      <p className="font-serif italic text-muted mb-10">
        Systems designed and shipped inside a real product organization.
      </p>

      <Entry
        num="01"
        title="A product intelligence system"
      >
        <p className="mb-5">
          Seven teams used six different tools to answer basic product
          questions. Now they ask an AI chatbot.
        </p>
        <p>
          I built a knowledge vault, a live dashboard pulling from GitHub and
          Asana, and an MCP server that lets any AI client query strategy,
          roadmap, and customer data. Sales gets messaging. Leadership gets
          targets. Engineering gets context. One system, company-wide.
        </p>
      </Entry>

      <Entry num="02" title="Cross-team escalation process">
        <p className="mb-5">
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
      </Entry>

      <Entry num="03" title="MCP server for enterprise content APIs">
        <p className="mb-5">
          First generation: 147 raw endpoints redesigned into focused tools.
          Presented at Blockchain Jungle 2025. Handed off to engineering.
        </p>
        <p>
          Second generation in progress: two tools. Search and execute. Inspired
          by Cloudflare&apos;s Code Mode and Anthropic&apos;s code execution
          patterns. Simpler architecture, better results.
        </p>
      </Entry>

      <Entry num="04" title="Native analytics for an enterprise CMS" last>
        <p className="mb-5">
          Page views. Engagement. Conversions. Attribution.
        </p>
        <p>
          Built natively into an enterprise CMS competing with Adobe, Sitecore,
          and Contentful. Now in internal rollout, GA target Q2 2026.
        </p>
      </Entry>

      <Rule />

      <p className="mb-2">I build AI systems for my own work first.</p>
      <p className="mb-2">Then I figure out what scales.</p>
      <p className="mb-8">Then I put it in front of teams.</p>

      <p className="font-serif italic text-[20px] sm:text-[22px] leading-[1.4] mb-10">
        I don&apos;t theorize about AI-native product orgs. I run one.
      </p>

      <Rule />

      <SectionHeading>Elsewhere</SectionHeading>

      <p className="mb-10">
        Writing and speaking about product engineering in the AI era to 50K+
        developers and product leaders. Co-host of a Spanish-language tech
        podcast for Latin American developers. Speaker at international
        conferences. Built a 10-chapter developer course on headless CMS
        architecture with Next.js.
      </p>

      <p className="font-mono text-[13px] tracking-[0.02em] uppercase text-muted mb-10">
        20 years building.
      </p>

      <Rule />

      <p className="mb-8">
        Operationalizing AI in your product org. Bridging strategy and
        engineering execution. If that&apos;s your problem, I&apos;m interested.
      </p>

      <nav className="flex flex-wrap gap-x-2 gap-y-2 text-[15px]">
        <Link href="https://linkedin.com/in/fmontes">LinkedIn</Link>
        <span className="text-muted" aria-hidden>
          ·
        </span>
        <Link href="https://twitter.com/faborules">Twitter / X</Link>
        <span className="text-muted" aria-hidden>
          ·
        </span>
        <Link href="mailto:hello@fmontes.com">Email</Link>
      </nav>
    </main>
  );
}

function Rule() {
  return <hr className="my-14 border-0 h-px bg-rule" />;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[12px] tracking-[0.14em] uppercase text-muted mb-8">
      {children}
    </h2>
  );
}

function Entry({
  num,
  title,
  children,
  last,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <article className={last ? "" : "mb-12"}>
      <h3 className="font-serif text-[26px] sm:text-[30px] leading-[1.2] tracking-[-0.01em] mb-5">
        <span className="font-mono text-[14px] tracking-[0.04em] text-accent align-middle mr-3">
          {num}
        </span>
        <span className="align-middle text-muted mr-3">—</span>
        <span className="align-middle">{title}</span>
      </h3>
      <div>{children}</div>
    </article>
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
