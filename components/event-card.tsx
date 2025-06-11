import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Event {
  title: string
  description: string
  date: string
  location: string
  image: string
  eventUrl: string
  type: string
  role: string
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">{event.role}</Badge>
      </div>
      <div className="relative space-y-4 p-6">
        <h3 className="text-xl font-bold tracking-tight line-clamp-2">{event.title}</h3>
        <p className="text-muted-foreground line-clamp-3">{event.description}</p>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{event.type}</Badge>
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={event.eventUrl} target="_blank" rel="noopener noreferrer">
            Event Details <ExternalLink className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
