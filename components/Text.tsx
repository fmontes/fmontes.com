type Props = {
    text: {
        text: {
            content: string;
            link: {
                url: string;
            };
        };
        annotations: {
            bold: boolean;
            code: boolean;
            color: string;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        };
    }[];
};

export const Text = ({ text }: Props): JSX.Element => {
    if (!text) {
        return null;
    }
    return (
        <>
            {text.map((value, key) => {
                const {
                    annotations: { bold, code, color, italic, strikethrough, underline },
                    text
                } = value;

                return (
                    <span
                        key={key}
                        className={[
                            bold ? 'font-bold' : '',
                            code ? 'font-mono text-red-600 dark:text-red-400 bg-slate-100 dark:bg-gray-800 py-1 px-2 rounded' : '',
                            italic ? 'italic' : '',
                            strikethrough ? 'line-through' : '',
                            underline ? 'underline' : ''
                        ].join(' ')}
                        style={color !== 'default' ? { color } : {}}
                    >
                        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
                    </span>
                );
            })}
        </>
    );
};
