import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import Date from '@components/Date';
import TechIcon from '@components/TechIcon';
import { BlogPost } from 'pages/blog/[slug]';

const ImageFallback = ({ children }: { children: JSX.Element }) => (
    <div className="bg-gradient-to-tr from-blue-500 to-blue-800 h-48 flex items-center justify-center">
        {children}
    </div>
);

function BlogItem({
    frontMatter: { title, date, description, category, slug, cover },
    type
}: BlogPost): JSX.Element {
    const { locale } = useRouter();

    const isMDX = type === 'mdx';
    const imageUrl = isMDX ? `/images/blog/${cover}` : cover;

    return (
        <article className="border-gray-200 border-solid border-2 hover:bg-blue-50 duration-200 hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1">
            <Link href={`/blog/${slug}`} locale={locale}>
                <a className="block no-underline">
                    {cover ? (
                        <div className="relative h-48">
                            <Image layout="fill" objectFit="cover" src={imageUrl} />
                        </div>
                    ) : (
                        <ImageFallback>
                            <TechIcon size={64} type={category} white={true} />
                        </ImageFallback>
                    )}

                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <TechIcon type={category} />
                            <Date date={date} />
                        </div>
                        <div className="prose">
                            <h2 className="mt-0 mb-2 text-lg leading-9">{title}</h2>
                            <p className="mt-2">{description}</p>
                        </div>
                    </div>
                </a>
            </Link>
        </article>
    );
}

export default BlogItem;
