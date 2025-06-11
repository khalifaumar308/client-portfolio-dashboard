import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  category: string
  readTime: string
}

export function BlogCard({ title, excerpt, date, image, slug, category, readTime }: BlogCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary/90">{category}</Badge>
      </div>
      <div className="relative space-y-4 p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold tracking-tight line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        <Link href={slug} className="inline-flex items-center text-sm font-medium text-primary">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
