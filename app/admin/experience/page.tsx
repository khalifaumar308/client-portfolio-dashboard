import Link from "next/link"
import { Briefcase, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllExperiences } from "@/lib/admin-actions/experience"
import { ExperiencesTable } from "@/components/admin/experiences-table"
// import { ExperiencesTable } from "@/components/admin/experiences-table" // Uncomment if you have a table component

export const metadata = {
  title: "Experience Management | Admin Dashboard",
  description: "Manage your professional experience entries",
}

export default async function ExperiencePage() {
  const experiences = await getAllExperiences()
  // const featuredCount = experiences.filter((exp) => exp.featured).length // Uncomment if you have featured

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
          <p className="text-muted-foreground">Manage your professional experience entries</p>
        </div>
        <Button asChild>
          <Link href="/admin/experience/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Experience
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Experiences</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{experiences.length}</div>
            <p className="text-xs text-muted-foreground">{experiences.length === 1 ? "Experience" : "Experiences"} available</p>
          </CardContent>
        </Card>
        {/* Add more stat cards here if needed */}
      </div>

      {/* <ExperiencesTable experiences={experiences} /> */}
      {/* Replace with your table component if available */}
      <div className="mt-8">
       {experiences &&(
          <ExperiencesTable experiences={experiences} />
       )}
      </div>
    </div>
  )
}
