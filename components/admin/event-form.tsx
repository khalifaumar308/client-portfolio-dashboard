"use client"

import type React from "react"

import { useActionState, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NewEvent } from "@/lib/models/Event"
import UploadImage from "./UploadImage"
import { addEvent } from "@/lib/admin-actions/event"
import { useFormStatus } from "react-dom"

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
  const [state, formAction, pending] = useActionState(addEvent, null);
  const router = useRouter()
  const [error, setError] = useState("")
  const [imageUrl, setImageUrl] = useState(event?.image || "")
  const [finalEvent, setFinalEvent] = useState<NewEvent>(
    event
      ? {
          ...event,
          location: event.location ?? "",
        }
      : {
          title: "",
          description: "",
          date: "",
          location: "",
          image: "",
          eventUrl: "",
          type: eventTypes[0]?.value || "",
          role: eventRoles[0]?.value || "",
        }
  )
  const isEditing = !!event

  return (
    <div className="max-w-2xl mx-auto w-full px-2 sm:px-4 md:px-0 py-8">
      <Card className="shadow-lg border-none bg-white/90 dark:bg-background/80 rounded-2xl">
        <CardContent className="pt-8 pb-6 px-4 sm:px-8">
          <form className="space-y-8" autoComplete="off" action={formAction}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-semibold">Event Title <span className="text-destructive">*</span></Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter event title"
                  value={finalEvent?.title || ""}
                  onChange={(e) => setFinalEvent({ ...finalEvent, title: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="font-semibold">Description <span className="text-destructive">*</span></Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter event description"
                  value={finalEvent?.description || ""}
                  onChange={(e) => setFinalEvent({ ...finalEvent, description: e.target.value })}
                  required
                  className="min-h-[100px] rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date" className="font-semibold">Event Date <span className="text-destructive">*</span></Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={finalEvent?.date || ""}
                    onChange={(e) => setFinalEvent({ ...finalEvent, date: e.target.value })}
                    required
                    className="rounded-lg"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location" className="font-semibold">Location <span className="text-destructive">*</span></Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="City, Country"
                    value={finalEvent?.location || ""}
                    onChange={(e) => setFinalEvent({ ...finalEvent, location: e.target.value })}
                    required
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type" className="font-semibold">Event Type <span className="text-destructive">*</span></Label>
                  <Select name="type" value={finalEvent?.type || eventTypes[0]?.value} onValueChange={(val) => setFinalEvent({ ...finalEvent, type: val })}>
                    <SelectTrigger className="rounded-lg">
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
                <div className="grid gap-2">
                  <Label htmlFor="role" className="font-semibold">Your Role <span className="text-destructive">*</span></Label>
                  <Select name="role" value={finalEvent?.role || eventRoles[0]?.value} onValueChange={(val) => setFinalEvent({ ...finalEvent, role: val })}>
                    <SelectTrigger className="rounded-lg">
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
              <div className="grid gap-2">
                <Label htmlFor="eventUrl" className="font-semibold">Event URL <span className="text-destructive">*</span></Label>
                <Input
                  id="eventUrl"
                  name="eventUrl"
                  placeholder="https://example.com/event"
                  value={finalEvent?.eventUrl || ""}
                  onChange={(e) => setFinalEvent({ ...finalEvent, eventUrl: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label className="font-semibold">Event Image</Label>
                <UploadImage onUpload={setImageUrl} />
                {imageUrl && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border mt-2">
                    <Image src={imageUrl} alt="Event image" fill className="object-cover" />
                  </div>
                )}
              </div>
            </div>
            <input type="hidden" name="event" value={JSON.stringify({ ...finalEvent, image: imageUrl })} />
            {error && <div className="text-sm font-medium text-destructive mt-2">{error}</div>}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button type="submit" className="w-full rounded-full" disabled={pending}>
                {isEditing ? "Update Event" : "Create Event"}
              </Button>
              {pending && <span className="ml-2 text-sm text-muted-foreground">Saving...</span>}
              <Button type="button" variant="outline" className="rounded-full" onClick={() => router.push("/admin/events")}>Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
