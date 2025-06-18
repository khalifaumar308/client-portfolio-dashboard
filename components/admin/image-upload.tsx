"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Upload, X, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { uploadImage } from "@/lib/admin-actions"

interface ImageUploadProps {
  currentImage?: string
  onImageUploaded: (url: string) => void
}

export function ImageUpload({ currentImage, onImageUploaded }: ImageUploadProps) {
  const [image, setImage] = useState<string>(currentImage || "")
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState("")

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.includes("image/")) {
      setError("Please upload an image file")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB")
      return
    }

    setIsUploading(true)
    setError("")

    try {
      // const imageUrl = await uploadImage(file)
      const imageUrl = URL.createObjectURL(file) // For demo purposes, replace with actual upload logic
      setImage(imageUrl)
      onImageUploaded(imageUrl)
    } catch (error) {
      console.error("Error uploading image:", error)
      setError("Failed to upload image. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemoveImage = () => {
    setImage("")
    onImageUploaded("")
  }

  return (
    <div className="space-y-4">
      {image ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
          <Image src={image || "/placeholder.svg"} alt="Uploaded image" fill className="object-cover" />
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
          {isUploading ? (
            <div className="flex flex-col items-center justify-center space-y-2">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Drag & drop an image or click to browse</p>
            </div>
          )}
        </div>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex items-center justify-between">
        <Input type="file" accept="image/*" onChange={handleImageUpload} disabled={isUploading} className="max-w-xs" />
        {!image && (
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              // Use a placeholder image if no image is uploaded
              const placeholderUrl = `/placeholder.svg?height=400&width=600&query=event`
              setImage(placeholderUrl)
              onImageUploaded(placeholderUrl)
            }}
          >
            Use Placeholder
          </Button>
        )}
      </div>
    </div>
  )
}
