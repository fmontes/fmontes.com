import ScrollStory, { type StoryProject } from "./scroll-story";
import styles from "./page.module.css";

const projects: StoryProject[] = [
  {
    title: "A product intelligence system",
    situation:
      "Seven teams used six different tools to answer basic product questions. Now they ask an AI chatbot.",
    detail:
      "I built a knowledge vault, a live dashboard pulling from GitHub and Asana, and an MCP server that lets any AI client query strategy, roadmap, and customer data. Sales gets messaging. Leadership gets targets. Engineering gets context. One system, company-wide.",
  },
  {
    title: "Cross-team escalation",
    situation:
      "Support, customer success, and engineering had no shared view of progress.",
    detail:
      "I designed a workflow that updates itself from Git signals. Customer context stays private, progress stays visible, and customer success no longer has to interrupt engineering for status updates. The entire system was agent-readable from day one.",
  },
  {
    title: "Enterprise content APIs for AI",
    situation:
      "The first generation turned 147 raw endpoints into focused tools and moved from prototype to an engineering handoff.",
    detail:
      "The second generation reduces that architecture to two tools: search and execute. It applies the code-execution patterns behind modern AI systems to a complex enterprise content platform.",
  },
  {
    title: "Native analytics for an enterprise CMS",
    situation:
      "Page views, engagement, conversions, and attribution now live inside the CMS instead of beside it.",
    detail:
      "I built the product for an enterprise CMS competing with Adobe, Sitecore, and Contentful. It is now in internal rollout, with general availability targeted for Q2 2026.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.cover} aria-labelledby="hero-title">
        <header className={styles.header}>
          <div className={styles.identity}>
            <p className={styles.name}>Freddy Montes</p>
            <p className={styles.role}>VP of Product, dotCMS</p>
          </div>

          <nav className={styles.socials} aria-label="Social links">
            <SocialLink href="https://linkedin.com/in/fmontes">
              LinkedIn
            </SocialLink>
            <SocialLink href="https://x.com/fmontes">X</SocialLink>
            <SocialLink href="https://github.com/fmontes">GitHub</SocialLink>
          </nav>
        </header>

        <div className={styles.coverContent}>
          <h1 id="hero-title" className={styles.heroTitle}>
            I build the <em>AI systems</em>
            <br /> I lead teams to ship.
          </h1>

          <p className={styles.heroThesis}>
            Strategy without prototypes is speculation.
          </p>

          <div className={styles.introduction}>
            <p>
              VP of Product. Twenty years across engineering, design,
              architecture, and product.
            </p>
            <p>I don&apos;t set strategy and wait. I prototype the system first.</p>
            <p>
              Currently at <strong>dotCMS</strong>, used by organizations
              including Vodafone, Royal Bank of Canada, BlueCross BlueShield,
              Telus, White Castle, City Furniture, and Caliber.
            </p>
          </div>
        </div>

        <div className={styles.scrollPrompt} aria-hidden="true">
          <span>Scroll to close the gap</span>
          <span className={styles.scrollPromptLine} />
        </div>
      </section>

      <ScrollStory projects={projects} />

      <section className={styles.epilogue} aria-labelledby="epilogue-title">
        <div className={styles.epilogueInner}>
          <p className={styles.duration}>Twenty years building.</p>
          <h2 id="epilogue-title" className={styles.epilogueTitle}>
            The work extends beyond the product organization.
          </h2>
          <p className={styles.epilogueCopy}>
            I write and speak about product engineering in the AI era to more
            than 50,000 developers and product leaders. I co-host a
            Spanish-language technology podcast for Latin American developers,
            speak at international conferences, and built a ten-chapter course
            on headless CMS architecture with Next.js.
          </p>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.contactInner}>
          <h2 id="contact-title" className={styles.contactTitle}>
            Closing the distance between strategy and execution?
          </h2>
          <p className={styles.contactCopy}>
            I&apos;m interested in consulting, speaking, and senior product
            leadership conversations.
          </p>
          <a
            href="https://linkedin.com/in/fmontes"
            className={styles.primaryLink}
          >
            Start a conversation on LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <footer className={styles.footer}>
          <p>Freddy Montes</p>
          <nav aria-label="Footer links">
            <SocialLink href="https://x.com/fmontes">X</SocialLink>
            <SocialLink href="https://github.com/fmontes">GitHub</SocialLink>
          </nav>
        </footer>
      </section>
    </main>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={styles.textLink}>
      {children}
    </a>
  );
}
