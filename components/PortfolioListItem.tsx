import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MatterContent } from '@utils/content';

function PortfolioItem({ title, description, slug }: MatterContent): JSX.Element {
    const { locale } = useRouter();

    return (
        <article className="border-gray-200 border-solid border-2 mb-8">
            <Link href={`/portfolio/${slug}`} locale={locale}>
                <a className="block no-underline p-6">
                    <Image
                        height="480"
                        src={`/images/portfolio/${slug}/thumbnail.png`}
                        width="720"
                    />
                    <h2 className="mt-4 mb-2 text-lg leading-9">{title}</h2>
                    <p className="mt-2 mb-0">{description}</p>
                </a>
            </Link>
        </article>
    );
}

export default PortfolioItem;
