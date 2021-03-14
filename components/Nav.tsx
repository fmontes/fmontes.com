import { ReactNode, useState } from 'react';

import useTranslation from '@utils/i18n/hooks';
import Link from 'next/link';

type Props = {
    children: ReactNode;
    href: string;
};

function NanLink({ children, href }: Props) {
    return (
        <Link href={href}>
            <a className="block py-2 pl-5 pr-16 text-white no-underline sm:text-blue-700 sm:p-2 hover:underline">
                {children}
            </a>
        </Link>
    );
}

function Nav(): JSX.Element {
    const t = useTranslation();
    const [show, setShow] = useState(false);

    return (
        <>
            <button
                className="fixed z-20 top-0 right-0 bg-blue-800 rounded-none active:outline-none sm:hidden"
                onClick={() => {
                    setShow(!show);
                }}
            >
                <img
                    alt="Menu"
                    className="block p-2"
                    src={`/images/${show ? 'close' : 'menu'}.svg`}
                />
            </button>
            <nav
                className={`${
                    show ? 'block' : 'hidden'
                } fixed top-0 right-0 z-10 bg-blue-700 flex flex-col sm:flex-row sm:flex sm:static sm:bg-transparent`}
                onClick={() => {
                    setShow(false);
                }}
            >
                <NanLink href="/">{t('home')}</NanLink>
                <NanLink href="/about">{t('about')}</NanLink>
                <NanLink href="/uses">{t('uses')}</NanLink>
                <NanLink href="/portfolio">{t('portfolio')}</NanLink>
                <NanLink href="/talks">{t('talks')}</NanLink>
                <NanLink href="mailto:me@fmontes.com?subject=Hello from your website">
                    {t('contact')}
                </NanLink>
            </nav>
        </>
    );
}

export default Nav;
