"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Loader2, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Category {
  name: string
  value: string
}

interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  category: string
  readTime: string
  excerpt: string
  content: string
  image: string
  author: string
}

interface BlogPostFormProps {
  categories: Category[]
  post?: BlogPost
}

export function BlogPostForm({ categories, post }: BlogPostFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [imageUrl, setImageUrl] = useState(post?.image || "")

  const isEditing = !!post

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    data.image = imageUrl
    try {
      const res = await fetch(isEditing ? `/api/blog-posts/${post?.id}` : "/api/blog-posts", {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to save post")
      router.push("/admin/blog")
    } catch (err: any) {
      setError(err.message || "Unknown error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // In a real app, this would upload the file to a storage service
    // For demo purposes, we'll just use a placeholder
    setImageUrl("/blog-concept.png")
  }

  const handleRemoveImage = () => {
    setImageUrl("")
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Blog Post Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter blog post title"
                defaultValue={post?.title || ""}
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                placeholder="Enter a short excerpt"
                defaultValue={post?.excerpt || ""}
                required
                className="min-h-[80px]"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Enter blog post content"
                defaultValue={post?.content || ""}
                required
                className="min-h-[200px]"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <Label htmlFor="category">Category</Label>
                <Select name="category" defaultValue={post?.category || categories[0]?.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="readTime">Read Time</Label>
                <Input
                  id="readTime"
                  name="readTime"
                  placeholder="e.g. 5 min read"
                  defaultValue={post?.readTime || ""}
                  required
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label>Featured Image</Label>
              <div className="space-y-4">
                {imageUrl ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                    <Image src={imageUrl || "/placeholder.svg"} alt="Blog post image" fill className="object-cover" />
                    <Button
                      type="button"
                      size="icon"
                      variant="destructive"
                      className="absolute right-2 top-2"
                      onClick={handleRemoveImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center rounded-lg border border-dashed">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Drag & drop an image or click to browse</p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Input type="file" accept="image/*" onChange={handleImageUpload} className="max-w-xs" />
                  {!imageUrl && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        // Use a placeholder image if no image is uploaded
                        setImageUrl("/blog-concept.png")
                      }}
                    >
                      Use Placeholder
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {error && <div className="text-sm font-medium text-destructive">{error}</div>}

      <div className="flex gap-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? (isEditing ? "Updating..." : "Creating...") : isEditing ? "Update Post" : "Create Post"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/blog")}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
