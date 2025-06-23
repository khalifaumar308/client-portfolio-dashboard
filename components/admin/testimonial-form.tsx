"use client"
import { useActionState, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createTestimonial, TestimonailUpdate } from "@/lib/admin-actions/testimonial"
import UploadImage from "./UploadImage"
import Image from "next/image"

interface TestimonialFormProps {
  testimonial?: TestimonailUpdate
  editMode?: boolean
}

const defaultTestimonial = {
  name: "",
  role: "",
  image: "",
  quote: "",
}

export function TestimonialForm({ testimonial, editMode }: TestimonialFormProps) {
  const [state, formAction, pending] = useActionState(createTestimonial, null)
  const [imageUrl, setImageUrl] = useState(testimonial?.image || "")
  const [finalTestimonial, setFinalTestimonial] = useState(testimonial || { ...defaultTestimonial })
  const [error, setError] = useState("")

  // useEffect(() => {
  //   if (state && typeof state === "object" && "error" in state && state.error) {
  //     setError(`${state.error}`)
  //   } else {
  //     setError("")
  //   }
  // }, [state])

  return (
    <div className="max-w-2xl mx-auto w-full px-2 sm:px-4 md:px-0 py-8">
      <Card className="shadow-lg border-none bg-white/90 dark:bg-background/80 rounded-2xl">
        <CardContent className="pt-8 pb-6 px-4 sm:px-8">
          <form className="space-y-8" autoComplete="off" action={formAction}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="font-semibold">Name <span className="text-destructive">*</span></Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter person's name"
                  value={finalTestimonial.name}
                  onChange={e => setFinalTestimonial({ ...finalTestimonial, name: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role" className="font-semibold">Role/Title</Label>
                <Input
                  id="role"
                  name="role"
                  placeholder="Enter person's role or title"
                  value={finalTestimonial.role}
                  onChange={e => setFinalTestimonial({ ...finalTestimonial, role: e.target.value })}
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quote" className="font-semibold">Testimonial <span className="text-destructive">*</span></Label>
                <Textarea
                  id="quote"
                  name="quote"
                  placeholder="Enter testimonial quote"
                  value={finalTestimonial.quote}
                  onChange={e => setFinalTestimonial({ ...finalTestimonial, quote: e.target.value })}
                  required
                  className="min-h-[100px] rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label className="font-semibold">Image</Label>
                <UploadImage onUpload={setImageUrl} />
                {imageUrl && (
                  <div className="relative aspect-square w-32 h-32 overflow-hidden rounded-full border mt-2">
                    <Image src={imageUrl} alt="Testimonial image" fill className="object-cover" />
                  </div>
                )}
              </div>
            </div>
            {error && <div className="text-sm font-medium text-destructive mt-4">{error}</div>}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button type="submit" className="w-full rounded-full" disabled={pending}>
                {!editMode ? (pending ? "Creating..." : "Create Testimonial") : (pending ? "Updating..." : "Update Testimonial")}
              </Button>
            </div>
            <input type="hidden" name="service" value={JSON.stringify({ ...finalTestimonial, image: imageUrl })} />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}