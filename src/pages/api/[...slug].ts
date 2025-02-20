import { getPostBySlug, getTipBySlug, Blog } from '@/utils/content';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (!slug || !Array.isArray(slug) || slug.length < 1) {
    return res.status(400).json({ error: 'Invalid slug' });
  }

  const [type, postSlug] = slug;

  if (!postSlug) {
    return res.status(400).json({ error: 'Missing slug' });
  }

  if (type !== 'blog' && type !== 'tips') {
    return res.status(400).json({ error: 'Invalid type' });
  }

  const callback = type === 'blog' ? getPostBySlug : getTipBySlug;

  const post = await callback(postSlug);

  if (!post) {
    return res.status(404).json({ error: 'Not found' });
  }

  return res.status(200).json({
    title: post.title,
    description: post.description,
    ...(type === 'blog' && { image: (post as Blog).cover }),
  });
}
