import { getBlogPosts } from "@/lib/api"
import { BlogCard } from "@/components/blog-card"

export async function BlogPosts() {
  const posts = await getBlogPosts()

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          image={post.image}
          slug={post.slug}
          category={post.category}
          readTime={post.readTime}
        />
      ))}
    </div>
  )
}
