import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

import Thumbnail from "./Thumbnail";

type Props = {
    children: ReactNode;
    imageUrl: string;
    category?: string;
    href: string;
};

function CardItem({ href, children, imageUrl, category }: Props): JSX.Element {
    const { locale } = useRouter();

    return <article
        className="border-b-2 border-solid border-blue-100 dark:border-blue-800 pb-6"
    >
        <Link locale={locale} href={href} className="flex flex-col gap-6 md:flex-row no-underline">
            <Thumbnail
                category={category}
                imageUrl={imageUrl}
                width="w-full md:w-72"
            />
            {children}
        </Link>
    </article>
}


export default CardItem;
