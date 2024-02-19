'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/utils/i18n/config';

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export function NavLink({ children, href, className }: Props) {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];
  const locale = i18n.locales.find((l) => l === lang) || i18n.defaultLocale;
  const finalHref = locale === i18n.defaultLocale ? href : `/${locale}${href}`;

  return (
      <Link href={finalHref} className={className}>
          {children}
      </Link>
  );
}