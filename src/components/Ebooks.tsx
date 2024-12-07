import Link from 'next/link';

function Ebooks(): JSX.Element {
  return (
    <section className="bg-yellow text-blue-900 rounded-xl p-10">
      <h2 className="text-lg leading-tight mb-8 font-bold">Get my eBooks</h2>

      <div className="flex flex-col gap-10 sm:flex-row">
        <Link className="block flex-1" href="https://fmontes.gumroad.com/l/99tips">
          99 Tips para Web Development
        </Link>
        <a className="block flex-1" href="https://99.tips" rel="noreferrer" target="_blank">
          99 Preguntas de Entrevista para Desarrolladores Web
        </a>
      </div>
    </section>
  );
}

export default Ebooks;
