import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Lightbulb,
  Scale,
  Shield,
  Target,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { AnimatedGradient } from "@/components/animated-gradient"
import { SkillBar } from "@/components/skill-bar"
import { ValueCard } from "@/components/value-card"
import { TimelineItem } from "@/components/timeline-item"
import { getHero } from "@/lib/admin-actions/hero"
import { getCredentails } from "@/lib/admin-actions/credentails"
import { getCapabilities } from "@/lib/admin-actions/capability-actions"
import { getAbout } from "@/lib/admin-actions/about-actions"
import { AboutForm } from "@/components/admin/about-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
export const dynamic = "force-dynamic";


export const metadata = {
  title: "About Me | Abiola Jimoh",
  description:
    "Learn more about Abiola Jimoh's background, expertise, and professional journey in fintech consulting and business advisory.",
}

export default async function AboutPage() {
  const [hero, credentails, capabilities, about] = await Promise.all([
    getHero(),
    getCredentails(),
    getCapabilities(),
    getAbout()
  ])
  console.log(about, 'about')
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-end p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit About Page</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl w-full">
            <DialogHeader>
              <DialogTitle>Edit About Page Content</DialogTitle>
            </DialogHeader>
            <AboutForm about={about} />
          </DialogContent>
        </Dialog>
      </div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                About Me
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">Abiola Jimoh</h1>
                <p className="text-xl text-primary font-medium">{ hero.title }</p>
                <p className="max-w-[600px] text-muted-foreground text-lg">
                  {hero.subText}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                  <Link href="/experience">View Experience</Link>
                </Button>
              </div>
              <div className="pt-4">
                <SocialLinks socials={hero.socialMediaLinks} className="flex gap-5" />
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl" />
              <div className="relative aspect-square max-w-[400px] overflow-hidden rounded-full border-8 border-background shadow-xl">
                <Image
                  alt="Abiola Jimoh"
                  className="object-cover"
                  fill
                  src={hero.imageUrl || "/placeholder.svg?height=400&width=400"}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                {/* <p>
                  I began my career in traditional finance before the fintech revolution took hold. As digital
                  transformation swept through the financial sector, I recognized the immense potential for technology
                  to democratize financial services and create more inclusive systems.
                </p>
                <p>
                  Over the past decade, I've worked with startups, established financial institutions, and regulatory
                  bodies across Africa and beyond. My unique perspective comes from having seen the financial ecosystem
                  from multiple angles – as an entrepreneur, advisor, regulator, and strategist.
                </p>
                <p>
                  Today, I focus on helping businesses navigate the complex intersection of finance, technology, and
                  regulation. My passion lies in enabling innovative companies to scale responsibly while maintaining
                  compliance and building sustainable business models.
                </p> */}
                {about?.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-muted/30 p-8">
              <div className="absolute inset-0 bg-grid-white/10" />
              <blockquote className="relative space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-primary/20 absolute top-0 left-0"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                <p className="text-xl font-medium pl-12 pt-2">
                  {/* I believe that financial innovation, when properly guided by sound regulatory principles, has the
                  power to transform lives and economies across Africa and beyond. */}
                  {about?.quate}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Credentials
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education & Qualifications</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              My academic background and professional certifications that have shaped my expertise.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {credentails.education.map((cred, id) => (
              <TimelineItem
                key={id}
                icon={<GraduationCap className="h-5 w-5" />}
                title={cred.title}
                organization={cred.issuer}
                period={cred.period}
                description={cred.details}
              />
            ))}
            
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Philosophy
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Core Values</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              The principles that guide my approach to business and consulting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {about?.philosophy.map((value, index) => (
              <ValueCard
                key={index}
                icon={<Shield className="h-6 w-6" />}
                title={value.title}
                description={value.description}
              />
            ))}
            {/* <ValueCard
              icon={<Shield className="h-6 w-6" />}
              title="Integrity"
              description="Maintaining the highest ethical standards in all business dealings and providing honest, transparent advice."
            />
            <ValueCard
              icon={<Lightbulb className="h-6 w-6" />}
              title="Innovation"
              description="Embracing creative solutions and forward-thinking approaches to solve complex business challenges."
            />
            <ValueCard
              icon={<Target className="h-6 w-6" />}
              title="Excellence"
              description="Striving for exceptional quality in all deliverables and continuously improving professional standards."
            />
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="Collaboration"
              description="Building strong partnerships and fostering teamwork to achieve shared goals and mutual success."
            />
            <ValueCard
              icon={<Scale className="h-6 w-6" />}
              title="Balance"
              description="Finding the optimal equilibrium between innovation and compliance, risk and reward, growth and sustainability."
            />
            <ValueCard
              icon={<Heart className="h-6 w-6" />}
              title="Impact"
              description="Focusing on creating meaningful change and positive outcomes for clients, communities, and the broader ecosystem."
            /> */}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Expertise</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Areas where I bring specialized knowledge and proven experience.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {capabilities.map((cap) => (
              <SkillBar key={cap._id} skill={cap.title} percentage={cap.percentage} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Beyond Work</h2>
              <div className="space-y-4 text-muted-foreground">
                {about?.beyondWork.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {/* <p>
                  Outside of my professional life, I'm passionate about mentoring young entrepreneurs and contributing
                  to the growth of Africa's tech ecosystem. I regularly speak at industry events and universities to
                  share knowledge and inspire the next generation of fintech leaders.
                </p>
                <p>
                  I'm an avid reader with a particular interest in economic history and the intersection of technology
                  and society. When not working or reading, you might find me exploring hiking trails, experimenting
                  with photography, or enjoying a game of chess.
                </p>
                <p>
                  I also serve on the board of a non-profit organization focused on financial literacy for underserved
                  communities, where we work to ensure that the benefits of financial innovation reach those who need it
                  most.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {about.talk || "Whether you're a startup looking to navigate regulatory challenges, an established business seeking growth opportunities, or an investor interested in the African fintech landscape, I'd love to connect."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
