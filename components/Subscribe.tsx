function Subscribe() {
    return (
        <section className="bg-cyan text-cyan-900 rounded-xl p-8">
            <h2 className="text-lg leading-tight mb-2 font-bold">Subscribe to my newsletter</h2>
            <p className="mb-6">
                Get emails about web development, tech, and early access to new articles.
            </p>

            <form
                action="https://www.getrevue.co/profile/fmontes/add_subscriber"
                className="flex flex-col gap-4"
                id="revue-form"
                method="post"
                name="revue-form"
                target="_blank"
            >
                <input
                    className="border-b-4 border-solid border-cyan-600 block w-full py-2 px-4 bg-cyan-200 text-lg font-bold placeholder:text-cyan-600 mb"
                    id="member_email"
                    name="member[email]"
                    placeholder="Your email address..."
                    type="email"
                />
                <div className="flex gap-6 items-center">
                    <input
                        className="bg-cyan-900 text-white text-md font-bold px-6 py-2 rounded-lg"
                        id="member_submit"
                        name="member[subscribe]"
                        type="submit"
                        value="Subscribe"
                    />
                    <small className="md:text-base">
                        Swear on the the that no spam will be send!
                    </small>
                </div>
            </form>
        </section>
    );
}

export default Subscribe;
