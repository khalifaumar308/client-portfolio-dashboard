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

interface EventType {
  name: string
  value: string
}

interface EventRole {
  name: string
  value: string
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
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

  const isEditing = !!event

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // In a real app, this would call an API to save the event
    setTimeout(() => {
      // Simulate success
      router.push("/admin/events")
      setIsLoading(false)
    }, 1500)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // In a real app, this would upload the file to a storage service
    // For demo purposes, we'll just use a placeholder
    setImageUrl("/community-event.png")
  }

  const handleRemoveImage = () => {
    setImageUrl("")
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter event title"
                defaultValue={event?.title || ""}
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter event description"
                defaultValue={event?.description || ""}
                required
                className="min-h-[120px]"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <Label htmlFor="date">Event Date</Label>
                <DatePicker date={date} setDate={setDate} />
                <input type="hidden" name="date" value={date?.toISOString() || ""} />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, Country"
                  defaultValue={event?.location || ""}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <Label htmlFor="type">Event Type</Label>
                <Select name="type" defaultValue={event?.type || eventTypes[0]?.value}>
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
                <Select name="role" defaultValue={event?.role || eventRoles[0]?.value}>
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
                defaultValue={event?.eventUrl || ""}
                required
              />
            </div>

            <div className="grid gap-3">
              <Label>Event Image</Label>
              <div className="space-y-4">
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
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {error && <div className="text-sm font-medium text-destructive">{error}</div>}

      <div className="flex gap-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? (isEditing ? "Updating..." : "Creating...") : isEditing ? "Update Event" : "Create Event"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/events")}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
