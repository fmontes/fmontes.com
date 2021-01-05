function BlogItem(): JSX.Element {
    return (
        <article className="border-gray-200 border-solid border-2 hover:bg-blue-50 duration-200 hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1">
            <a className="block no-underline p-6" href="#">
                <div className="flex justify-between items-center mb-4">
                    <img alt="Angular" src="/images/angular.svg" width="32" />
                    <time className="text-sm">November 27, 2020</time>
                </div>
                <h2 className="mt-0 mb-2 text-lg leading-9">
                    How to manage Angular state in your components
                </h2>
                <p className="mt-2">
                    In this tutorial, I will explain how to manage your components state with
                    @ngrx/component-store.
                </p>
            </a>
        </article>
    );
}

export default BlogItem;
