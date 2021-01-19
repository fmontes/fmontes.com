import { MatterContent } from '@utils/content';
import Date from '@components/Date';
import BlogIcon from '@components/BlogIcon';

function BlogItem({ title, date, description, category }: MatterContent): JSX.Element {
    return (
        <article className="border-gray-200 border-solid border-2 hover:bg-blue-50 duration-200 hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1">
            <a className="block no-underline p-6" href="#">
                <div className="flex justify-between items-center mb-4">
                    <BlogIcon type={category} />
                    <Date date={date} />
                </div>
                <h2 className="mt-0 mb-2 text-lg leading-9">{title}</h2>
                <p className="mt-2">{description}</p>
            </a>
        </article>
    );
}

export default BlogItem;
