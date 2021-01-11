import Link from 'next/link';
import { useRouter } from 'next/router';

function Translate(): JSX.Element {
    const router = useRouter();

    const locate = router.locale === 'en' ? 'es' : 'en';

    return (
        <Link href={router.asPath} locale={locate}>
            Traducir
        </Link>
    );
}

export default Translate;
