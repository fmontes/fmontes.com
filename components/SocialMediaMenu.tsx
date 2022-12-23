import Link from 'next/link';
import Image from 'next/image';

function SocialMediaMenu(): JSX.Element {
    return (
        <div className="flex space-x-3">
            <Link href="https://instagram.com/fmontes" className="p-2" target="_blank">
                <Image
                    alt="Instagram"
                    height="24"
                    src="/images/social-icons/instagram.svg"
                    width="24"
                />
            </Link>

            <Link href="https://twitter.com/fmontes" className="p-2" target="_blank">
                <Image
                    alt="Twitter"
                    height="24"
                    src="/images/social-icons/twitter.svg"
                    width="24"
                />
            </Link>

            <Link href="https://www.youtube.com/channel/UCrv92ZCJjXgI1wK7Ru0rObg?sub_confirmation=1" className="p-2" target="_blank">
                <Image
                    alt="Youtube"
                    height="24"
                    src="/images/social-icons/youtube.svg"
                    width="24"
                />
            </Link>

            <Link href="https://github.com/fmontes" className="p-2" target="_blank">
                <Image
                    alt="Github"
                    height="24"
                    src="/images/social-icons/github.svg"
                    width="24"
                />
            </Link>

            <Link href="https://linkedin.com/in/fmontes/" className="p-2" target="_blank">
                <Image
                    alt="LinkedIn"
                    height="24"
                    src="/images/social-icons/linkedin.svg"
                    width="24"
                />
            </Link>

            <Link href="https://stackoverflow.com/users/3367318/fmontes" className="p-2" target="_blank">
                <Image
                    alt="StackOverflow"
                    height="24"
                    src="/images/social-icons/stackoverflow.svg"
                    width="24"
                />
            </Link>
        </div>
    );
}

export default SocialMediaMenu;
