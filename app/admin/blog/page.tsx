"use client"

import Link from "next/link"
import { FileText, Plus } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogPostsTable } from "@/components/admin/blog-posts-table"

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("/api/blog-posts")
        if (!res.ok) throw new Error("Failed to fetch blog posts")
        const data = await res.json()
        setPosts(data)
      } catch (err: any) {
        setError(err.message || "Unknown error")
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

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

      {error && <div className="text-red-500">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
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

          <BlogPostsTable posts={posts} onDelete={async (id: string) => {
            // Call DELETE API
            const res = await fetch(`/api/blog-posts/${id}`, { method: "DELETE" })
            if (res.ok) {
              setPosts((prev) => prev.filter((p: any) => p._id !== id && p.id !== id))
            } else {
              alert("Failed to delete post")
            }
          }} />
        </>
      )}
    </div>
  )
}
