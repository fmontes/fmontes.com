import { useRouter } from 'next/router';
import translations from './translations';

// eslint-disable-next-line no-unused-vars
const useTranslation = (): ((k: string) => string) => {
    const router = useRouter();
    const { locale, defaultLocale } = router;

    return (key: string) => {
        try {
            return translations[locale][key] || translations[defaultLocale][key] || key;
        } catch (error) {
            return key;
        }
    };
};

export default useTranslation;
