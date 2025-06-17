"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Loader2, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/admin/date-picker"
import { addEvent } from "@/lib/admin-actions/event"
import EventFormServer from "./forms/event.form"
import { NewEvent } from "@/lib/models/Event"

interface EventType {
  name: string
  value: string
}

interface EventRole {
  name: string
  value: string
}

interface Event {
  _id: string
  title: string
  description: string
  date: string
  location?: string
  image: string
  eventUrl: string
  type: string
  role: string
}

interface EventFormProps {
  eventTypes: EventType[]
  eventRoles: EventRole[]
  event?: Event
}

export function EventForm({ eventTypes, eventRoles, event }: EventFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [imageUrl, setImageUrl] = useState(event?.image || "")
  const [date, setDate] = useState<Date | undefined>(event?.date ? new Date(event.date) : undefined)
  const [finalEvent, setFinalEvent] = useState<NewEvent>(event||{
    title: "",
    description: "",
    date: "",
    location: "",
    image: "myImageUrl",
    eventUrl: "",
    type: eventTypes[0]?.value || "",
    role: eventRoles[0]?.value || "",
  })

  const isEditing = !!event

  // async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   setError("")
  //   const eventData = new FormData(e.currentTarget)
  //   const title = eventData.get("title") as string
  //   const description = eventData.get("description") as string
  //   const location = eventData.get("location") as string
  //   const type = eventData.get("type") as string
  //   const role = eventData.get("role") as string
  //   const eventUrl = eventData.get("eventUrl") as string
  //   const dateStr = eventData.get("date") as string
  //   const date = new Date(dateStr)
  //   const image = imageUrl || "/placeholder.svg" // Use placeholder if no image uploaded
  //   if (!title || !description || !date || !type || !role || !eventUrl) {
  //     setError("Please fill in all required fields.")
  //     setIsLoading(false)
  //     return
  //   }
  //   await addEvent({
  //     title,
  //     description,
  //     date: date.toISOString(),
  //     location,
  //     type,
  //     role,
  //     eventUrl,
  //     image,
  //   })

  //   // In a real app, this would call an API to save the event
  //   setTimeout(() => {
  //     // Simulate success
  //     router.push("/admin/events")
  //     setIsLoading(false)
  //   }, 1500)
  // }

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (!file) return

  //   // In a real app, this would upload the file to a storage service
  //   // For demo purposes, we'll just use a placeholder
  //   setImageUrl("/community-event.png")
  // }

  // const handleRemoveImage = () => {
  //   setImageUrl("")
  // }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <div className="gr_ gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter event title"
                value={finalEvent?.title || ""}
                onChange={(e) => setFinalEvent({ ...finalEvent, title: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter event description"
                value={finalEvent?.description || ""}
                onChange={(e) => setFinalEvent({ ...finalEvent, description: e.target.value })}
                required
                className="min-h-[120px]"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <Label htmlFor="date">Event Date</Label>
                {/* <DatePicker date={date} setDate={setDate} /> */}
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={finalEvent?.date || ""}
                  onChange={(e) => setFinalEvent({ ...finalEvent, date: e.target.value })}
                  required
                />
                {/* <input type="hidden" name="date" value={date?.toISOString() || ""} /> */}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, Country"
                  defaultValue={finalEvent?.location || ""}
                  onChange={(e) => setFinalEvent({ ...finalEvent, location: e.target.value })}
                  required
                />
              </div>
            </div>   
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <Label htmlFor="type">Event Type</Label>
                <Select name="type" value={finalEvent?.type || eventTypes[0]?.value} onValueChange={(val) => setFinalEvent({ ...finalEvent, type: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="role">Your Role</Label>
                <Select name="role" value={finalEvent?.role || eventRoles[0]?.value} onValueChange={(val) => setFinalEvent({ ...finalEvent, role: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventRoles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="eventUrl">Event URL</Label>
              <Input
                id="eventUrl"
                name="eventUrl"
                placeholder="https://example.com/event"
                value={finalEvent?.eventUrl || ""}
                onChange={(e) => setFinalEvent({ ...finalEvent, eventUrl: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-3">
              <Label>Event Image</Label>
              {/* <div className="space-y-4">
                {imageUrl ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                    <Image src={imageUrl || "/placeholder.svg"} alt="Event image" fill className="object-cover" />
                    <Button
                      type="button"
                      size="icon"
                      variant="destructive"
                      className="absolute right-2 top-2"
                      onClick={handleRemoveImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center rounded-lg border border-dashed">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Drag & drop an image or click to browse</p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Input type="file" accept="image/*" onChange={handleImageUpload} className="max-w-xs" />
                  {!imageUrl && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        // Use a placeholder image if no image is uploaded
                        setImageUrl("/community-event.png")
                      }}
                    >
                      Use Placeholder
                    </Button>
                  )}
                </div>
              </div> */}
            </div>
        </CardContent>
      </Card>

      {error && <div className="text-sm font-medium text-destructive">{error}</div>}

      <div className="flex gap-4">
        {/* <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? (isEditing ? "Updating..." : "Creating...") : isEditing ? "Update Event" : "Create Event"}
        </Button> */}
        <EventFormServer event={finalEvent} />
        <Button type="button" variant="outline" onClick={() => router.push("/admin/events")}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
