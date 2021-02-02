import Link from 'next/link';

function SocialMediaMenu(): JSX.Element {
    return (
        <div className="flex space-x-6">
            <Link href="//instagram.com/fmontes">
                <a>
                    <img
                        alt="Instagram"
                        height="24"
                        src="/images/social-icons/instagram.svg"
                        width="24"
                    />
                </a>
            </Link>

            <Link href="//twitter.com/fmontes">
                <a>
                    <img
                        alt="Twitter"
                        height="24"
                        src="/images/social-icons/twitter.svg"
                        width="24"
                    />
                </a>
            </Link>

            <Link href="//github.com/fmontes">
                <a>
                    <img
                        alt="Github"
                        height="24"
                        src="/images/social-icons/github.svg"
                        width="24"
                    />
                </a>
            </Link>

            <Link href="//linkedin.com/in/fmontes/">
                <a>
                    <img
                        alt="LinkedIn"
                        height="24"
                        src="/images/social-icons/linkedin.svg"
                        width="24"
                    />
                </a>
            </Link>

            <Link href="//stackoverflow.com/users/3367318/fmontes">
                <a>
                    <img
                        alt="StackOverflow"
                        height="24"
                        src="/images/social-icons/stackoverflow.svg"
                        width="24"
                    />
                </a>
            </Link>
        </div>
    );
}

export default SocialMediaMenu;
