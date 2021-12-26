type Props = {
    type: string;
    size?: string | number;
    white?: boolean;
    // eslint-disable-next-line no-unused-vars
    fallback?: (type: string) => JSX.Element;
};

const map = {
    Angular: 'angular',
    Gatsby: 'gatsby',
    ReactJS: 'react',
    NextJS: 'nextjs',
    Dragula: 'dragula',
    RxJS: 'rxjs',
    SASS: 'sass',
    StencilJS: 'stencil',
    CSS: 'css'
};

function TechIcon({ type, size, white, fallback }: Props): JSX.Element {
    const item = map[type];

    if (!item) {
        if (fallback) {
            return fallback(type);
        }

        return (
            <div className="not-prose">
                <img
                    alt="Freddy Montes - Web Developer"
                    className={white ? 'brightness-0 invert' : ''}
                    height={size || '32'}
                    src={`/images/_logos/fmontes.svg`}
                    width={size || '32'}
                />
            </div>
        );
    }

    return (
        <div className="not-prose">
            <img
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
