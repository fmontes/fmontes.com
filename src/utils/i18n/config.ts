export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const;

export const getLocaleFromPathname = (pathname: string): 'en' | 'es' => {
  const locale = pathname.split('/')[1] as 'en' | 'es';

  if (i18n.locales.includes(locale)) {
    return locale;
  }
  return i18n.defaultLocale;
};