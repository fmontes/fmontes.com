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

const MDXComponents = {
    a: CustomLink,
    Image,
    Date
};

export default MDXComponents;
