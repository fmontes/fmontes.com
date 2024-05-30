import { getPosts, getTips } from '@/utils/content';
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const tips = getTips();

  return [
    ...tips.map((tip) => ({
      url: `https://fmontes.com/tips/${tip.slug}`,
      lastModified: new Date(tip.date),
      alternates: {
        languages: {
          es: `https://fmontes.com/es/tips/${tip.slug}`,
        },
      },
    })),
    ...posts.map((post) => ({
      url: `https://fmontes.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
      alternates: {
        languages: {
          es: `https://fmontes.com/es/blog/${post.slug}`,
        },
      },
    })),
    {
      url: 'https://fmontes.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://fmontes.com/es',
        },
      },
    },
    {
      url: 'https://fmontes.com/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://fmontes.com/es/about',
        },
      },
    },
    {
      url: 'https://fmontes.com/blog',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://fmontes.com/es/blog',
        },
      },
    },
    {
      url: 'https://fmontes.com/tips',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://fmontes.com/es/tips',
        },
      },
    },
    {
      url: 'https://fmontes.com/uses',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://fmontes.com/es/uses',
        },
      },
    },
    {
      url: 'https://fmontes.com/talks',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://fmontes.com/es/talks',
        },
      },
    },
    {
      url: 'https://fmontes.com/talks',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://fmontes.com/es/talks',
        },
      },
    },
  ]
}