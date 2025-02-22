import Image from 'next/image';
import Link from 'next/link';

const AVATAR_SIZE = 60;

export function Logo(): React.ReactElement {
    return (
        <Link href="/" className="inline-flex items-center no-underline">
            <div className="flex-shrink-0 mr-4" style={{ height: `${AVATAR_SIZE}px` }}>
                <Image
                    alt="Freddy Montes - Frontend Developer, Designer and Teacher"
                    className="rounded-full"
                    height={AVATAR_SIZE}
                    src="/static/images/avatar.jpg"
                    width={AVATAR_SIZE}
                />
            </div>
            <div className="flex flex-col dark:text-blue-50 text-blue-800">
                <h2 className="font-bold tracking-tight m-0 text-lg sm:text-xl leading-tight sm:leading-tight">
                    Freddy Montes
                </h2>
                <p className="text-sm sm:text-md leading-tight sm:leading-tight">
                    Technical Product Manager
                </p>
            </div>
        </Link>
    );
}
