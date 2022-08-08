function Footer(): JSX.Element {
    return (
        <div className="main prose dark:prose-dark text-center mt-24">
            <p>
                Copyright © {new Date().getFullYear()}. Design and code by myself with Next.js.{' '}
                <a href="https://github.com/fmontes/fmontes.com">Fork it</a> and create yours
            </p>
        </div>
    );
}

export default Footer;
