import useTranslation from '@utils/i18n/hooks';
import Nav from './Nav';
import Logo from './Logo';
import Translate from './Translate';

import SocialMediaMenu from '@components/SocialMediaMenu';

function Header(): JSX.Element {
    const t = useTranslation();

    return (
        <>
            <header>
                <div className="sm:flex sm:justify-between sm:items-center">
                    <Logo />
                    <Nav />
                </div>

                <div className="my-3 sm:flex sm:justify-between sm:items-center">
                    {/* <div className="flex items-center mb-3 sm:mb-0">
                        <p className="text-blue-900 inline-flex items-center m-0 mr-3 pr-3 pl-1 text-sm bg-blue-100 rounded-full">
                            <svg
                                baseProfile="tiny"
                                className="scale-75 transform"
                                height="24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="fill-current"
                                    d="M10.368 19.102c.35 1.05 1.01 1.086 1.478.086l5.31-11.375c.467-1.002.034-1.434-.967-.967L4.812 12.154c-1 .467-.963 1.13.085 1.48L9 15l1.368 4.102z"
                                />
                            </svg>{' '}
                            Costa Rica (GMT-6)
                        </p>
                        <Translate />
                    </div> */}
                    <SocialMediaMenu />
                </div>
            </header>
        </>
    );
}

export default Header;
