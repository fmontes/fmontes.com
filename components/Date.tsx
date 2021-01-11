import { useRouter } from 'next/router';

import { parseISO, format } from 'date-fns';
import es from 'date-fns/locale/es';

function Date(props: { date: string }): JSX.Element {
    const { locale } = useRouter();

    return (
        <time>
            {format(
                parseISO(props.date),
                'MMMM dd, yyyy',
                locale === 'es' && {
                    locale: es
                }
            )}
        </time>
    );
}

export default Date;
