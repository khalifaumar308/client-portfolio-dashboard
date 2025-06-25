import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AnimatedGradient } from "@/components/animated-gradient"
import { EventFilter } from "@/components/event-filter"
import { EventsLoading } from "@/components/events-loading"
import { SpeakingTopicsLoading } from "@/components/speaking-topics-loading"
import { TestimonialsLoading } from "@/components/testimonials-loading"
import { EventsList } from "@/components/events-list"
import { SpeakingTopics } from "@/components/speaking-topics"
import { EventTestimonials } from "@/components/event-testimonials"
import { getEventTypes, getEventRoles } from "@/lib/api"
import { getAllEvents } from "@/lib/admin-actions/event"
import { EventFiltersClient } from "@/components/event-filter-client"

export const metadata = {
  title: "Events & Speaking | Abiola Jimoh",
  description: "Explore Abiola Jimoh's speaking engagements, workshops, and industry events in the fintech space.",
}

export default async function EventsPage() {
  // Fetch data in parallel
  const [allEvents, eventTypesData, eventRolesData] = await Promise.all([
    getAllEvents(),
    getEventTypes(),
    getEventRoles(),
  ])

  // Filter and sort events
  const upcomingEventsData = allEvents
    .filter((event) => {
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
      type: event.type,
      role: event.role,
      eventUrl: event.eventUrl,
      image: event.image || "/placeholder.svg",
      description: event.description,
    }))
  const pastEventsData = allEvents
    .filter((event) => {
      const eventDate = new Date(event.date)
      const today = new Date()
      return eventDate < today
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((event) => ({
      id: event._id,
      title: event.title,
      date: new Date(event.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      location: event.location,
      type: event.type,
      role: event.role,
      eventUrl: event.eventUrl,
      image: event.image || "/placeholder.svg",
      description: event.description,
    }))
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Speaking & Engagements
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Events & <span className="text-primary">Speaking</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Discover where I've been sharing insights on fintech regulation, business growth, and industry trends
              across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEventsData.length > 0 && (
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Next Appearance</h2>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto md:h-full">
                  <Image
                    src={upcomingEventsData[0].image || "/placeholder.svg"}
                    alt={upcomingEventsData[0].title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">
                    {upcomingEventsData[0].role}
                  </Badge>
                </div>
                <div className="relative p-6 md:p-8 flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{upcomingEventsData[0].title}</h3>
                  <p className="text-muted-foreground">{upcomingEventsData[0].description}</p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{upcomingEventsData[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{upcomingEventsData[0].location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{upcomingEventsData[0].type}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Button className="rounded-full" asChild>
                      <Link href={upcomingEventsData[0].eventUrl} target="_blank" rel="noopener noreferrer">
                        Event Details <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="rounded-full" asChild>
                      <Link href="/contact">
                        Book for Your Event <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Tabs and Filters */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="upcoming" className="rounded-full">
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger value="past" className="rounded-full">
                  Past Events
                </TabsTrigger>
              </TabsList>
              <div className="flex flex-wrap gap-3">
                <Suspense fallback={null}>
                  <EventFiltersClient eventTypesData={eventTypesData} eventRolesData={eventRolesData} />
                </Suspense>
              </div>
            </div>

            <TabsContent value="upcoming" className="space-y-8">
              <Suspense fallback={<EventsLoading count={3} />}>
                <EventsList type="upcoming" />
              </Suspense>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <Suspense fallback={<EventsLoading count={6} />}>
                <EventsList type="past" />
              </Suspense>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Speaking Topics</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Popular topics I speak on at conferences, workshops, and industry events.
            </p>
          </div>

          <Suspense fallback={<SpeakingTopicsLoading count={6} />}>
            <SpeakingTopics />
          </Suspense>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Feedback
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Event Testimonials</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              What event organizers and attendees say about my presentations and workshops.
            </p>
          </div>

          <Suspense fallback={<TestimonialsLoading count={3} />}>
            <EventTestimonials />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Invite Me to Speak</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for an expert speaker on fintech regulation, business growth, or financial inclusion for your next
              event? Let's discuss how I can add value to your conference, workshop, or panel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/contact">
                  Book for Your Event <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/services">View My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
