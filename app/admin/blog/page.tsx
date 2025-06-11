import Link from "next/link"
import { FileText, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogPostsTable } from "@/components/admin/blog-posts-table"

export const metadata = {
  title: "Blog Management | Admin Dashboard",
  description: "Manage blog posts and articles",
}

export default function BlogPage() {
  // Mock data
  const posts = [
    {
      id: "1",
      title: "The Future of Fintech Regulation",
      slug: "/blog/future-of-fintech-regulation",
      date: "May 10, 2023",
      category: "Regulation",
      readTime: "5 min read",
      excerpt: "Exploring the evolving landscape of fintech regulation and its implications for the industry.",
      content: "Full content of the blog post...",
      image: "/fintech-concept.png",
      author: "Samuel Johnson",
    },
    {
      id: "2",
      title: "Blockchain in Financial Services",
      slug: "/blog/blockchain-in-financial-services",
      date: "April 22, 2023",
      category: "Technology",
      readTime: "8 min read",
      excerpt: "How blockchain technology is transforming the financial services industry.",
      content: "Full content of the blog post...",
      image: "/interconnected-blocks.png",
      author: "Samuel Johnson",
    },
    {
      id: "3",
      title: "Digital Banking Trends for 2023",
      slug: "/blog/digital-banking-trends-2023",
      date: "March 15, 2023",
      category: "Banking",
      readTime: "6 min read",
      excerpt: "The top digital banking trends that will shape the industry in 2023.",
      content: "Full content of the blog post...",
      image: "/digital-banking-app.png",
      author: "Samuel Johnson",
    },
    {
      id: "4",
      title: "Financial Inclusion Through Technology",
      slug: "/blog/financial-inclusion-through-technology",
      date: "February 28, 2023",
      category: "Inclusion",
      readTime: "7 min read",
      excerpt: "How technology is helping to bridge the gap in financial inclusion.",
      content: "Full content of the blog post...",
      image: "/financial-inclusion.png",
      author: "Samuel Johnson",
    },
    {
      id: "5",
      title: "The Rise of Embedded Finance",
      slug: "/blog/rise-of-embedded-finance",
      date: "January 12, 2023",
      category: "Innovation",
      readTime: "4 min read",
      excerpt: "Understanding the growing trend of embedded finance and its impact on the industry.",
      content: "Full content of the blog post...",
      image: "/embedded-finance-concept.png",
      author: "Samuel Johnson",
    },
  ]

  // Mock categories
  const categories = [
    { name: "Regulation", slug: "regulation", count: 1 },
    { name: "Technology", slug: "technology", count: 1 },
    { name: "Banking", slug: "banking", count: 1 },
    { name: "Inclusion", slug: "inclusion", count: 1 },
    { name: "Innovation", slug: "innovation", count: 1 },
  ]

  // Get category counts
  const categoryCounts = categories.reduce(
    (acc, category) => {
      acc[category.name] = category.count
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-muted-foreground">Manage your blog posts and articles</p>
        </div>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Post
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{posts.length}</div>
            <p className="text-xs text-muted-foreground">{posts.length === 1 ? "Post" : "Posts"} published</p>
          </CardContent>
        </Card>

        {categories.slice(0, 3).map((category) => (
          <Card key={category.slug}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{categoryCounts[category.name] || 0}</div>
              <p className="text-xs text-muted-foreground">
                {categoryCounts[category.name] === 1 ? "Post" : "Posts"} in this category
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <BlogPostsTable posts={posts} />
    </div>
  )
}
