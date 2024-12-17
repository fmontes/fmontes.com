import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Badge({ children }: { children: ReactNode }): React.ReactElement {
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
}): React.ReactElement {
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

function Ebooks(): React.ReactElement {
  return (
    <section className="bg-yellow text-blue-900 rounded-xl p-10">
      <h2 className="text-lg leading-tight mb-8 font-bold">Get my eBooks</h2>

      <div className="flex flex-col gap-10 sm:flex-row">
        <Link className="block flex-1" href="https://fmontes.gumroad.com/l/99tips">
          <Book
            image="/static/images/books/99-cover.png"
            price="free"
            title="99 Tips para Web Development"
          />
        </Link>
        <a className="block flex-1" href="https://99.tips" rel="noreferrer" target="_blank">
          <Book
            image="/static/images/books/99-questions-cover.png"
            price="USD$ 9.99"
            title="99 Preguntas de Entrevista para Desarrolladores Web"
          />
        </a>
      </div>
    </section>
  );
}

export default Ebooks;