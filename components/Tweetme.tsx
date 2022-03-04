import useTranslation from '@utils/i18n/hooks';

function Tweetme(): JSX.Element {
    const t = useTranslation();

    return (
        <div className="not-prose border-2 border-blue-300 bg-blue-50 p-6 rounded flex mt-16 ">
            <div className="flex gap-4 border-r-2 pr-6 mr-6 border-blue-300">
                <img alt="Twitter" height="48" src="/images/social-icons/twitter.svg" width="48" />
                <p
                    dangerouslySetInnerHTML={{ __html: t('post_blog_action') }}
                    className="leading-normal"
                />
            </div>
            <a
                className="inline-block bg-blue-200 font-bold px-4 py-2 rounded-md text-blue-800 text-bold flex-shrink-0 self-center"
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