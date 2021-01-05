import Image from 'next/image';
import Nav from './Nav';

const AVATAR_SIZE = 60;

function Header(): JSX.Element {
    return (
        <>
            <header className="flex items-center justify-between">
                <div className="flex lg:flex-col">
                    <div className="flex-shrink-0 mr-4" style={{ width: `${AVATAR_SIZE}px` }}>
                        <Image
                            className="rounded-full"
                            height={60}
                            src="/images/avatar.jpg"
                            width={60}
                        />
                    </div>
                    <div>
                        <h3 className="font-bold tracking-tight m-0 text-xl">Freddy Montes</h3>
                        <p className="mt-0 mb-3">
                            Frontend Developer with a graphic design degree. UX/UI and Javascript
                            crafter. <a href="/about-me">More</a>
                        </p>
                        <p className=" text-blue-900 inline-flex items-center m-0 pr-3 pl-1 text-sm bg-blue-100 rounded-full">
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
                    </div>
                </div>
            </header>

            <Nav />
        </>
    );
}

export default Header;
