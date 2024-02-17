import { Nav } from './Nav';
import { Logo } from './Logo';
// import Translate from './Translate';

// import SocialMediaMenu from '@components/SocialMediaMenu';

export function Header(): JSX.Element {
  return (
    <>
      <header>
        <div className="lg:flex lg:justify-between lg:items-center">
          <Logo />

          <div className="flex flex-col gap-3 items-center fixed z-20 top-0 right-0 lg:flex-row lg:static lg:gap-6">
            {/* <Nav /> */}
            {/* <Translate /> */}
          </div>
        </div>

        <div className="my-3 sm:flex sm:justify-between sm:items-center">
          {/* <SocialMediaMenu /> */}
        </div>
      </header>
    </>
  );
}
