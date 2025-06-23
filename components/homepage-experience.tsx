import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExperienceCard } from "@/components/experience-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building,
  GraduationCap,
  Handshake,
  Globe,
  Scale,
  Lightbulb,
} from "lucide-react"
import { getAllExperiences } from "@/lib/admin-actions/experience"

export async function HomepageExperience() {
  const experiances = await getAllExperiences()
    // separate experiance by type
    const professional = experiances.filter(({ type }) => type === 'Professional')
  const advisory = experiances.filter(({ type }) => type === 'Advisory')
  
    const icons = [
      <Briefcase key='0' className="h-6 w-6" />,
      <Building key='1' className="h-6 w-6" />,
      <BookOpen key='2' className="h-6 w-6" />,
      <GraduationCap key='3' className="h-6 w-6" />,
      <Globe key='4' className="h-6 w-6" />,
      <Scale key='5' className="h-6 w-6" />,
      <Lightbulb key='6' className="h-6 w-6" />,
    ]

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
          {professional.map((experience) => (
            <ExperienceCard
              key={experience._id}
              title={experience.role}
              company={experience.company}
              period={experience.period}
              description={experience.description || ''}
              icon={icons[Math.round(Math.random()*7)]}
            />
          ))}
        </TabsContent>
        <TabsContent value="advisory" className="space-y-8">
          {advisory.map((experience) => (
            <ExperienceCard
              key={experience._id}
              title={experience.role}
              company={experience.company}
              period={experience.period}
              description={experience.description || ''}
              icon={icons[Math.round(Math.random() * 7)]}
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
