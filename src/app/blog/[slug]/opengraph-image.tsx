import { SITE } from '@/utils/const';
import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{
    slug: string;
  }>
}) {
  const pageParams = await params;

  console.log(`${SITE}/api/blog/${pageParams.slug}`);

  const title = await fetch(`${SITE}/api/blog/${pageParams.slug}`)
    .then((res) => res.json())
    .then((data) => data.title);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="h-full w-full flex items-start justify-start bg-white">
        <div tw="flex items-start justify-start h-full">
          <img
            style={{ objectFit: "cover" }}
            tw="absolute inset-0 w-full h-full"
            src={`${SITE}/static/images/og-bg.png`}
          />
          <div tw="flex items-center justify-center w-full h-full relative">
            <div tw="text-[72px] text-white font-black text-center mx-20">
              {title}
            </div>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}