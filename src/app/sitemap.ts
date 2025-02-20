import { MetadataRoute } from 'next';
import { getTips, getPosts } from '@/utils/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tips = await getTips();
  const posts = await getPosts();

  return [
    {
      url: 'https://fmontes.com',
      lastModified: new Date(),
    },
    {
      url: 'https://fmontes.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://fmontes.com/uses',
      lastModified: new Date(),
    },
    {
      url: 'https://fmontes.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://fmontes.com/tips',
      lastModified: new Date(),
    },
    ...tips.map((tip) => ({
      url: `https://fmontes.com/tips/${tip.slug}`,
      lastModified: new Date(tip.date),
    })),
    ...posts.map((post) => ({
      url: `https://fmontes.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}