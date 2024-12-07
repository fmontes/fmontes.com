import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';

import { PageParams, getDefaultOpenGraph, getTipBySlug } from '@/utils/content';
import { DateText } from '@/components/Date';
import { SITE } from '@/utils/const';

import '../../github-dark.min.css';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}) {
  const pageParams = await params;

  const post = getTipBySlug(pageParams);

  if (!post) {
    return null;
  }

  const defaultOpenGraph = await getDefaultOpenGraph(pageParams.lang);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      ...defaultOpenGraph,
      title: post.title,
      description: post.description,
      url: `${SITE}/${pageParams.lang}/tips/${pageParams.slug}`,
    },
  };
}

export default async function Tip({
  params,
}: {
  params: Promise<PageParams>
}) {
  const pageParams = await params;

  const post = getTipBySlug(pageParams);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.description,
    'datePublished': post.date,
    'dateModified': post.date,
    'author': { '@type': 'Person', 'name': 'Freddy Montes' },
    'publisher': {
      '@type': 'Person',
      'name': 'Freddy Montes',
    },
  };

  const source = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypeHighlight as any]],
    },
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto mt-12 prose dark:prose-invert lg:prose-xl dark:prose-h1:text-yellow">
        <p className="not-prose dark:text-blue-500">
          <DateText date={post.date} locale={pageParams.lang} />
        </p>
        <h1>{post.title}</h1>
        <MDXRemote
          {...source}
          components={{
            Image: (props) => <Image {...props} />,
          }}
        />
      </main>
    </>
  );
}
