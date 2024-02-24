import { getPostBySlug } from '@/utils/content';
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const post = getPostBySlug('en', req.query.slug as string);
  
  res.status(200).json({ message: post.title })
}
