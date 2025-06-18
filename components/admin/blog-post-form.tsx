"use client";

import type React from "react";
import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogFormServer from "./forms/blog.form";
import { createBlogPostT } from "@/lib/admin-actions/blogPost";
import UploadImage from "./UploadImage";

interface Category {
  name: string;
  value: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

interface BlogPostFormProps {
  categories: Category[];
  post?: BlogPost;
}

export function BlogPostForm({ categories, post }: BlogPostFormProps) {
  const [state, formAction, pending] = useActionState(createBlogPostT, null);
  const router = useRouter();
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState(post?.image || "");
  const today = new Date();
  const formatted = today.toISOString().split('T')[0];
  const [finalBlog, setFinalBlog] = useState<BlogPost>(
    post || {
      id: "",
      title: "",
      slug: "",
      //save date as the current locale date
      date: formatted,
      category: categories[0]?.value || "",
      readTime: "",
      excerpt: "",
      content: "",
      image: "",
      author: "",
    }
  );
  const isEditing = !!post;

  return (
    <div className="max-w-2xl mx-auto w-full px-2 sm:px-4 md:px-0 py-8">
      <Card className="shadow-lg border-none bg-white/90 dark:bg-background/80 rounded-2xl">
        <CardContent className="pt-8 pb-6 px-4 sm:px-8">
          <form className="space-y-8" autoComplete="off" action={formAction}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-semibold">
                  Blog Post Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter blog post title"
                  value={finalBlog.title}
                  onChange={(e) =>
                    setFinalBlog({ ...finalBlog, title: e.target.value })
                  }
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="excerpt" className="font-semibold">
                  Excerpt <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  placeholder="Enter a short excerpt"
                  value={finalBlog.excerpt}
                  onChange={(e) =>
                    setFinalBlog({ ...finalBlog, excerpt: e.target.value })
                  }
                  required
                  className="min-h-[80px] rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content" className="font-semibold">
                  Content <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Enter blog post content"
                  value={finalBlog.content}
                  onChange={(e) =>
                    setFinalBlog({ ...finalBlog, content: e.target.value })
                  }
                  required
                  className="min-h-[200px] rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category" className="font-semibold">
                    Category <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    name="category"
                    value={finalBlog.category}
                    onValueChange={(value) =>
                      setFinalBlog({ ...finalBlog, category: value })
                    }
                  >
                    <SelectTrigger className="rounded-lg">
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
                <div className="grid gap-2">
                  <Label htmlFor="readTime" className="font-semibold">
                    Read Time <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="readTime"
                    name="readTime"
                    placeholder="e.g. 5 min read"
                    value={finalBlog.readTime}
                    onChange={(e) =>
                      setFinalBlog({ ...finalBlog, readTime: e.target.value })
                    }
                    required
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label className="font-semibold">Featured Image</Label>
                {/* You can add an UploadImage component here if you have one, or use a simple file input */}
                {/* <UploadImage onUpload={setImageUrl} /> */}
                <UploadImage onUpload={setImageUrl} />
                {imageUrl && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border mt-2">
                    <Image
                      src={imageUrl}
                      alt="Event image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {/* For now, just use a text input for the image URL */}
                <Input
                  id="image"
                  name="image"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                    setFinalBlog({ ...finalBlog, image: e.target.value });
                  }}
                  className="rounded-lg mt-2"
                />
              </div>
            </div>
            <input
              type="hidden"
              name="blog"
              value={JSON.stringify({ ...finalBlog, image: imageUrl })}
            />
            {error && (
              <div className="text-sm font-medium text-destructive mt-2">
                {error}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button type="submit" className="w-full rounded-full" disabled={pending}>
                {isEditing ? "Update Blog" : "Create Blog"}
              </Button>
              {pending && <span className="ml-2 text-sm text-muted-foreground">Saving...</span>}
              <Button
                type="button"
                variant="outline"
                className="rounded-full"
                onClick={() => router.push("/admin/blog")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
