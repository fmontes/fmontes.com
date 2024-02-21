import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

import { getPostBySlug } from '@/utils/content';
import { Date } from '@/components/Date';

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.lang, params.slug);

  return {
    title: post.title,
  }
}

export default function Blog({ params }: { params: { slug: string; lang: string } }) {
  const post = getPostBySlug(params.lang, params.slug);

  return (
    <main className="prose dark:prose-invert lg:prose-xl mt-12 mx-auto dark:prose-h1:text-yellow">
      <p className="not-prose dark:text-blue-500"><Date date={post.date} locale={params.lang} /></p>
      <h1>{post.title}</h1>
      <MDXRemote
        source={post.content}
        components={{
          Image: (props) => <Image {...props} />,
        }}
      />
    </main>
  );
}
