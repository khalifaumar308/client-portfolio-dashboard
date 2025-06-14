import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { useEffect, useState } from "react"

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
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/blog-posts/${params.id}`)
        if (!res.ok) throw new Error("Not found")
        const data = await res.json()
        setPost(data)
      } catch {
        setPost(null)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [params.id])

  const categories = [
    { name: "Regulation", value: "Regulation" },
    { name: "Technology", value: "Technology" },
    { name: "Banking", value: "Banking" },
    { name: "Inclusion", value: "Inclusion" },
    { name: "Innovation", value: "Innovation" },
    { name: "Fintech", value: "Fintech" },
    { name: "Payments", value: "Payments" },
  ]

  if (loading) return <div>Loading...</div>
  if (!post) return notFound()

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
