export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ]
}

import BlogPostClient from "./BlogPostClient"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPostClient id={params.id} />
}
