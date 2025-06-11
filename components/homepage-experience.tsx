import { getExperiences } from "@/lib/api"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExperienceCard } from "@/components/experience-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

// Dynamically import Lucide icons
const iconComponents: Record<string, LucideIcon> = {
  Briefcase: dynamic(() => import("lucide-react").then((mod) => mod.Briefcase)),
  Building: dynamic(() => import("lucide-react").then((mod) => mod.Building)),
  BookOpen: dynamic(() => import("lucide-react").then((mod) => mod.BookOpen)),
  Award: dynamic(() => import("lucide-react").then((mod) => mod.Award)),
  Globe: dynamic(() => import("lucide-react").then((mod) => mod.Globe)),
  Handshake: dynamic(() => import("lucide-react").then((mod) => mod.Handshake)),
  // Add more icons as needed
}

export async function HomepageExperience() {
  const experiences = await getExperiences()

  const professionalExperiences = experiences.filter((exp) => exp.type === "professional").slice(0, 3)
  const advisoryExperiences = experiences.filter((exp) => exp.type === "advisory").slice(0, 3)

  const getIconComponent = (iconName: string): ReactNode => {
    const IconComponent = iconComponents[iconName] || iconComponents.Briefcase
    return <IconComponent className="h-6 w-6" />
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Tabs defaultValue="professional" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1 rounded-full">
          <TabsTrigger
            value="professional"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Professional
          </TabsTrigger>
          <TabsTrigger
            value="advisory"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Advisory Roles
          </TabsTrigger>
        </TabsList>
        <TabsContent value="professional" className="space-y-8">
          {professionalExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              icon={getIconComponent(experience.icon)}
            />
          ))}
        </TabsContent>
        <TabsContent value="advisory" className="space-y-8">
          {advisoryExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              icon={getIconComponent(experience.icon)}
            />
          ))}
        </TabsContent>
      </Tabs>
      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
          <Link href="/experience">
            View Full Experience <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
