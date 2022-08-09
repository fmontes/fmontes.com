import Link from 'next/link';
import { useRouter } from 'next/router';

function Translate(): JSX.Element {
    const router = useRouter();

    const baseCss = 'px-2 lg:px-3 py-2';
    const es = `${baseCss} ${router.locale === 'es' ? 'dark:bg-blue-700 bg-blue-200' : ''}`;
    const en = `${baseCss} ${router.locale === 'en' ? 'dark:bg-blue-700 bg-blue-200' : ''}`;

    return (
        <div className="no-underline items-center text-sm border-solid border-blue-900 bg-white dark:border-blue-100 dark:bg-blue-900 border text-sm overflow-hidden flex flex-col lg:flex-row rounded-lg lg:rounded-full">
            <Link href={router.asPath} locale="es">
                <a className={es}>
                    <img alt="English" height="18" src="/images/es.svg" width="24" />
                </a>
            </Link>
            <Link href={router.asPath} locale="en">
                <a className={en}>
                    <img alt="Spanish" height="18" src="/images/en.svg" width="24" />
                </a>
            </Link>
        </div>
    );
}

export default Translate;
