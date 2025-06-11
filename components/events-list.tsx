import { getPastEvents, getUpcomingEvents } from "@/lib/api"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface EventsListProps {
  type: "upcoming" | "past"
}

export async function EventsList({ type }: EventsListProps) {
  const events = type === "upcoming" ? await getUpcomingEvents() : await getPastEvents()

  if (events.length === 0 && type === "upcoming") {
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

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
