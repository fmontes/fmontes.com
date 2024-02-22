import { Thumbnail } from './Thumbnail';
import { Date } from './Date';
import { NavLink } from './NavLink';

export function HomeBlogItem(post): JSX.Element {
  const { slug, category, cover, title, date } = post;

  const className = `bg-gradient-to-tr p-2 rounded-lg flex grow shrink-0 basis-72 bg-gradient-to-r from-yellow-200 to-yellow-500`;

  let imageUrl

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
      <NavLink href={`/blog/${slug}`} className="block no-underline bg-white dark:bg-blue-900 p-2 rounded-md flex-1">
        <Thumbnail category={category} imageUrl={imageUrl} width={''} />

        <div className="m-4">
          <Date date={date} />
          <h2 className="mt-0 mb-2 text-lg leading-9 line-clamp-3">{title}</h2>
        </div>
      </NavLink>
    </article>
  );
}
