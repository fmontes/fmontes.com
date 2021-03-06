import Link from 'next/link';
import Image from 'next/image';
import Date from './Date';

type LinkProps = {
    href: string;
};

const CustomLink = (props: LinkProps): JSX.Element => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props} />
            </Link>
        );
    }

    return <a rel="noopener noreferrer" target="_blank" {...props} />;
};

const CustomImage = (props: any): JSX.Element => {
    return (
        <div className="text-center">
            <Image {...props} />
        </div>
    );
};

const MDXComponents = {
    a: CustomLink,
    Image: CustomImage,
    Date
};

export default MDXComponents;
