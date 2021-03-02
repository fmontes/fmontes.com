type Props = {
    type: string;
    size?: string;
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
    CSS: 'CSS'
};

function TechIcon({ type, size, fallback }: Props): JSX.Element {
    const item = map[type];

    if (!item) {
        if (fallback) {
            return fallback(type);
        }

        return (
            <img
                alt="Freddy Montes - Web Developer"
                height={size || '32'}
                src={`/images/_logos/fmontes.svg`}
                width={size || '32'}
            />
        );
    }

    return (
        <img
            alt={item}
            height={size || '32'}
            src={`/images/_logos/${item}.svg`}
            width={size || '32'}
        />
    );
}

export default TechIcon;
