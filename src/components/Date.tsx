export function Date({
  date,
  locale,
  className,
}: {
  date: string;
  locale?: string;
  className?: string;
}): JSX.Element | null {
  if (!date) {
    return null;
  }

  return <time className={className}>{date}</time>;
}
