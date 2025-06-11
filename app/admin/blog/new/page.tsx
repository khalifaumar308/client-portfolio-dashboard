import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BlogPostForm } from "@/components/admin/blog-post-form"

export const metadata = {
  title: "Add New Blog Post | Admin Dashboard",
  description: "Create a new blog post or article",
}

export default function NewBlogPostPage() {
  // Mock data for blog categories
  const categories = [
    { name: "Regulation", value: "Regulation" },
    { name: "Technology", value: "Technology" },
    { name: "Banking", value: "Banking" },
    { name: "Inclusion", value: "Inclusion" },
    { name: "Innovation", value: "Innovation" },
    { name: "Fintech", value: "Fintech" },
    { name: "Payments", value: "Payments" },
  ]

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
          <h1 className="text-3xl font-bold tracking-tight">Add New Blog Post</h1>
          <p className="text-muted-foreground">Create a new blog post or article</p>
        </div>
      </div>

      <BlogPostForm categories={categories} />
    </div>
  )
}
