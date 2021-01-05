function Nav(): JSX.Element {
    return (
        <nav className="flex flex-wrap mt-4 lg:flex-col">
            <a className="nav__link" href="#">
                Blog
            </a>
            <a className="nav__link" href="#">
                Uses
            </a>
            <a className="nav__link" href="#">
                Portfolio
            </a>
            <a className="nav__link" href="#">
                Talks
            </a>
            <a className="nav__link" href="#">
                Contact
            </a>
        </nav>
    );
}

export default Nav;
