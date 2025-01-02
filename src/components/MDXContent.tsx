
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import rehypeHighlight from 'rehype-highlight';
import { DateText } from './Date';

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
        Date: DateText,
        Image: (props) => <Image {...props} />,
      }}
    />
  );
} 