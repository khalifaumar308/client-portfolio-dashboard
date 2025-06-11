import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { EventForm } from "@/components/admin/event-form"

export const metadata = {
  title: "Edit Event | Admin Dashboard",
  description: "Edit an existing event or speaking engagement",
}

interface EditEventPageProps {
  params: {
    id: string
  }
}

export default function EditEventPage({ params }: EditEventPageProps) {
  // In a real app, this would fetch the event from an API
  // For demo purposes, we'll use mock data

  // Mock event data
  const event = {
    id: params.id,
    title: "Fintech Summit 2023",
    description: "A major fintech industry event focusing on the latest trends and innovations.",
    date: "June 15, 2023",
    location: "New York, USA",
    type: "Conference",
    role: "Keynote Speaker",
    eventUrl: "https://example.com/event1",
    image: "/fintech-workshop.png",
  }

  // Mock data for event types and roles
  const eventTypes = [
    { name: "Conference", value: "Conference" },
    { name: "Workshop", value: "Workshop" },
    { name: "Webinar", value: "Webinar" },
    { name: "Panel", value: "Panel" },
    { name: "Summit", value: "Summit" },
    { name: "Forum", value: "Forum" },
    { name: "Symposium", value: "Symposium" },
  ]

  const eventRoles = [
    { name: "Keynote Speaker", value: "Keynote Speaker" },
    { name: "Panelist", value: "Panelist" },
    { name: "Moderator", value: "Moderator" },
    { name: "Speaker", value: "Speaker" },
    { name: "Instructor", value: "Instructor" },
    { name: "Host", value: "Host" },
    { name: "Guest", value: "Guest" },
  ]

  // If event not found, show 404
  if (!event) {
    return notFound()
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" className="mb-2" asChild>
            <Link href="/admin/events">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Edit Event</h1>
          <p className="text-muted-foreground">Update the details of an existing event</p>
        </div>
      </div>

      <EventForm event={event} eventTypes={eventTypes} eventRoles={eventRoles} />
    </div>
  )
}
