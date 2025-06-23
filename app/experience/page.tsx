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

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedGradient } from "@/components/animated-gradient"
import { ExperienceCard } from "@/components/experience-card"
import { ProjectCard } from "@/components/project-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { SkillBar } from "@/components/skill-bar"
import { getAllExperiences } from "@/lib/admin-actions/experience"
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Experience | Samuel Johnson",
  description:
    "Explore Samuel Johnson's professional experience, key projects, and expertise in fintech consulting and business advisory.",
}

export default async function ExperiencePage() {
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Professional Journey
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              A Decade of <span className="text-primary">Fintech Excellence</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              My professional journey spans regulatory compliance, business development, and strategic advisory roles
              across the African fintech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Career Path
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Timeline</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Key roles and positions that have shaped my expertise in fintech and business advisory.
            </p>
          </div>

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
                {professional.map(({role, description, period, company},id) => (
                  <ExperienceCard
                    title={role}
                    company={company}
                    period={period}
                    description={description || ''}
                    icon={icons[Math.round(Math.random() * 7)]}
                    key={id}
                  />
                ))}
                {/* <ExperienceCard
                  title="Principal Consultant"
                  company="StartUps Consulting"
                  period="Oct 2024 - Present"
                  description="Providing hands-on services to entrepreneurs, startups, and growth-stage businesses to develop and refine their business models. Focus areas include regulatory compliance, fundraising, partnerships, and team development."
                  icon={<Briefcase className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Co-Founder & Co-CEO"
                  company="XCHANGEBOX"
                  period="May 2024 - Present"
                  description="Leading a fintech platform focused on payments, collections, and SME support, providing access to financial products including health insurance, pensions, micro-credit, and payment services for traders and farmers across Northern Nigeria."
                  icon={<Building className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Head of Strategy Development"
                  company="Digital Bridge Institute"
                  period="Mar 2017 - Feb 2024"
                  description="Supported management with strategic inputs for partnerships and stakeholder management, providing capacity building for the sustainable drive of the digital economy in Nigeria."
                  icon={<BookOpen className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Legal Counsel"
                  company="Central Bank of Nigeria"
                  period="Jun 2014 - Feb 2017"
                  description="Provided legal advisory services on financial regulations, participated in the development of payment systems policies, and supported the implementation of financial inclusion initiatives."
                  icon={<Scale className="h-6 w-6" />}
                /> */}
              </TabsContent>
              <TabsContent value="advisory" className="space-y-8">
                {advisory.map(({ role, description, period, company }, id) => (
                  <ExperienceCard
                    title={role}
                    company={company}
                    period={period}
                    description={description || ''}
                    icon={icons[Math.round(Math.random() * 7)]}
                    key={id}
                  />
                ))}
                {/* <ExperienceCard
                  title="Governing Council Member"
                  company="Fintech Association Of Nigeria"
                  period="Oct 2024 - Present"
                  description="Serving on the executive arm of FintechNGR tasked with the overall management of the Association, shaping policy and industry standards."
                  icon={<Award className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Non-Executive Director"
                  company="Unlimit"
                  period="Dec 2023 - Present"
                  description="Providing strategic guidance to a global payments company that helps businesses enter new markets, explore new industries, and reach new milestones through borderless payment solutions."
                  icon={<Globe className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Advisor"
                  company="Extension Africa"
                  period="Oct 2024 - Present"
                  description="Providing legal advisory services and serving as Company Secretary to an agritech startup supporting farmers across Africa with extension services, financial inclusion, and access to inputs."
                  icon={<Handshake className="h-6 w-6" />}
                />
                <ExperienceCard
                  title="Mentor"
                  company="Lagos Innovates"
                  period="Jan 2022 - Present"
                  description="Mentoring early-stage fintech startups on regulatory compliance, business model development, and fundraising strategies as part of Lagos State's innovation support program."
                  icon={<Lightbulb className="h-6 w-6" />}
                /> */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Credentials
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education & Certifications</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Academic qualifications and professional certifications that have shaped my expertise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="text-xl font-bold">Master of Laws (LLM) in Financial Regulation</h4>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <p className="text-sm font-medium text-primary">2015 - 2016</p>
                      </div>
                      <p className="text-base font-medium">London School of Economics</p>
                      <p className="text-muted-foreground">
                        Specialized in financial regulation with focus on emerging markets and fintech regulatory
                        frameworks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="text-xl font-bold">Bachelor of Laws (LLB)</h4>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <p className="text-sm font-medium text-primary">2010 - 2014</p>
                      </div>
                      <p className="text-base font-medium">University of Lagos</p>
                      <p className="text-muted-foreground">
                        First Class Honours, with specialization in corporate and commercial law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="text-xl font-bold">Certified Anti-Money Laundering Specialist (CAMS)</h4>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <p className="text-sm font-medium text-primary">2018</p>
                      </div>
                      <p className="text-base font-medium">
                        Association of Certified Anti-Money Laundering Specialists
                      </p>
                      <p className="text-muted-foreground">
                        Specialized certification in anti-money laundering compliance and financial crime prevention.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="text-xl font-bold">Chartered Financial Analyst (CFA) Level II</h4>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <p className="text-sm font-medium text-primary">2019</p>
                      </div>
                      <p className="text-base font-medium">CFA Institute</p>
                      <p className="text-muted-foreground">
                        Advanced knowledge in investment analysis, portfolio management, and financial ethics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="text-xl font-bold">Executive Program in Fintech Strategy</h4>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <p className="text-sm font-medium text-primary">2022</p>
                      </div>
                      <p className="text-base font-medium">Harvard Business School</p>
                      <p className="text-muted-foreground">
                        Intensive program focused on fintech business models, digital transformation, and strategic
                        innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Notable Projects</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              A selection of key projects that showcase my expertise and impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Regulatory Framework Development"
              description="Developed a comprehensive regulatory compliance framework for a digital banking startup, enabling successful licensing in three West African countries."
              image="/placeholder.svg?height=200&width=300"
              tags={["Regulatory", "Compliance", "Banking"]}
              link="/projects/regulatory-framework"
            />
            <ProjectCard
              title="Cross-Border Payments Solution"
              description="Led the strategic development and regulatory alignment for a cross-border payments platform connecting six African countries with simplified compliance requirements."
              image="/placeholder.svg?height=200&width=300"
              tags={["Payments", "Expansion", "Compliance"]}
              link="/projects/cross-border-payments"
            />
            <ProjectCard
              title="Fintech Accelerator Program"
              description="Designed and implemented a fintech accelerator program that has supported over 30 startups with regulatory guidance, business development, and investor connections."
              image="/placeholder.svg?height=200&width=300"
              tags={["Mentorship", "Startups", "Innovation"]}
              link="/projects/fintech-accelerator"
            />
            <ProjectCard
              title="Regulatory Sandbox Initiative"
              description="Collaborated with regulatory authorities to design a sandbox framework allowing fintech startups to test innovative solutions in a controlled environment."
              image="/placeholder.svg?height=200&width=300"
              tags={["Innovation", "Policy", "Regulation"]}
              link="/projects/regulatory-sandbox"
            />
            <ProjectCard
              title="Digital Lending Compliance"
              description="Developed compliance protocols and credit risk frameworks for a digital lending platform, ensuring adherence to consumer protection regulations."
              image="/placeholder.svg?height=200&width=300"
              tags={["Lending", "Risk", "Compliance"]}
              link="/projects/digital-lending"
            />
            <ProjectCard
              title="Financial Inclusion Initiative"
              description="Advised on the design and implementation of a mobile money solution targeting unbanked populations in rural communities across Nigeria."
              image="/placeholder.svg?height=200&width=300"
              tags={["Inclusion", "Mobile Money", "Rural"]}
              link="/projects/financial-inclusion"
            />
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
            <SkillBar skill="Regulatory Compliance" percentage={95} />
            <SkillBar skill="Business Strategy" percentage={90} />
            <SkillBar skill="Legal Advisory" percentage={92} />
            <SkillBar skill="Risk Management" percentage={88} />
            <SkillBar skill="Partnership Development" percentage={85} />
            <SkillBar skill="Fundraising" percentage={80} />
            <SkillBar skill="Corporate Governance" percentage={90} />
            <SkillBar skill="Market Entry Strategy" percentage={85} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Endorsements
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Client Testimonials</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              What clients and colleagues say about working with me.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="Samuel's expertise in regulatory compliance was instrumental in helping us secure our fintech license in record time. His guidance throughout the process was invaluable."
              name="Aisha Mohammed"
              title="CEO, PayTech Solutions"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Working with Samuel transformed our business model. His strategic insights and industry connections helped us pivot and scale in ways we hadn't imagined possible."
              name="Michael Okonkwo"
              title="Founder, CreditLink"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Samuel's deep understanding of both legal and business aspects of fintech made him the perfect advisor for our startup. He helped us navigate complex regulations while focusing on growth."
              name="Sarah Chen"
              title="COO, GlobalPay Africa"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Interested in Working Together?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how my experience and expertise can help your business navigate regulatory challenges and
              achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
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
