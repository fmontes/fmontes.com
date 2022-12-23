import { useRouter } from 'next/router';
import Link from 'next/link';

import { BlogPost } from 'pages/blog/[slug]';
import BlogImage from './BlogImage';
import Date from './Date';

function HomeBlogItem(post: BlogPost): JSX.Element {
    const {
        frontMatter: { slug, category, cover, title, date },
        color,
        type
    } = post;
    const { locale } = useRouter();

    const colors = {
        blue: 'from-[#0BCFF9] to-[#107389]',
        green: 'from-[#0BF9CE] to-[#308910]',
        yellow: 'from-[#F9D30B] to-[#F9D30B]'
    };

    return (
        <article
            className={`bg-gradient-to-tr p-2 rounded-lg flex grow shrink-0 basis-72 ${colors[color]}`}
        >
            <Link href={`/blog/${slug}`} locale={locale} className="block no-underline bg-white dark:bg-blue-900 p-2 rounded-md flex-1">
                <BlogImage category={category} cover={cover} type={type} width={''} />

                <div className="m-4">
                    <h2 className="mt-0 mb-2 text-lg leading-9">{title}</h2>
                    <Date date={date} />
                </div>
            </Link>
        </article>
    );
}

export default HomeBlogItem;
