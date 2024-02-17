import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';

import useTranslation from '@utils/i18n/hooks';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    children: ReactNode;
    href: string;
};

function NanLink({ children, href }: Props) {
    const { pathname } = useRouter();
    const active = pathname === href;

    return (
        <Link href={href} className={`${active
            ? 'dark:text-yellow text-blue-900 underline '
            : 'dark:text-blue-50 text-blue-700'
            } block py-2 pl-5 pr-16 lg:p-2 hover:underline`}>

            {children}
        </Link>
    );
}

export function Nav(): JSX.Element {
    const t = useTranslation();
    const [show, setShow] = useState(false);

    return (
        <>
            <nav
                className={`${show ? 'block' : 'hidden'
                    } fixed top-0 right-0 z-10 dark:bg-blue-700 bg-blue-100 flex flex-col lg:flex-row lg:flex lg:static lg:bg-transparent`}
                onClick={() => {
                    setShow(false);
                }}
            >
                <NanLink href="/">{t('home')}</NanLink>
                <NanLink href="/blog">{t('blog')}</NanLink>
                <NanLink href="/about">{t('about')}</NanLink>
                <NanLink href="/uses">{t('uses')}</NanLink>
                <NanLink href="/portfolio">{t('portfolio')}</NanLink>
                <NanLink href="/talks">{t('talks')}</NanLink>
                <NanLink href="mailto:me@fmontes.com?subject=Hello from your website">
                    {t('contact')}
                </NanLink>
            </nav>
            <button
                aria-label="Show menu"
                className="bg-blue-800 rounded-none active:outline-none lg:hidden z-10"
                onClick={() => {
                    setShow(!show);
                }}
            >
                <Image
                    width={32}
                    height={32}
                    alt={show ? 'Hide menu' : 'Show menu'}
                    className="block p-2"
                    src={`/images/${show ? 'close' : 'menu'}.svg`}
                />
            </button>
        </>
    );
}
