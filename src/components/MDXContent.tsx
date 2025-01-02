
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import rehypeHighlight from 'rehype-highlight';

interface MDXContentProps {
  source: string;
  options?: any;
}

export function MDXContent({ source, }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [[rehypeHighlight as any]],
        },
      }}
      components={{ 
        Image: (props) => <Image {...props} />,
      }}
    />
  );
} 