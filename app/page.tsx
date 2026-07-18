import { ArrowDown, ArrowUpRight } from "lucide-react";
import StoryMotion from "./story-motion";

const LINKEDIN_URL = "https://linkedin.com/in/fmontes";

const projects = [
  {
    id: "intelligence",
    number: "01",
    title: "Product intelligence",
    premise: "Seven teams. Six tools. No shared answer.",
    body: "I built a knowledge vault, a live dashboard fed by GitHub and Asana, and an MCP server that lets any AI client query strategy, roadmap, and customer context.",
    outcome:
      "Sales gets messaging. Leadership gets targets. Engineering gets context. One system, company-wide.",
  },
  {
    id: "escalation",
    number: "02",
    title: "Cross-team escalation",
    premise: "Support, customer success, engineering. Zero shared visibility.",
    body: "I designed a workflow where progress updates itself from Git signals, customer context stays private, and every team sees the same operational truth.",
    outcome:
      "Customer success gets answers without chasing engineering. The workflow was agent-readable from day one.",
  },
  {
    id: "api",
    number: "03",
    title: "Enterprise content APIs",
    premise: "147 raw endpoints were technically complete and practically unusable for agents.",
    body: "I redesigned them into focused MCP tools, presented the first generation at Blockchain Jungle, and handed the system to engineering.",
    outcome:
      "The next generation reduces the model to two actions: search and execute. Less surface area, better reasoning.",
  },
  {
    id: "analytics",
    number: "04",
    title: "Native analytics",
    premise: "Content teams should not need another platform to understand performance.",
    body: "I built analytics natively into an enterprise CMS competing with Adobe, Sitecore, and Contentful.",
    outcome:
      "Page views, engagement, conversions, and attribution become part of the product workflow, not a separate reporting exercise.",
  },
] as const;

export default function Home() {
  return (
    <>
      <StoryMotion />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Freddy Montes, back to top">
          Freddy Montes
        </a>
        <p className="header-role">VP Product · AI systems</p>
        <a
          className="header-link"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="hero-role">Product executive. Working builder.</p>
              <h1 id="hero-title">
                <span className="hero-line">I build the</span>
                <span className="hero-line signal-text">AI systems</span>
                <span className="hero-line">I lead teams</span>
                <span className="hero-line">to ship.</span>
              </h1>
              <p className="hero-deck">
                Strategy without prototypes is speculation. I close the distance
                between product direction and working software.
              </p>
            </div>

            <HeroSystem />

            <div className="hero-context">
              <p>
                VP of Product at <strong>dotCMS</strong>. Twenty years across
                engineering, design, architecture, and product.
              </p>
            </div>

            <div className="hero-scroll" aria-hidden="true">
              <ArrowDown size={18} strokeWidth={1.75} />
            </div>
          </div>
        </section>

        <section className="belief dark-section" data-reveal>
          <div className="page-shell belief-grid">
            <p className="section-index reveal-copy">The premise</p>
            <h2 className="belief-statement reveal-copy">
              AI collapses the distance between product strategy and execution.
            </h2>
            <div className="belief-note reveal-copy">
              <p>
                The future product leader builds systems, not processes. Most
                people discussing AI-native product organizations advise from
                the outside.
              </p>
              <strong>I run one.</strong>
            </div>
          </div>
        </section>

        <section className="systems-intro" data-reveal>
          <div className="page-shell systems-intro-grid">
            <p className="section-index reveal-copy">The evidence</p>
            <h2 className="systems-heading reveal-copy">
              Four systems.
              <br />
              <span>One operating model.</span>
            </h2>
            <p className="systems-intro-copy reveal-copy">
              Built inside a real product organization, where strategy has to
              survive contact with customers, teams, and production software.
            </p>
          </div>
        </section>

        <section className="project-sequence" aria-label="Systems built">
          {projects.map((project, index) => (
            <article
              className={`project-chapter ${index % 2 ? "project-dark" : ""}`}
              data-reveal
              data-chapter={index + 1}
              key={project.id}
            >
              <div className="project-route" aria-hidden="true">
                <span className="route-node" />
              </div>
              <div className="page-shell project-grid">
                <div className="project-copy reveal-copy">
                  <p className="project-number">{project.number}</p>
                  <h3>{project.title}</h3>
                  <p className="project-premise">{project.premise}</p>
                  <p className="project-body">{project.body}</p>
                  <p className="project-outcome">{project.outcome}</p>
                </div>
                <div className="project-visual reveal-visual">
                  <SystemDiagram variant={project.id} />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="method" data-reveal>
          <div className="page-shell method-grid">
            <p className="section-index reveal-copy">The method</p>
            <h2 className="method-heading reveal-copy">
              Build close to the problem.
            </h2>
            <ol className="method-steps">
              <li className="reveal-copy">
                <span>01</span>
                <div>
                  <strong>Build it for my own work.</strong>
                  <p>Start where the context is real and the feedback is immediate.</p>
                </div>
              </li>
              <li className="reveal-copy">
                <span>02</span>
                <div>
                  <strong>Find what scales.</strong>
                  <p>Separate the useful system from the one-off prototype.</p>
                </div>
              </li>
              <li className="reveal-copy">
                <span>03</span>
                <div>
                  <strong>Put it in front of teams.</strong>
                  <p>Ship, observe, and turn operating behavior into product leverage.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="position dark-section" data-reveal>
          <div className="page-shell position-grid">
            <p className="section-index reveal-copy">The position</p>
            <h2 className="position-heading reveal-copy">
              I don&apos;t theorize about AI-native product organizations.
              <span>I run one.</span>
            </h2>
            <p className="position-copy reveal-copy">
              Decisive enough to set direction. Technical enough to prototype it.
              Business oriented enough to know what should scale.
            </p>
          </div>
        </section>

        <section className="elsewhere" data-reveal>
          <div className="page-shell elsewhere-grid">
            <p className="section-index reveal-copy">Beyond the org</p>
            <h2 className="elsewhere-heading reveal-copy">
              Twenty years building in public and in production.
            </h2>
            <div className="elsewhere-copy reveal-copy">
              <p>
                Writing and speaking about product engineering in the AI era to
                more than 50,000 developers and product leaders.
              </p>
              <p>
                Co-host of a Spanish-language technology podcast for Latin
                American developers, international conference speaker, and
                creator of a ten-chapter course on headless CMS architecture.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" data-reveal aria-labelledby="contact-title">
          <div className="contact-route" aria-hidden="true" />
          <div className="page-shell contact-grid">
            <p className="section-index reveal-copy">Start a conversation</p>
            <h2 id="contact-title" className="contact-heading reveal-copy">
              Have a hard product problem?
            </h2>
            <p className="contact-copy reveal-copy">
              If you are operationalizing AI, connecting product strategy to
              engineering, or changing how a product organization works, I&apos;m
              interested.
            </p>
            <a
              className="linkedin-cta reveal-copy"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>Message me on LinkedIn</span>
              <ArrowUpRight aria-hidden="true" size={24} strokeWidth={2} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <p>Freddy Montes · San José, Costa Rica</p>
          <nav aria-label="External profiles">
            <a href="https://github.com/fmontes" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://x.com/fmontes" target="_blank" rel="noreferrer">
              X
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

function HeroSystem() {
  return (
    <div className="hero-system" aria-hidden="true">
      <svg viewBox="0 0 680 640" role="presentation">
        <path className="hero-path" d="M42 510V316c0-38 30-68 68-68h176" />
        <path className="hero-path hero-path-delay" d="M286 248h176c38 0 68-30 68-68V54" />
        <circle className="hero-orbit" cx="286" cy="248" r="112" />
        <circle className="hero-orbit hero-orbit-inner" cx="286" cy="248" r="58" />
        <circle className="hero-core" cx="286" cy="248" r="15" />
        <circle className="hero-node" cx="42" cy="510" r="9" />
        <circle className="hero-node" cx="530" cy="54" r="9" />
        <path className="hero-signal" d="M398 248h208" />
        <path className="hero-signal" d="M286 136V36" />
        <path className="hero-signal" d="M286 360v158" />
      </svg>
    </div>
  );
}

function SystemDiagram({
  variant,
}: {
  variant: (typeof projects)[number]["id"];
}) {
  return (
    <svg
      className={`system-diagram diagram-${variant}`}
      viewBox="0 0 640 380"
      role="img"
      aria-label={`${variant} system diagram`}
    >
      {variant === "intelligence" && (
        <>
          <DiagramLabel x="30" y="72" text="GITHUB" />
          <DiagramLabel x="30" y="150" text="ASANA" />
          <DiagramLabel x="30" y="228" text="STRATEGY" />
          <DiagramLabel x="30" y="306" text="CUSTOMERS" />
          {[70, 148, 226, 304].map((y) => (
            <path key={y} className="diagram-line" d={`M136 ${y}H254`} />
          ))}
          <circle className="diagram-halo" cx="322" cy="188" r="78" />
          <circle className="diagram-node-fill" cx="322" cy="188" r="34" />
          <path className="diagram-line" d="M254 70v234M254 188h34M356 188h132" />
          <DiagramLabel x="500" y="178" text="ONE" />
          <DiagramLabel x="500" y="204" text="CONTEXT" />
          <circle className="diagram-dot" cx="488" cy="188" r="6" />
        </>
      )}

      {variant === "escalation" && (
        <>
          <DiagramLabel x="34" y="78" text="SUPPORT" />
          <DiagramLabel x="34" y="190" text="SUCCESS" />
          <DiagramLabel x="34" y="302" text="ENGINEERING" />
          <path className="diagram-line" d="M154 72H246c34 0 32 80 70 80h44" />
          <path className="diagram-line" d="M154 184h206" />
          <path className="diagram-line" d="M154 296h92c34 0 32-80 70-80h44" />
          <circle className="diagram-halo" cx="402" cy="184" r="70" />
          <path className="diagram-alert" d="M402 142v54" />
          <circle className="diagram-node-fill" cx="402" cy="218" r="7" />
          <path className="diagram-line" d="M472 184h112" />
          <DiagramLabel x="498" y="166" text="SHARED" />
          <DiagramLabel x="498" y="205" text="STATUS" />
        </>
      )}

      {variant === "api" && (
        <>
          {[58, 112, 166, 220, 274, 328].map((y, index) => (
            <g key={y}>
              <circle className="diagram-dot" cx="60" cy={y} r="5" />
              <path className="diagram-line" d={`M66 ${y}H214`} />
              <DiagramLabel x="88" y={y - 9} text={`ENDPOINT ${index + 1}`} />
            </g>
          ))}
          <path className="diagram-line" d="M214 58v270M214 193h82" />
          <polygon className="diagram-hex" points="350,112 420,152 420,232 350,272 280,232 280,152" />
          <DiagramLabel x="326" y="184" text="API" />
          <path className="diagram-line" d="M420 192h96" />
          <circle className="diagram-halo" cx="556" cy="192" r="52" />
          <DiagramLabel x="526" y="176" text="SEARCH" />
          <DiagramLabel x="520" y="211" text="EXECUTE" />
        </>
      )}

      {variant === "analytics" && (
        <>
          <DiagramLabel x="32" y="72" text="VIEWS" />
          <DiagramLabel x="32" y="142" text="ENGAGEMENT" />
          <DiagramLabel x="32" y="212" text="CONVERSIONS" />
          <DiagramLabel x="32" y="282" text="ATTRIBUTION" />
          {[68, 138, 208, 278].map((y) => (
            <path key={y} className="diagram-line" d={`M154 ${y}C230 ${y} 218 188 282 188`} />
          ))}
          <rect className="diagram-frame" x="282" y="90" width="218" height="198" />
          <path className="diagram-chart" d="M312 238l44-48 38 22 46-82 34 31" />
          <path className="diagram-line" d="M500 188h92" />
          <circle className="diagram-node-fill" cx="592" cy="188" r="10" />
          <path className="diagram-axis" d="M312 254h158" />
        </>
      )}
    </svg>
  );
}

function DiagramLabel({ x, y, text }: { x: string; y: string | number; text: string }) {
  return (
    <text className="diagram-label" x={x} y={y}>
      {text}
    </text>
  );
}
