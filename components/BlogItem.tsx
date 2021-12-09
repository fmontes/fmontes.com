import { useRouter } from 'next/router';
import Link from 'next/link';
import { MatterContent } from '@utils/content';
import Date from '@components/Date';
import TechIcon from '@components/TechIcon';

function BlogItem({ title, date, description, category, slug }: MatterContent): JSX.Element {
    const { locale } = useRouter();

    return (
        <article className="border-gray-200 border-solid border-2 hover:bg-blue-50 duration-200 hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1">
            <Link href={`/blog/${slug}`} locale={locale}>
                <a className="block no-underline p-6">
                    <div className="flex justify-between items-center mb-4">
                        <TechIcon type={category} />
                        <Date date={date} />
                    </div>
                    <div className="prose">
                        <h2 className="mt-0 mb-2 text-lg leading-9">{title}</h2>
                        <p className="mt-2">{description}</p>
                    </div>
                </a>
            </Link>
        </article>
    );
}

export default BlogItem;
