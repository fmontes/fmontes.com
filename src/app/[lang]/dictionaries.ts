import 'server-only'
 
const dictionaries = {
  en: () => import('../../utils/i18n/dictionaries/en.json').then((module) => module.default),
  es: () => import('../../utils/i18n/dictionaries/es.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'es') => {
  if (!dictionaries[locale]) {
    return await dictionaries['en']()
  }

  return await dictionaries[locale]()
}