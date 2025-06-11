import { getBlogPosts } from "@/lib/api"
import { BlogPreview } from "@/components/blog-preview"

export async function HomepageBlogPosts() {
  const posts = await getBlogPosts()

  // Display up to 3 blog posts on the homepage
  const displayPosts = posts.slice(0, 3)

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {displayPosts.map((post) => (
        <BlogPreview
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          image={post.image}
          slug={post.slug}
          category={post.category}
        />
      ))}
    </div>
  )
}
