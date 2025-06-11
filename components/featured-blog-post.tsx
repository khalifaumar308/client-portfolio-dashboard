import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/api-types"

interface FeaturedBlogPostProps {
  post: BlogPost
}

export function FeaturedBlogPost({ post }: FeaturedBlogPostProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:h-full">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="relative p-6 md:p-8 flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-primary hover:bg-primary/90">{post.category}</Badge>
            <span className="text-sm text-muted-foreground">{post.readTime}</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{post.title}</h3>
          <p className="text-muted-foreground">{post.excerpt}</p>
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={post.author?.image || "/placeholder.svg?height=40&width=40"}
                alt={post.author?.name || "Samuel Johnson"}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">{post.author?.name || "Samuel Johnson"}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          <Button className="mt-4 w-fit rounded-full" asChild>
            <Link href={post.slug}>
              Read Article <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
