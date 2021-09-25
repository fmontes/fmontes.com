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
                    bold ? 'text-bold' : '',
                    code ? 'text-code' : '',
                    italic ? 'text-italic' : '',
                    strikethrough ? 'text-strikeout' : '',
                    underline ? 'text-underline' : ''
                ].join(' ')}
                style={color !== 'default' ? { color } : {}}
            >
                {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
            </span>
        );
    });
};
