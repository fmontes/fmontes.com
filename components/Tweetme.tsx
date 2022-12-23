import Image from 'next/image'

import useTranslation from '@utils/i18n/hooks';

function Tweetme(): JSX.Element {
    const t = useTranslation();

    return (
        <div className="not-prose border-2 border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-800 p-6 rounded flex mt-16 ">
            <div className="flex gap-4 border-r-2 pr-6 mr-6 border-blue-300">
                <Image alt="Twitter" height="48" src="/images/social-icons/twitter.svg" width="48" />
                <p
                    dangerouslySetInnerHTML={{ __html: t('post_blog_action') }}
                    className="leading-normal"
                />
            </div>
            <a
                className="inline-block dark:bg-cyan bg-blue-900 font-bold px-4 py-2 rounded-md dark:text-blue-800 text-white text-bold flex-shrink-0 self-center"
                href="https://twitter.com/compose/tweet?text=@fmontes"
                rel="noreferrer"
                target={'_blank'}
            >
                Tweet Me
            </a>
        </div>
    );
}

export default Tweetme;
