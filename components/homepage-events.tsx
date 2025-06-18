import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { getUpcomingEvents } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getAllEvents } from "@/lib/admin-actions/event"

export async function HomepageEvents() {
  const events = (await getAllEvents()).filter((event) => {
    const eventDate = new Date(event.date)
    const today = new Date()
    return eventDate >= today
  })
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .map((event) => ({
    id: event._id,
    title: event.title,
    date: new Date(event.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    location: event.location,
    role: event.role,
    eventUrl: event.eventUrl,
  }))

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No upcoming events scheduled</h3>
        <p className="text-muted-foreground mb-6">Check back soon for new speaking engagements and events.</p>
        <Button className="rounded-full" asChild>
          <Link href="/contact">
            Book for Your Event <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    )
  }

  // Display up to 3 upcoming events
  const displayEvents = events.slice(0, 3)

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {displayEvents.map((event) => (
        <div
          key={event.id}
          className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative p-6 space-y-4">
            <Badge className="mb-2 bg-primary hover:bg-primary/90">{event.role}</Badge>
            <h3 className="text-xl font-bold">{event.title}</h3>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{event.location}</span>
            </div>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/events">
                View Details <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
