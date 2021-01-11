import useTranslation from '@utils/i18n';

function Nav(): JSX.Element {
    const t = useTranslation();

    return (
        <nav className="flex flex-wrap mt-4 lg:flex-col">
            <a className="nav__link" href="#">
                {t('home')}
            </a>
            <a className="nav__link" href="#">
                {t('uses')}
            </a>
            <a className="nav__link" href="#">
                {t('portfolio')}
            </a>
            <a className="nav__link" href="#">
                {t('talks')}
            </a>
            <a className="nav__link" href="#">
                {t('contact')}
            </a>
        </nav>
    );
}

export default Nav;
