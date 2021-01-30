import useTranslation from '@utils/i18n/hooks';
import Link from 'next/link';

function Nav(): JSX.Element {
    const t = useTranslation();

    return (
        <nav className="inline-flex flex-wrap mt-4 lg:flex-col">
            <Link href="/">
                <a className="nav__link">{t('home')}</a>
            </Link>
            <Link href="/about">
                <a className="nav__link">{t('about')}</a>
            </Link>
            <Link href="/uses">
                <a className="nav__link">{t('uses')}</a>
            </Link>
            <Link href="/portfolio">
                <a className="nav__link">{t('portfolio')}</a>
            </Link>
            <Link href="/talks">
                <a className="nav__link">{t('talks')}</a>
            </Link>
            <a className="nav__link" href="mailto:me@fmontes.com?subject=Hello from your website">
                {t('contact')}
            </a>
        </nav>
    );
}

export default Nav;
