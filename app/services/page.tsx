import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building,
  CheckCircle,
  FileCheck,
  Handshake,
  Scale,
  Shield,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedGradient } from "@/components/animated-gradient"
import { ServiceDetailCard } from "@/components/service-detail-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Services | Samuel Johnson",
  description:
    "Comprehensive fintech consulting services including regulatory compliance, business development, fundraising support, and legal advisory.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Professional Services
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Expert Solutions for <span className="text-primary">Fintech Success</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive consulting services tailored to the unique needs of fintech startups and established
              businesses navigating complex regulatory landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How I Can Help</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              My services are designed to address the specific challenges faced by fintech companies at various stages
              of growth.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="regulatory" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 p-1 rounded-full">
                <TabsTrigger
                  value="regulatory"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Regulatory
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Business
                </TabsTrigger>
                <TabsTrigger
                  value="legal"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Legal
                </TabsTrigger>
              </TabsList>

              <TabsContent value="regulatory" className="space-y-8">
                <ServiceDetailCard
                  title="Regulatory Compliance"
                  description="Navigate complex regulatory frameworks to ensure your fintech business remains compliant while innovating."
                  icon={<Shield className="h-6 w-6" />}
                  image="/placeholder.svg?height=300&width=600"
                  features={[
                    "Licensing application support",
                    "Compliance framework development",
                    "Regulatory audit preparation",
                    "Policy documentation",
                    "Regulatory change management",
                    "Compliance training programs",
                  ]}
                  cta={{
                    text: "Learn More",
                    link: "/services/regulatory-compliance",
                  }}
                />

                <ServiceDetailCard
                  title="Risk Management"
                  description="Identify and mitigate risks to ensure sustainable growth and protect business interests."
                  icon={<Scale className="h-6 w-6" />}
                  image="/placeholder.svg?height=300&width=600"
                  features={[
                    "Risk assessment frameworks",
                    "Fraud prevention strategies",
                    "AML/KYC compliance",
                    "Business continuity planning",
                    "Third-party risk management",
                    "Risk reporting and governance",
                  ]}
                  cta={{
                    text: "Learn More",
                    link: "/services/risk-management",
                  }}
                />
              </TabsContent>

              <TabsContent value="business" className="space-y-8">
                <ServiceDetailCard
                  title="Business Development"
                  description="Accelerate growth and expansion with strategic planning and execution."
                  icon={<BarChart3 className="h-6 w-6" />}
                  image="/placeholder.svg?height=300&width=600"
                  features={[
                    "Market entry strategy",
                    "Partnership development",
                    "Business model refinement",
                    "Growth planning",
                    "Competitive analysis",
                    "Go-to-market strategy",
                  ]}
                  cta={{
                    text: "Learn More",
                    link: "/services/business-development",
                  }}
                />

                <ServiceDetailCard
                  title="Fundraising Support"
                  description="Secure investment for your venture with expert guidance and preparation."
                  icon={<Building className="h-6 w-6" />}
                  image="/placeholder.svg?height=300&width=600"
                  features={[
                    "Investor documentation",
                    "Pitch deck development",
                    "Due diligence preparation",
                    "Investor networking",
                    "Valuation guidance",
                    "Term sheet negotiation",
                  ]}
                  cta={{
                    text: "Learn More",
                    link: "/services/fundraising",
                  }}
                />

                <ServiceDetailCard
                  title="Strategic Partnerships"
                  description="Build valuable alliances and networks that drive collaborative success and business growth."
                  icon={<Handshake className="h-6 w-6" />}
                  image="/placeholder.svg?height=300&width=600"
                  features={[
                    "Partner identification",
                    "Partnership strategy",
                    "Negotiation support",
                    "Alliance management",
                    "Joint venture structuring",
                    "Partnership evaluation",
                  ]}
                  cta={{
                    text: "Learn More",
                    link: "/services/strategic-partnerships",
                  }}
                />
              </TabsContent>

              <TabsContent value="legal" className="space-y-8">
                <ServiceDetailCard
                  title="Legal Advisory"
                  description="Expert guidance on legal matters related to fintech operations and growth."
                  icon={<FileCheck className="h-6 w-6" />}
                  image="/placeholder.svg?height=300&width=600"
                  features={[
                    "Contract review and drafting",
                    "Corporate governance",
                    "Intellectual property protection",
                    "Regulatory compliance",
                    "Privacy and data protection",
                    "Dispute resolution",
                  ]}
                  cta={{
                    text: "Learn More",
                    link: "/services/legal-advisory",
                  }}
                />

                <ServiceDetailCard
                  title="Corporate Training"
                  description="Develop team capabilities with specialized training programs."
                  icon={<BookOpen className="h-6 w-6" />}
                  image="/placeholder.svg?height=300&width=600"
                  features={[
                    "Regulatory compliance training",
                    "Leadership development",
                    "Team building workshops",
                    "Strategic planning sessions",
                    "Risk management education",
                    "Fintech industry insights",
                  ]}
                  cta={{
                    text: "Learn More",
                    link: "/services/corporate-training",
                  }}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Engagement Models
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Service Packages</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Flexible engagement options designed to meet your specific needs and budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Package */}
            <div className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Advisory Session</h3>
                  <p className="text-muted-foreground">One-time strategic consultation</p>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="ml-2 text-muted-foreground">pricing</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>2-hour focused consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Specific challenge assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Strategic recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Follow-up summary document</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" asChild>
                  <Link href="/contact">Book a Session</Link>
                </Button>
              </div>
            </div>

            {/* Growth Package */}
            <div className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-lg border-2 border-primary">
              <div className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Most Popular
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Project-Based</h3>
                  <p className="text-muted-foreground">Focused solution for specific needs</p>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">Project</span>
                  <span className="ml-2 text-muted-foreground">based</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Defined scope and deliverables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Weekly progress updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Implementation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Comprehensive documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>30-day post-project support</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" asChild>
                  <Link href="/contact">Request Proposal</Link>
                </Button>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Retainer</h3>
                  <p className="text-muted-foreground">Ongoing strategic partnership</p>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">Monthly</span>
                  <span className="ml-2 text-muted-foreground">retainer</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Dedicated advisory support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Regular strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>On-demand consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Priority response times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Quarterly business reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Network access and introductions</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" asChild>
                  <Link href="/contact">Discuss Options</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Methodology
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Approach</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              A structured process designed to deliver tangible results for your business.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative">
                <div className="sticky top-24 space-y-6">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Consulting process"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-lg mx-auto"
                  />
                </div>
              </div>
              <div className="space-y-12">
                <div className="relative pl-10 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold mb-2">1. Discovery</h3>
                  <p className="text-muted-foreground">
                    In-depth assessment of your business, challenges, goals, and regulatory environment to establish a
                    clear understanding of your needs.
                  </p>
                </div>
                <div className="relative pl-10 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold mb-2">2. Strategy Development</h3>
                  <p className="text-muted-foreground">
                    Creation of a tailored roadmap with specific recommendations, timelines, and measurable outcomes
                    aligned with your business objectives.
                  </p>
                </div>
                <div className="relative pl-10 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold mb-2">3. Implementation</h3>
                  <p className="text-muted-foreground">
                    Hands-on guidance and support throughout the execution phase, ensuring proper adoption of
                    recommendations and addressing challenges as they arise.
                  </p>
                </div>
                <div className="relative pl-10 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold mb-2">4. Evaluation</h3>
                  <p className="text-muted-foreground">
                    Regular assessment of progress against key performance indicators, with adjustments made as needed
                    to optimize results.
                  </p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold mb-2">5. Refinement</h3>
                  <p className="text-muted-foreground">
                    Continuous improvement through feedback loops, market monitoring, and adaptation to regulatory
                    changes to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Client Success
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Clients Say</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Hear from businesses that have transformed their operations with my services.
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

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Answers to common questions about my services and approach.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do you typically structure your consulting engagements?</AccordionTrigger>
                <AccordionContent>
                  I offer three primary engagement models: one-time advisory sessions for specific challenges,
                  project-based engagements with defined scope and deliverables, and ongoing retainer relationships for
                  continuous strategic support. Each engagement begins with a thorough discovery phase to understand
                  your specific needs and objectives before recommending the most appropriate structure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What industries do you specialize in?</AccordionTrigger>
                <AccordionContent>
                  My expertise is primarily focused on fintech, including payments, lending, wealth management,
                  insurtech, and embedded finance solutions. I also work with traditional financial institutions
                  undergoing digital transformation and non-financial businesses looking to integrate financial services
                  into their offerings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you stay current with regulatory changes?</AccordionTrigger>
                <AccordionContent>
                  I maintain active relationships with regulatory bodies, participate in industry working groups, and
                  subscribe to specialized legal and regulatory updates. Additionally, my network includes legal experts
                  across multiple jurisdictions who provide insights on emerging regulatory trends and changes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What geographic regions do you cover?</AccordionTrigger>
                <AccordionContent>
                  While I'm based in Nigeria, I work with clients across Africa, with particular expertise in West
                  African markets. I also have experience with businesses expanding into Africa from other regions and
                  can provide guidance on cross-border regulatory and business development considerations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How do you measure the success of your consulting work?</AccordionTrigger>
                <AccordionContent>
                  Success metrics are established at the beginning of each engagement based on your specific goals,
                  whether that's securing regulatory approval, increasing revenue, expanding into new markets, or
                  improving operational efficiency. I provide regular progress reports against these metrics and conduct
                  formal reviews at project milestones.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you offer implementation support or just strategy?</AccordionTrigger>
                <AccordionContent>
                  I provide both strategic guidance and implementation support. While some clients prefer high-level
                  advisory services, others benefit from hands-on assistance with executing recommendations. My approach
                  is flexible and can be tailored to your team's capabilities and needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how my services can help you navigate regulatory challenges, accelerate growth, and build a
              sustainable fintech business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/experience">View My Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
