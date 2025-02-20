import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/utils/content';
import { MDXContent } from '@/components/MDXContent';
import { SITE } from '@/utils/const';
import { defaultOpenGraph } from '@/utils/content';
import { DateText } from '@/components/Date';
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      ...defaultOpenGraph,
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${SITE}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto mt-12 prose dark:prose-invert lg:prose-xl dark:prose-h1:text-yellow">
        <p className="not-prose dark:text-blue-500">
          <DateText date={post.date} />
        </p>
        
      <h1>{post.title}</h1>
      <MDXContent source={post.content} />
    </article>
  );
} 