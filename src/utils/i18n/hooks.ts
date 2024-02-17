import { useParams } from 'next/navigation';
import { translations } from './translations';
import { i18n } from './config';

// eslint-disable-next-line no-unused-vars
const useTranslation = (): ((k: string) => string) => {
  const params = useParams();

  const { lang  } = params;

  const locale = i18n.locales.find((l) => l === lang) || i18n.defaultLocale;

  return (key: string) => {
    try {
      return translations[locale][key] || key;
    } catch (error) {
      return key;
    }
  };
};

export default useTranslation;
