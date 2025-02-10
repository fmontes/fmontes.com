import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import rehypeHighlight from 'rehype-highlight';
import remarkCodeTitles from 'remark-code-titles';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { DateText } from './Date';

interface MDXContentProps {
  source: string;
}

const components = {
  Date: DateText,
  Image: (props: any) => (
    <div className="relative w-full aspect-video my-8">
      <Image 
        {...props} 
        fill 
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={props.alt || ''}
      />
    </div>
  ),
  a: (props: any) => <Link {...props} className="text-blue-600 hover:text-blue-800 dark:text-cyan dark:hover:text-cyan-200" />,
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkCodeTitles,
            remarkFrontmatter,
            remarkMdxFrontmatter,
          ],
          rehypePlugins: [[rehypeHighlight]],
        },
      }}
      components={components}
    />
  );
} 