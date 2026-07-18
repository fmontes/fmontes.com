export const EASE = [0.22, 1, 0.36, 1] as const;

export function Dot() {
  return (
    <span className="text-muted/60" aria-hidden>
      ·
    </span>
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
      className="text-accent underline decoration-rule underline-offset-[5px] transition-[color,transform] hover:decoration-accent active:scale-[0.96]"
    >
      {children}
    </a>
  );
}

export function ChapterLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="h-px w-8 bg-accent" />
      <h2 className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
        {index} — {children}
      </h2>
    </div>
  );
}
