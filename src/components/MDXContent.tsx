'use client';

import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export async function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      {...source}
      components={{
        Image: (props) => <Image {...props} />,
      }}
    />
  );
} 