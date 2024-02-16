import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const;

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathname.startsWith(`/${i18n.defaultLocale}/`)) {
    return NextResponse.redirect(new URL(pathname.replace(`/${i18n.defaultLocale}`, ''), request.url));
  }

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    if (locale === i18n.defaultLocale) {
      return NextResponse.rewrite(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
    }

    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sw.js|static).*)']
};
