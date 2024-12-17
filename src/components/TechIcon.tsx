import Image from 'next/image';

type Props = {
    type: string;
    size?: number;
    white?: boolean;
    fallback?: (type: string) => React.ReactElement;
};

const map = {
    angular: 'angular',
    gatsby: 'gatsby',
    reactjs: 'react',
    nextjs: 'nextjs',
    rxjs: 'rxjs',
    sass: 'sass',
    stenciljs: 'stencil',
    css: 'css',
    ui: 'ui'
};

function TechIcon({ type, size, white, fallback }: Props): React.ReactElement {
    const item = map[type?.toLowerCase() as keyof typeof map];

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
                    src={`/static/images/_logos/fmontes.svg`}
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
                src={`/static/images/_logos/${item}.svg`}
                width={size || '32'}
            />
        </div>
    );
}

export default TechIcon;