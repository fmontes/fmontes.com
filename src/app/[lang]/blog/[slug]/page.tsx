import { getPostBySlug } from '@/utils/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

export default function Blog({ params }: { params: { slug: string; lang: string } }) {
  const post = getPostBySlug(params.lang, params.slug);

  return (
    <main className="prose lg:prose-xl mx-auto">
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
