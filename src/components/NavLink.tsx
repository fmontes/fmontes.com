'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/utils/i18n/config';

interface Props
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export function NavLink(props: Props) {
  const { children, href } = props;
  const pathname = usePathname();
  const lang = (pathname as string).split('/')[1];
  const locale = i18n.locales.find((l) => l === lang) || i18n.defaultLocale;
  const finalHref = locale === i18n.defaultLocale ? (href as string) : `/${locale}${href}`;

  return (
      <Link {...props} href={finalHref} >
          {children}
      </Link>
  );
}