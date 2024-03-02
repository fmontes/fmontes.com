export function DateText({
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

  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };


  const finalDate = new Intl.DateTimeFormat(`${locale || 'en'}-US`, options).format(new Date(date));

  return <time className={className}>{finalDate}</time>;
}
