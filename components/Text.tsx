export const Text = ({ text }) => {
    if (!text) {
        return null;
    }
    return text.map((value, key) => {
        const {
            annotations: { bold, code, color, italic, strikethrough, underline },
            text
        } = value;

        return (
            <span
                key={key}
                className={[
                    bold ? 'font-bold' : '',
                    code ? 'font-mono text-red-600 bg-gray-200 py-1 px-2 rounded' : '',
                    italic ? 'italic' : '',
                    strikethrough ? 'line-through' : '',
                    underline ? 'underline' : ''
                ].join(' ')}
                style={color !== 'default' ? { color } : {}}
            >
                {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
            </span>
        );
    });
};
