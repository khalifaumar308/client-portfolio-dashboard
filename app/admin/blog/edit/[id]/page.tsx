import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { BlogPostForm } from "@/components/admin/blog-post-form"

export const metadata = {
  title: "Edit Blog Post | Admin Dashboard",
  description: "Edit an existing blog post or article",
}

interface EditBlogPostPageProps {
  params: {
    id: string
  }
}

export default function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  // In a real app, this would fetch the blog post from an API
  // For demo purposes, we'll use mock data

  // Mock blog post data
  const post = {
    id: params.id,
    title: "The Future of Fintech Regulation",
    slug: "/blog/future-of-fintech-regulation",
    date: "May 10, 2023",
    category: "Regulation",
    readTime: "5 min read",
    excerpt: "Exploring the evolving landscape of fintech regulation and its implications for the industry.",
    content: "Full content of the blog post...",
    image: "/fintech-concept.png",
    author: "Samuel Johnson",
  }

  // Mock categories
  const categories = [
    { name: "Regulation", value: "Regulation" },
    { name: "Technology", value: "Technology" },
    { name: "Banking", value: "Banking" },
    { name: "Inclusion", value: "Inclusion" },
    { name: "Innovation", value: "Innovation" },
    { name: "Fintech", value: "Fintech" },
    { name: "Payments", value: "Payments" },
  ]

  // If post not found, show 404
  if (!post) {
    return notFound()
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" className="mb-2" asChild>
            <Link href="/admin/blog">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog Posts
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Edit Blog Post</h1>
          <p className="text-muted-foreground">Update the details of an existing blog post</p>
        </div>
      </div>

      <BlogPostForm post={post} categories={categories} />
    </div>
  )
}
