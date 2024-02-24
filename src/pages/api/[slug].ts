import { getPostBySlug } from '@/utils/content';
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const post = getPostBySlug({
    slug: req.query.slug as string,
    lang: 'en'
  });
  
  res.status(200).json({ message: post.title })
}
