import Image from 'next/image';
import useTranslation from '@utils/i18n/hooks';
import cover from '../public/images/99-tips/99-cover.png';

export default function Book(): JSX.Element {
    const t = useTranslation();

    return (
        <>
            <h1>
                <Image
                    alt="99 tips de Web Development"
                    height="470"
                    src={cover}
                    title="99 tips de Web Development"
                    width="590"
                />
            </h1>

            <div className="max-w-lg m-auto">
                <h2>
                    Descargalo <span className="uppercase text-green-600 font-bold">¡gratis!</span>
                </h2>
                <p>😀 El libro es gratis pero puedes regalarme un café o una cerveza.</p>
                <p>
                    Este libro <b>recopila 99 soluciones a problemas</b> de desarrollo web que se
                    pueden resolver de manera nativa, fácil, pero más importante, eficientemente.
                </p>
                <script
                    async
                    data-uid="8e2fa14e8a"
                    src="https://fmontes.ck.page/8e2fa14e8a/index.js"
                />
            </div>
        </>
    );
}
