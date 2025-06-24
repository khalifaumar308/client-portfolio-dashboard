import Link from "next/link";
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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedGradient } from "@/components/animated-gradient";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { SkillBar } from "@/components/skill-bar";
import { getAllExperiences } from "@/lib/admin-actions/experience";
import { getCredentails } from "@/lib/admin-actions/credentails";
import { TimelineItem } from "@/components/timeline-item";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Experience | Samuel Johnson",
  description:
    "Explore Samuel Johnson's professional experience, key projects, and expertise in fintech consulting and business advisory.",
};

export default async function ExperiencePage() {
  // const experiances = await getAllExperiences();
  // const credentials = await getCredentails();
  const [experiances, credentials] = await Promise.all([getAllExperiences(), getCredentails()])
    const education = Array.isArray(credentials.education) ? credentials.education : [];
    const certification = Array.isArray(credentials.certification) ? credentials.certification : [];
  // separate experiance by type
  const professional = experiances.filter(
    ({ type }) => type === "Professional"
  );
  const advisory = experiances.filter(({ type }) => type === "Advisory");
  const icons = [
    <Briefcase key="0" className="h-6 w-6" />,
    <Building key="1" className="h-6 w-6" />,
    <BookOpen key="2" className="h-6 w-6" />,
    <GraduationCap key="3" className="h-6 w-6" />,
    <Globe key="4" className="h-6 w-6" />,
    <Scale key="5" className="h-6 w-6" />,
    <Lightbulb key="6" className="h-6 w-6" />,
  ];
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
              A Decade of{" "}
              <span className="text-primary">Fintech Excellence</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              My professional journey spans regulatory compliance, business
              development, and strategic advisory roles across the African
              fintech landscape.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Professional Timeline
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Key roles and positions that have shaped my expertise in fintech
              and business advisory.
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
                {professional.map(
                  ({ role, description, period, company }, id) => (
                    <ExperienceCard
                      title={role}
                      company={company}
                      period={period}
                      description={description || ""}
                      icon={icons[Math.round(Math.random() * 7)]}
                      key={id}
                    />
                  )
                )}
              </TabsContent>
              <TabsContent value="advisory" className="space-y-8">
                {advisory.map(({ role, description, period, company }, id) => (
                  <ExperienceCard
                    title={role}
                    company={company}
                    period={period}
                    description={description || ""}
                    icon={icons[Math.round(Math.random() * 7)]}
                    key={id}
                  />
                ))}
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Education & Certifications
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Academic qualifications and professional certifications that have
              shaped my expertise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((item, idx) => (
                  <TimelineItem
                    icon={<GraduationCap className="h-6 w-6" />}
                    title={item.title}
                    organization={item.issuer}
                    period={item.period}
                    description={item.details}
                    key={idx}
                  /> 
                ))}
                
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="space-y-6">
                {certification.map((item, idx) => (
                  <TimelineItem
                    icon={<Award className="h-6 w-6" />}
                    title={item.title}
                    organization={item.issuer}
                    period={item.period}
                    description={item.details}
                    key={idx}
                  />
                ))}
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Notable Projects
            </h2>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Expertise
            </h2>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Client Testimonials
            </h2>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how my experience and expertise can help your
              business navigate regulatory challenges and achieve sustainable
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 font-medium"
                asChild
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-medium"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
