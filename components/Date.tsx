import { useRouter } from 'next/router';

import { parseISO, format } from 'date-fns';
import es from 'date-fns/locale/es';

function Date({
    date,
    locale,
    className
}: {
    date: string;
    locale?: string;
    className?: string;
}): JSX.Element {
    const router = useRouter();

    if (!locale) {
        locale = router.locale || 'en';
    }

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

export default Date;
