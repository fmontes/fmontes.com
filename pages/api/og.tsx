import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

const font = fetch(new URL('../../assets/Poppins-SemiBold.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
);

export default async function handler(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')
            : 'Freddy Montes - Frontend Developer';

        const fontData = await font;

        return new ImageResponse(
            (
                <div tw="h-full w-full flex">
                    <div tw="flex h-full">
                        <img
                            alt=""
                            style={{ objectFit: "cover" }}
                            tw="absolute inset-0 w-full h-full"
                            src="https://fmontes.com/images/og-bg.png"
                        />
                        <div tw="flex items-center justify-center w-full h-full">
                            <div tw="text-[64px] text-white text-center mx-20">
                                {title}
                            </div>
                        </div>
                    </div>
                </div>

            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Poppins',
                        data: fontData,
                        style: 'normal',
                        weight: 500
                    },
                ],
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}


