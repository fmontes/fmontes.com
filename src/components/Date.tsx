export function DateText({
  date,
  className,
}: {
  date: string;
  className?: string;
}): React.ReactElement | null {
  if (!date) {
    return null;
  }

  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
  
  // Add timezone handling to ensure consistent date display
  const [year, month, day] = date.split('-').map(Number);
  const finalDate = new Intl.DateTimeFormat('en-US', options).format(new Date(year, month - 1, day));

  return <time className={className}>{finalDate}</time>;
}
