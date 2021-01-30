declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtag: any;
    }
}

export const GA_TRACKING_ID = 'UA-2692116-8';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, title: string): void => {
    if (process.env.NODE_ENV === 'production') {
        setTimeout(() => {
            window?.gtag('config', GA_TRACKING_ID, {
                page_location: url,
                page_title: title
            });
        }, 0);
    }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
    action,
    category,
    label,
    value
}: {
    action: string;
    category: string;
    label: string;
    value: string;
}): void => {
    if (process.env.NODE_ENV === 'production') {
        setTimeout(() => {
            window?.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }, 0);
    }
};
