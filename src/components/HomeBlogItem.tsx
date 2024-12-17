import { Thumbnail } from './Thumbnail';
import { DateText } from './Date';
import { NavLink } from './NavLink';
import { BlogData } from '@/utils/content';

export default function HomeBlogItem(post: BlogData): React.ReactElement {
  const { slug, category, cover, title, date } = post;

  const className = `bg-gradient-to-tr p-2 rounded-lg flex grow shrink-0 basis-72 bg-gradient-to-r from-yellow-200 to-yellow-500`;

  let imageUrl = null;

  if (cover) {
    try {
      new URL(cover);
      imageUrl = cover;
    } catch (error) {
      imageUrl = `/static/images/blog/${cover}`;
    }
  }

  return (
    <article className={className}>
      <NavLink href={`/blog/${slug}`} className="flex-1 block p-2 no-underline bg-white rounded-md dark:bg-blue-900">
        <Thumbnail category={category} imageUrl={imageUrl} width={''} />

        <div className="m-4">
          <DateText date={date} />
          <h2 className="mt-0 mb-2 text-lg leading-9 line-clamp-3">{title}</h2>
        </div>
      </NavLink>
    </article>
  );
}
