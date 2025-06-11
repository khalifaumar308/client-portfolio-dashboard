"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Upload, Grid, List } from "lucide-react"

export function MediaLibrary() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Mock media data
  const mediaItems = [
    {
      id: "1",
      name: "fintech-workshop.png",
      type: "image/png",
      size: "1.2 MB",
      dimensions: "1200 x 800",
      url: "/fintech-workshop.png",
      uploadedAt: "May 10, 2023",
    },
    {
      id: "2",
      name: "payments-summit.png",
      type: "image/png",
      size: "0.9 MB",
      dimensions: "1200 x 800",
      url: "/payments-summit.png",
      uploadedAt: "April 22, 2023",
    },
    {
      id: "3",
      name: "fintech-policy-conference.png",
      type: "image/png",
      size: "1.5 MB",
      dimensions: "1200 x 800",
      url: "/fintech-policy-conference.png",
      uploadedAt: "March 15, 2023",
    },
    {
      id: "4",
      name: "fintech-hackathon.png",
      type: "image/png",
      size: "1.1 MB",
      dimensions: "1200 x 800",
      url: "/fintech-hackathon.png",
      uploadedAt: "February 28, 2023",
    },
    {
      id: "5",
      name: "virtual-fintech-bootcamp.png",
      type: "image/png",
      size: "1.3 MB",
      dimensions: "1200 x 800",
      url: "/virtual-fintech-bootcamp.png",
      uploadedAt: "January 12, 2023",
    },
    {
      id: "6",
      name: "financial-inclusion-panel.png",
      type: "image/png",
      size: "1.0 MB",
      dimensions: "1200 x 800",
      url: "/financial-inclusion-panel.png",
      uploadedAt: "December 5, 2022",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search media..." className="w-full bg-background pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="icon" onClick={() => setViewMode("grid")}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="icon" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Media</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {mediaItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-md border bg-background">
                  <div className="relative aspect-square">
                    <Image
                      src={item.url || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2">
                    <p className="truncate text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.size}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="py-3 pl-4 pr-3 text-left text-xs font-medium">File</th>
                    <th className="px-3 py-3 text-left text-xs font-medium">Type</th>
                    <th className="px-3 py-3 text-left text-xs font-medium">Size</th>
                    <th className="px-3 py-3 text-left text-xs font-medium">Dimensions</th>
                    <th className="px-3 py-3 text-left text-xs font-medium">Uploaded</th>
                  </tr>
                </thead>
                <tbody>
                  {mediaItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="whitespace-nowrap py-3 pl-4 pr-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-md">
                            <Image
                              src={item.url || "/placeholder.svg"}
                              alt={item.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">{item.type}</td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">{item.size}</td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">{item.dimensions}</td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm">{item.uploadedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>
        <TabsContent value="images" className="mt-4">
          <div className="rounded-md border p-8 text-center">
            <p className="text-muted-foreground">Showing images only (same layout as All Media)</p>
          </div>
        </TabsContent>
        <TabsContent value="documents" className="mt-4">
          <div className="rounded-md border p-8 text-center">
            <p className="text-muted-foreground">Showing documents only (same layout as All Media)</p>
          </div>
        </TabsContent>
        <TabsContent value="videos" className="mt-4">
          <div className="rounded-md border p-8 text-center">
            <p className="text-muted-foreground">Showing videos only (same layout as All Media)</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
