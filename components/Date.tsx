import { useRouter } from 'next/router';

import { parseISO, format } from 'date-fns';
import es from 'date-fns/locale/es';

function Date({ date, locale }: { date: string; locale?: string }): JSX.Element {
    const router = useRouter();

    if (!locale) {
        locale = router.locale || 'en';
    }

    if (!date) {
        return null;
    }

    return (
        <time>
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
