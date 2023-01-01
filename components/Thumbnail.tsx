import Image from 'next/image';

import TechIcon from '@components/TechIcon';

function Thumbnail({
    category,
    imageUrl,
    width,
    height
}: {
    category?: string;
    imageUrl: string;
    width: string;
    height?: string;
}): JSX.Element {

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
            {imageUrl ? (
                <div className={`${image.join(' ')} not-prose`}>
                    <Image fill src={imageUrl} alt="" style={{ objectFit: "cover" }} />
                </div>
            ) : (
                <div className={fallback.join(' ')}>
                    <TechIcon size={64} type={category} white={true} />
                </div>
            )}
        </>
    );
}

export default Thumbnail;
