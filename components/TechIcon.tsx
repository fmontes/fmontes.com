import Image from 'next/image';

type Props = {
    type: string;
    size?: number;
    white?: boolean;
    // eslint-disable-next-line no-unused-vars
    fallback?: (type: string) => JSX.Element;
};

const map = {
    angular: 'angular',
    gatsby: 'gatsby',
    reactjs: 'react',
    nextjs: 'nextjs',
    dragula: 'dragula',
    rxjs: 'rxjs',
    sass: 'sass',
    stenciljs: 'stencil',
    css: 'css',
    ui: 'ui'
};

function TechIcon({ type, size, white, fallback }: Props): JSX.Element {
    const item = map[type?.toLowerCase()];

    if (!item) {
        if (fallback) {
            return fallback(type);
        }

        return (
            <div className="not-prose">
                <Image
                    alt="Freddy Montes - Web Developer"
                    className={white ? 'brightness-0 invert' : ''}
                    height={size || 32}
                    src={`/images/_logos/fmontes.svg`}
                    width={size || 32}
                />
            </div>
        );
    }

    return (
        <div className="not-prose">
            <Image
                alt={item}
                className={white ? 'brightness-0 invert' : ''}
                height={size || '32'}
                src={`/images/_logos/${item}.svg`}
                width={size || '32'}
            />
        </div>
    );
}

export default TechIcon;
