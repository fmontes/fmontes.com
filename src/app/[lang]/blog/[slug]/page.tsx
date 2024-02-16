export default function Blog({ params }: { params: { slug: string } }) {  
  return <h2>{params.slug}</h2>;
}
