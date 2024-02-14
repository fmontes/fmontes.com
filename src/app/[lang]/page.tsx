export default function Home() {
  return (
    <main className="main mx-auto mt-5">
      <h1
        // dangerouslySetInnerHTML={{ __html: t('bio') }}
        className="text-blue-700 dark:text-cyan text-xl lg:text-2xl my-16 sm:my-20 md:text-center font-normal leading-tight tracking-tight"
      >Hello</h1>

      <div className="prose dark:prose-invert block max-w-full">
        <h2 className="text-2xl font-bold sm:text-3xl tracking-tight sm:leading-tight mb-6">
          {/* {t('latest_blog_posts')} */}
        </h2>
        <section className="flex flex-wrap gap-6 mb-16">
        </section>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-1">
        </div>
        <div className="flex-1">
        </div>
      </div>
    </main>
  );
}