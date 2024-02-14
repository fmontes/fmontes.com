import { getContent } from "@/utils/content";

export default async function Page({ params }) {
  const data = await getContent({
    slug: params.slug,
    locale: params.lang,
    type: 'pages'
  })

  return (
    <div>
      <h1>{data.frontMatter.title}</h1>
    </div>
  );
}