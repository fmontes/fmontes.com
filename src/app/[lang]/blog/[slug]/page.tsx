import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';

import { getDefaultOpenGraph, getPostBySlug } from '@/utils/content';
import { Date } from '@/components/Date';
import { SITE } from '@/utils/const';

import "../../github-dark.min.css";

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.lang, params.slug);
  const defaultOpenGraph = await getDefaultOpenGraph({
    lang: params.lang
  })

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      ...defaultOpenGraph,
      title: post.title,
      description: post.description,
      url: `${SITE}/${params.lang}/blog/${params.slug}`
    },
  }
}

export default function Blog({ params }: { params: { slug: string; lang: string } }) {
  const post = getPostBySlug(params.lang, params.slug);

  return (
    <main className="mx-auto mt-12 prose dark:prose-invert lg:prose-xl dark:prose-h1:text-yellow">
      <p className="not-prose dark:text-blue-500"><Date date={post.date} locale={params.lang} /></p>
      <h1>{post.title}</h1>
      <MDXRemote
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeHighlight],
          }
        }}
        source={post.content}
        components={{
          Image: (props) => <Image {...props} />,
        }}
      />
    </main>
  );
}
