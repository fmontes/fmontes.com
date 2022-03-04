import { refractor } from 'refractor';
import { toHtml } from 'hast-util-to-html';
import { Node } from 'hast-util-to-html/lib/types';

export type CodeProps = {
    lang: string;
    code: string;
};

export function Code({ code, lang }: CodeProps) {
    const tree = refractor.highlight(code, lang);
    return <pre dangerouslySetInnerHTML={{ __html: toHtml(tree as Node) }} />;
}
