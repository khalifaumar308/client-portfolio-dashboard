import { getSpeakingTopics } from "@/lib/api"
import type { LucideIcon } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import Lucide icons
const iconComponents: Record<string, LucideIcon> = {
  Shield: dynamic(() => import("lucide-react").then((mod) => mod.Shield)),
  BarChart: dynamic(() => import("lucide-react").then((mod) => mod.BarChart)),
  Users: dynamic(() => import("lucide-react").then((mod) => mod.Users)),
  DollarSign: dynamic(() => import("lucide-react").then((mod) => mod.DollarSign)),
  CreditCard: dynamic(() => import("lucide-react").then((mod) => mod.CreditCard)),
  BookOpen: dynamic(() => import("lucide-react").then((mod) => mod.BookOpen)),
  // Add more icons as needed
}

export async function SpeakingTopics() {
  const topics = await getSpeakingTopics()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => {
        const IconComponent = iconComponents[topic.icon] || iconComponents.BookOpen

        return (
          <div
            key={topic.id}
            className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <IconComponent className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{topic.title}</h3>
              <p className="text-muted-foreground">{topic.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
