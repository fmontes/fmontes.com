import 'server-only'

import { PageParams } from '@/utils/content'
 
const dictionaries = {
  en: () => import('../../utils/i18n/dictionaries/en.json').then((module) => module.default),
  es: () => import('../../utils/i18n/dictionaries/es.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: PageParams['lang']) => {
  if (!dictionaries[locale]) {
    return await dictionaries['en']()
  }

  return await dictionaries[locale]()
}