import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="group flex flex-col space-y-4 rounded-lg border p-4 shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-video overflow-hidden rounded-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Link href={link} className="inline-flex items-center text-sm font-medium mt-auto">
        View Project <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}
