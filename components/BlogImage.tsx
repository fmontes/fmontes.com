import Image from 'next/image';

import TechIcon from '@components/TechIcon';

function BlogImage({
    category,
    cover,
    type,
    width,
    height
}: {
    category: string;
    cover: string;
    type: string;
    width: string;
    height?: string;
}): JSX.Element {
    const isMDX = type === 'mdx';
    const imageUrl = isMDX ? `/images/blog/${cover}` : cover;

    const image = ['relative', 'rounded-sm', 'overflow-hidden', 'flex-shrink-0'];
    const fallback = [
        'bg-gradient-to-tr',
        'from-blue-500',
        'to-blue-800',
        'flex items-center',
        'justify-center',
        'flex-shrink-0'
    ];

    if (width) {
        image.push(width);
        fallback.push(width);
    }

    height = height || 'h-48';

    if (height) {
        image.push(height);
        fallback.push(height);
    }

    return (
        <>
            {cover ? (
                <div className={image.join(' ')}>
                    <Image layout="fill" objectFit="cover" src={imageUrl} />
                </div>
            ) : (
                <div className={fallback.join(' ')}>
                    <TechIcon size={64} type={category} white={true} />
                </div>
            )}
        </>
    );
}

export default BlogImage;
