import { getContent } from "@/utils/content";

export default async function Page({ params }) {
  const [slug] = params.slug;

  if (!slug) {
    return null;
  }

  const data = await getContent({
    slug,
    locale: params.lang,
    type: 'pages'
  })

  return (
    <div>
      <h1>{data.frontMatter.title}</h1>
    </div>
  );
}