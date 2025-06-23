import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExperienceForm } from "@/components/admin/experience-form"

export const metadata = {
  title: "Add New Experience | Admin Dashboard",
  description: "Create a new experience entry",
}

export default function NewExperiencePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" className="mb-2" asChild>
            <Link href="/admin/experience">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Add New Experience</h1>
          <p className="text-muted-foreground">Create a new experience entry</p>
        </div>
      </div>
      <ExperienceForm />
    </div>
  )
}