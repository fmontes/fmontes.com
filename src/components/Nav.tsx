'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export function Nav() {
    const pathname = usePathname() || '';
    const [show, setShow] = useState(false);

    const items = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Tips', href: '/tips' },
        { label: 'About', href: '/about' },
        { label: 'Uses', href: '/uses' },
        { label: 'Contact', href: 'mailto:me@fmontes.com?subject=Hello from your website' },
    ];

    return (
        <>
            <nav
                className={`${show ? 'block' : 'hidden'} fixed top-0 right-0 z-10 flex flex-col lg:flex-row lg:flex lg:static bg-blue-800 lg:bg-transparent`}
                onClick={() => {
                    setShow(false);
                }}>
                {items.map((item, i) => {
                    const active = pathname === item.href || pathname.startsWith(item.href + '/');
                    const className = `${active ? 'dark:text-yellow text-yellow lg:text-blue-900 underline' : 'dark:text-blue-50 text-blue-50 lg:text-blue-700'} block py-2 pl-5 pr-16 lg:p-2 hover:underline`;

                    return (
                        <Link className={className} key={i} href={item.href}>
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
            <button
                aria-label="Show menu"
                className="z-10 bg-blue-800 flex justify-center items-center w-10 h-10 rounded-none active:outline-none lg:hidden"
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
