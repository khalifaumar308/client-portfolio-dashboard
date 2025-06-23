"use client"
import { useActionState, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createService } from "@/lib/admin-actions/service.action"
import { INewService, IService } from "@/components/types"
import { Scale, Shield, BarChart3, Building, Handshake, FileCheck, BookOpen } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import UploadImage from "./UploadImage"
import Image from "next/image"
import { iconOptions } from "../iconOptions"

interface ServiceFormProps {
  // Add props for editing if needed later, for now just for creating
  // service?: IService;
  // iconOptions: { name: string; value: string }[]; // Example: [{ name: 'Briefcase', value: 'Briefcase' }]
  service?: IService
  editMode?: boolean // Flag to indicate if in edit mode
}

export function ServiceForm({ service, editMode }: ServiceFormProps) {
  // useActionState hook for server action
  const [state, formAction, pending] = useActionState(createService, null)
  const [imageUrl, setImageUrl] = useState(service?.imageUrl || "")

  // State for form data
  const [finalService, setFinalService] = useState<INewService>(service || {
    title: "",
    description: "",
    icon: iconOptions[0]?.value || "", // Default to first icon option
    subtext: "",
    listItems: [], // Initialize as empty array
    featured: false, // Default to false
    imageUrl: "", // Initialize image URL
    type: "Business", // Default type
  })

  // State for image URL from UploadImage component

  // State for displaying errors from server action
  const [error, setError] = useState(state?.error || "")

  // Effect to update error state when server action state changes
  useEffect(() => {
    if (state?.error) {
      setError(state.error)
    } else {
      setError("") // Clear error on successful action or initial load
    }
  }, [state])

  // Helper to handle listItems input (comma or newline separated)
  const handleListItemsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    // Split by comma or newline, trim whitespace, filter out empty strings
    const items = value.split(/[\n,]/).map(item => item.trim()).filter(item => item !== "")
    setFinalService({ ...finalService, listItems: items })
  }

  // Helper to format listItems array back to string for textarea value
  const formatListItems = (items: string[]): string => {
    return items.join('\n'); // Join with newlines for textarea display
  }

  return (
    <div className="max-w-2xl mx-auto w-full px-2 sm:px-4 md:px-0 py-8">
      <Card className="shadow-lg border-none bg-white/90 dark:bg-background/80 rounded-2xl">
        <CardContent className="pt-8 pb-6 px-4 sm:px-8">
          {/* Form element with server action */}
          <form className="space-y-8" autoComplete="off" action={formAction}>
            <div className="grid gap-6">
              {/* Title */}
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-semibold">Service Title <span className="text-destructive">*</span></Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter service title"
                  value={finalService.title}
                  onChange={(e) => setFinalService({ ...finalService, title: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>

              {/* Description */}
              <div className="grid gap-2">
                <Label htmlFor="description" className="font-semibold">Description <span className="text-destructive">*</span></Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter service description"
                  value={finalService.description}
                  onChange={(e) => setFinalService({ ...finalService, description: e.target.value })}
                  required
                  className="min-h-[100px] rounded-lg"
                />
              </div>

              {/* Subtext */}
              <div className="grid gap-2">
                <Label htmlFor="subtext" className="font-semibold">Subtext <span className="text-destructive">*</span></Label>
                <Input
                  id="subtext"
                  name="subtext"
                  placeholder="Enter a short subtext"
                  value={finalService.subtext}
                  onChange={(e) => setFinalService({ ...finalService, subtext: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>

              {/* Icon and Featured */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Icon Selection */}
                <div className="grid gap-2">
                  <Label className="font-semibold">Icon</Label>
                  <div className="flex flex-wrap gap-2">
                    {iconOptions.map((option) => (
                      <Button
                        key={option.value}
                        type="button"
                        variant={finalService.icon === option.value ? "default" : "outline"}
                        size="icon"
                        className="rounded-full"
                        onClick={() => setFinalService({ ...finalService, icon: option.value })}
                      >
                        {option.icon}
                      </Button>
                    ))}
                  </div>
                  {/* Hidden input for icon value */}
                  <input type="hidden" name="icon" value={finalService.icon} />
                </div>

                {/* Featured Select */}
                <div className="grid gap-2">
                  <Label htmlFor="featured" className="font-semibold">Featured <span className="text-destructive">*</span></Label>
                  <Select
                    value={finalService.featured.toString()} // Select value must be a string
                    onValueChange={(value) => setFinalService({ ...finalService, featured: value === 'true' })}
                  >
                    <SelectTrigger id="featured" className="rounded-lg">
                      <SelectValue placeholder="Select featured status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Yes</SelectItem>
                      <SelectItem value="false">No</SelectItem>
                    </SelectContent>
                  </Select>
                   {/* Hidden input for featured value */}
                  <input type="hidden" name="featured" value={finalService.featured.toString()} />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="featured" className="font-semibold">Featured <span className="text-destructive">*</span></Label>
                <Select
                  value={finalService.type.toString()} // Select value must be a string
                  onValueChange={(value:'Business' | 'Legal' | 'Regulation') => setFinalService({ ...finalService, type:value })}
                >
                  <SelectTrigger id="type" className="rounded-lg">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Legal">Legal</SelectItem>
                    <SelectItem value="Regulation">Regulation</SelectItem>
                  </SelectContent>
                </Select>
                {/* Hidden input for featured value */}
                <input type="hidden" name="featured" value={finalService.featured.toString()} />
              </div>

              {/* List Items */}
              <div className="grid gap-2">
                <Label htmlFor="listItems" className="font-semibold">List Items <span className="text-destructive">*</span></Label>
                <Textarea
                  id="listItems"
                  name="listItems"
                  placeholder="Enter list items, separated by commas or newlines"
                  value={formatListItems(finalService.listItems)}
                  onChange={handleListItemsChange}
                  required
                  className="min-h-[150px] rounded-lg"
                />
                 {/* Hidden input for listItems array */}
                {/* <input type="hidden" name="listItems" value={JSON.stringify(finalService.listItems)} /> */}
              </div>

              {/* Service Image */}
              <div className="grid gap-2">
               
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="font-semibold">Service Image</Label>
              <UploadImage onUpload={setImageUrl} />
              {imageUrl && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border mt-2">
                  <Image src={imageUrl} alt="Event image" fill className="object-cover" />
                </div>
              )}
            </div>

            {/* Display error from server action */}
            {error && <div className="text-sm font-medium text-destructive mt-4">{error}</div>}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button type="submit" className="w-full rounded-full" disabled={pending}>
                {!editMode?pending ? "Creating..." : "Create Service":pending ? "Updating..." : "Update Service"}
              </Button>
              {/* <Button type="button" variant="outline" className="w-full rounded-full" onClick={() => router.push("/admin/services")}>Cancel</Button> */}
            </div>
            <input type="hidden" name="service" value={JSON.stringify({ ...finalService, imageUrl })} />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}