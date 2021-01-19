type Props = {
    type: string;
};

const map = {
    angular: 'angular',
    gatsby: 'gatsby',
    react: 'react',
    nextjs: 'nextjs'
};

function BlogIcon({ type }: Props): JSX.Element {
    const item = map[type] || 'fmontes';
    return <img alt={item} src={`/images/_logos/${item}.svg`} width="32" />;
}

export default BlogIcon;
