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

export const getFirstFolderLevel = (pathname: string): string => {
  // Remove trailing and leading slashes
  pathname = pathname.replace(/^\/|\/$/g, '');

  const localeExists = i18n.locales.includes(pathname.split('/')[0] as 'en' | 'es');

  console.log({ localeExists });

  if (localeExists) {
    return `/${pathname.split('/')[1]}`;
  }

  return `/${pathname.split('/')[0]}`;
};
