export function Rule() {
  return <hr className="border-0 h-px bg-rule" />;
}

export function Dot() {
  return (
    <span className="text-muted/60" aria-hidden>
      ·
    </span>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="h-px w-8 bg-accent" />
      <h2 className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
        {children}
      </h2>
    </div>
  );
}

export function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-accent underline decoration-rule underline-offset-[5px] hover:decoration-accent transition-[color,transform] active:scale-[0.96]"
    >
      {children}
    </a>
  );
}
