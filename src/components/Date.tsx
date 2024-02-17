import { parseISO, format } from 'date-fns';
import es from 'date-fns/locale/es';

export function Date({
    date,
    locale,
    className
}: {
    date: string;
    locale?: string;
    className?: string;
}): JSX.Element | null {
    if (!date) {
        return null;
    }

    return (
        <time className={className}>
            {format(
                parseISO(date),
                'MMMM dd, yyyy',
                locale === 'es' && {
                    locale: es
                }
            )}
        </time>
    );
}