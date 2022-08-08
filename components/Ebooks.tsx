import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Badge({ children }: { children: ReactNode }): JSX.Element {
    return (
        <small className="text-white bg-pink-500 rounded-sm py-0.5 px-1 uppercase">
            {children}
        </small>
    );
}

function Book({
    price,
    title,
    image
}: {
    price: string;
    title: string;
    image: string;
}): JSX.Element {
    return (
        <article className="flex gap-x-6">
            <div className="flex-shrink-0 -ml-4">
                <Image alt={title} height={93} src={image} width={70} />
            </div>
            <div>
                <Badge>{price}</Badge>
                <h3 className="text-lg leading-tight">{title}</h3>
            </div>
        </article>
    );
}

function Ebooks(): JSX.Element {
    return (
        <section className="bg-yellow text-blue-900 rounded-xl p-8">
            <h2 className="text-lg leading-tight mb-8 font-bold">Get my eBooks</h2>

            <div className="flex flex-col gap-6">
                <Link href="/">
                    <Book
                        image="/images/books/99-cover.png"
                        price="free"
                        title="99 Tips para Web Development"
                    />
                </Link>
                <Link href="/">
                    <Book
                        image="/images/books/99-questions-cover.png"
                        price="USD$ 9.99"
                        title="99 Preguntas de Entrevista para Desarrolladores Web"
                    />
                </Link>
            </div>
        </section>
    );
}

export default Ebooks;
