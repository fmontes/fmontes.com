import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Here(): JSX.Element {
    return (
        <>
            <NextSeo
                description="Tu portafolio es esencial para mostrar tus habilidades y proyectos, destaca tus capacidades técnicas y de diseño y te permite a destacar sobre otros candidatos."
                title="Desarrollemos tu portafolio para 2023"
            />

            <main className="prose dark:prose-invert lg:prose-lg  mt-12 mx-auto text-center">
                <h1 className="text-blue-700 dark:text-cyan text-xl lg:text-2xl my-16 sm:my-20 md:text-center font-normal leading-tight tracking-tight">
                    Desarrollemos tu <b>portafolio</b> para 2023
                </h1>
                <p className="max-w-md m-auto">
                    Tu portafolio es esencial para mostrar tus habilidades y proyectos, destaca tus
                    capacidades técnicas y de diseño y te permite a destacar sobre otros candidatos.
                </p>

                <h2 className="mb-0 dark:text-yellow">¿Cómo lo haremos?</h2>

                <div className="not-prose">
                    <div className="flex gap-8 flex-wrap sm:flex-nowrap">
                        <p>
                            <b className="dark:text-cyan-500">Maquetaremos 3 proyectos</b>. Landing page, component library y
                            eCommerce.
                        </p>
                        <p>
                            Diseñaremos el portafolio <b className="dark:text-cyan-500">desde cero en Figma</b> y luego lo maquetaremos.
                        </p>
                        <p>Publicamos todo en <b className="dark:text-cyan-500">Vercel o GitHub Pages</b> con dominio propio.</p>
                    </div>
                </div>

                <h2 className="mb-0 dark:text-yellow">¿Donde y cuando?</h2>
                <p>Todos Miercóles y Viernes de 4 a 5pm (CST) en vivo en mi Twitch</p>
                <p><Link href="https://twitch.tv/fmontes83" target="_blank" className="inline-block font-bold bg-[#6441A5] no-underline text-white py-4 px-8 rounded-md">Sigueme en Twitch</Link></p>
            </main>
        </>
    );
}
