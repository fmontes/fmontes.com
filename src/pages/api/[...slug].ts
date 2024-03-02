// import { getPostBySlug } from '@/utils/content';
import { getPostBySlug, getTipBySlug } from '@/utils/content';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const [type, slug] = req.query.slug as string[];

  const callback = type === 'blog' ? getPostBySlug : getTipBySlug;

  const post = callback({
    slug: slug,
    lang: 'en',
  });

  res.status(200).json({ message: post.title });
}
