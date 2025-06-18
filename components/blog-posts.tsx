import { BlogCard } from "@/components/blog-card"
import { getAllBlogPosts } from "@/lib/admin-actions/blogPost"

export async function BlogPosts() {
  const posts = await getAllBlogPosts()
  console.log(posts, 'posts in BlogPosts component')
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post._id}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          image={post.image}
          category={post.category}
          readTime={post.readTime}
          _id={post._id}
        />
      ))}
    </div>
  )
}
