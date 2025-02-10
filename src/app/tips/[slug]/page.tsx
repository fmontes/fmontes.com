import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTipBySlug } from '@/utils/content';
import { MDXContent } from '@/components/MDXContent';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tip = await getTipBySlug(slug);

  if (!tip) {
    return {};
  }

  return {
    title: tip.title,
    description: tip.description,
    openGraph: {
      title: tip.title,
      description: tip.description,
      type: 'article',
    },
  };
}

export default async function TipPost({ params }: Props) {
  const { slug } = await params;
  const tip = await getTipBySlug(slug);

  if (!tip) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert mx-auto mt-12">
      <h1>{tip.title}</h1>
      <MDXContent source={tip.content} />
    </article>
  );
} 