import { BlogPreview } from "@/components/blog-preview"
import { getAllBlogPosts } from "@/lib/admin-actions/blogPost"

export async function HomepageBlogPosts() {
  const posts = await getAllBlogPosts()

  // Display up to 3 blog posts on the homepage
  const displayPosts = posts.slice(0, 3)

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {displayPosts.map((post) => (
        <BlogPreview
          key={post._id}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          image={post.image}
          category={post.category}
          _id={post._id}
        />
      ))}
    </div>
  )
}
