import { SITE } from '@/utils/const';
import { PageParams } from '@/utils/content';
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
export default async function Image({ params }: { params: PageParams }) {
  const title = await fetch(`${SITE}/api/${params.slug}`)
    .then((res) => res.json())
    .then((data) => data.message);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="h-full w-full flex">
        <div tw="flex h-full">
          <img
            alt=""
            style={{ objectFit: 'cover' }}
            tw="absolute inset-0 w-full h-full"
            src={`${SITE}/static/images/og-bg.png`}
          />
          <div tw="flex items-center justify-center w-full h-full">
            <div tw="text-[64px] text-white text-center mx-20">{title}</div>
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
