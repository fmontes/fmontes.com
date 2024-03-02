'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import { NavLink } from './NavLink';
import { useDictionary } from '@/providers/dictionary-provider';
import { getFirstFolderLevel } from '@/utils/i18n/config';

export function Nav() {
    const pathname = usePathname();
    const dictionary = useDictionary()

    const [show, setShow] = useState(false);

    const items = [
        { label: dictionary.nav.home, href: '/' },
        { label: dictionary.nav.blog, href: '/blog' },
        { label: dictionary.nav.tips, href: '/tips' },
        { label: dictionary.nav.about, href: '/about' },
        { label: dictionary.nav.uses, href: '/uses' },
        { label: dictionary.nav.talks, href: '/talks' },
        { label: dictionary.nav.contact, href: 'mailto:me@fmontes.com?subject=Hello from your website' },
    ]

    return (
        <>
            <nav
                className={`${show ? 'block' : 'hidden'
                    } fixed top-0 right-0 z-10 flex flex-col lg:flex-row lg:flex lg:static lg:bg-transparent`}
                onClick={() => {
                    setShow(false);
                }}>
                {items.map((item, i) => {
                    const folder = getFirstFolderLevel(pathname);

                    const active = folder === item.href;
                    const className = `${active ? 'dark:text-yellow text-blue-900 underline' : 'dark:text-blue-50 text-blue-700'} block py-2 pl-5 pr-16 lg:p-2 hover:underline`;

                    return (
                        <NavLink className={className} key={i} href={item.href}>
                            {item.label}
                        </NavLink>
                    );
                })}
            </nav>
            <button
                aria-label="Show menu"
                className="z-10 bg-blue-800 rounded-none active:outline-none lg:hidden"
                onClick={() => {
                    setShow(!show);
                }}>
                <Image
                    width={32}
                    height={32}
                    alt={show ? 'Hide menu' : 'Show menu'}
                    className="block p-2"
                    src={`/static/images/${show ? 'close' : 'menu'}.svg`}
                />
            </button>
        </>
    );
}
