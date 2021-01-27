import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from '@utils/i18n';

function Translate(): JSX.Element {
    const router = useRouter();
    const t = useTranslation();
    const locate = router.locale === 'en' ? 'es' : 'en';

    return (
        <Link href={router.asPath} locale={locate}>
            <a className="no-underline items-center text-sm rounded-full border-solid border-blue-500 border py-0 px-3 text-sm">
                {router.locale === 'en' ? '🇪🇸 Traducir' : '🇺🇸 Translate'}
            </a>
        </Link>
    );
}

export default Translate;
