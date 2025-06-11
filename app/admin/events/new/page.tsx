import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { EventForm } from "@/components/admin/event-form"

export const metadata = {
  title: "Add New Event | Admin Dashboard",
  description: "Create a new event or speaking engagement",
}

export default function NewEventPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Add New Event</h1>
          <p className="text-muted-foreground">Create a new event or speaking engagement</p>
        </div>
      </div>

      <EventForm eventTypes={eventTypes} eventRoles={eventRoles} />
    </div>
  )
}
