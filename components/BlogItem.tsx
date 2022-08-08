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
    frontMatter: { title, date, category, slug, cover },
    color,
    type
}: BlogPost): JSX.Element {
    const { locale } = useRouter();

    const isMDX = type === 'mdx';
    const imageUrl = isMDX ? `/images/blog/${cover}` : cover;

    const colors = {
        blue: 'from-[#0BCFF9] to-[#107389]',
        green: 'from-[#0BF9CE] to-[#308910]',
        yellow: 'from-[#F9D30B] to-[#F9D30B]'
    };

    return (
        <article
            className={`bg-gradient-to-tr p-2 rounded-lg flex grow shrink-0 basis-72 ${colors[color]}`}
        >
            <Link href={`/blog/${slug}`} locale={locale}>
                <a className="block no-underline bg-white dark:bg-blue-900 p-2 rounded-md flex-1">
                    {cover ? (
                        <div className="relative h-48 rounded-sm overflow-hidden">
                            <Image layout="fill" objectFit="cover" src={imageUrl} />
                        </div>
                    ) : (
                        <ImageFallback>
                            <TechIcon size={64} type={category} white={true} />
                        </ImageFallback>
                    )}

                    <div className="m-4">
                        <div>
                            <h2 className="mt-0 mb-2 text-lg leading-9">{title}</h2>
                            <Date date={date} />
                        </div>
                    </div>
                </a>
            </Link>
        </article>
    );
}

export default BlogItem;
