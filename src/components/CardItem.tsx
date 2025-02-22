import React, { ReactNode } from 'react';
import { Thumbnail } from "./Thumbnail";
import Link from 'next/link';

type Props = {
  children: ReactNode;
  imageUrl: string | null;
  category: string;
  href: string;
};

function CardItem({ href, children, imageUrl, category }: Props): React.ReactElement {

  return <article
    className="border-b-2 border-solid border-blue-100 dark:border-blue-800 pb-6"
  >
    <Link href={href} className="flex flex-col gap-6 md:flex-row no-underline">
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