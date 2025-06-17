import Link from "next/link"
import { Calendar, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventsTable } from "@/components/admin/events-table"
import { getAllEvents } from "@/lib/admin-actions/event"

export const metadata = {
  title: "Events Management | Admin Dashboard",
  description: "Manage events and speaking engagements",
}

export default async function EventsPage() {
  const events = await getAllEvents()
  console.log("Fetched events:", events)
  // Mock data
  const upcomingEvents = [
    {
      id: "1",
      title: "Fintech Summit 2023",
      date: "June 15, 2023",
      location: "New York, USA",
      type: "Conference",
      role: "Keynote Speaker",
      eventUrl: "https://example.com/event1",
      image: "/fintech-workshop.png",
      description: "A major fintech industry event focusing on the latest trends and innovations.",
    },
    {
      id: "2",
      title: "Future of Banking Conference",
      date: "July 22, 2023",
      location: "London, UK",
      type: "Conference",
      role: "Panelist",
      eventUrl: "https://example.com/event2",
      image: "/payments-summit.png",
      description: "Exploring the evolving landscape of banking and financial services.",
    },
    {
      id: "3",
      title: "Digital Finance Forum",
      date: "August 10, 2023",
      location: "Singapore",
      type: "Forum",
      role: "Moderator",
      eventUrl: "https://example.com/event3",
      image: "/fintech-policy-conference.png",
      description: "A gathering of finance professionals discussing digital transformation.",
    },
    {
      id: "4",
      title: "Blockchain in Finance Workshop",
      date: "September 5, 2023",
      location: "Berlin, Germany",
      type: "Workshop",
      role: "Instructor",
      eventUrl: "https://example.com/event4",
      image: "/fintech-hackathon.png",
      description: "Hands-on workshop exploring blockchain applications in financial services.",
    },
    {
      id: "5",
      title: "Regulatory Innovation Summit",
      date: "October 18, 2023",
      location: "Washington DC, USA",
      type: "Summit",
      role: "Keynote Speaker",
      eventUrl: "https://example.com/event5",
      image: "/virtual-fintech-bootcamp.png",
      description: "Discussing the intersection of regulation and innovation in finance.",
    },
  ]

  const pastEvents = [
    {
      id: "6",
      title: "Financial Inclusion Conference",
      date: "April 12, 2023",
      location: "Mumbai, India",
      type: "Conference",
      role: "Speaker",
      eventUrl: "https://example.com/event6",
      image: "/financial-inclusion-panel.png",
      description: "Addressing challenges and opportunities in financial inclusion.",
    },
    {
      id: "7",
      title: "Payments Innovation Forum",
      date: "March 8, 2023",
      location: "Paris, France",
      type: "Forum",
      role: "Panelist",
      eventUrl: "https://example.com/event7",
      image: "/payments-summit.png",
      description: "Exploring the future of payments and transaction technologies.",
    },
    {
      id: "8",
      title: "Digital Banking Symposium",
      date: "February 22, 2023",
      location: "Tokyo, Japan",
      type: "Symposium",
      role: "Keynote Speaker",
      eventUrl: "https://example.com/event8",
      image: "/fintech-workshop.png",
      description: "Examining the evolution and future of digital banking services.",
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground">Manage your speaking engagements and events</p>
        </div>
        <Button asChild>
          <Link href="/admin/events/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <p className="text-xs text-muted-foreground">
              {upcomingEvents.length === 1 ? "Event" : "Events"} scheduled
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Past Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pastEvents.length}</div>
            <p className="text-xs text-muted-foreground">{pastEvents.length === 1 ? "Event" : "Events"} completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Event</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-1">
                <div className="text-sm font-medium">{upcomingEvents[0].title}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  {upcomingEvents[0].date}
                </div>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">No upcoming events</div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Locations</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set([...upcomingEvents, ...pastEvents].map((event) => event.location)).size}
            </div>
            <p className="text-xs text-muted-foreground">Unique event locations</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="mt-4">
          <EventsTable events={upcomingEvents} />
        </TabsContent>
        <TabsContent value="past" className="mt-4">
          <EventsTable events={pastEvents} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
