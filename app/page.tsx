import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { AnimatedGradient } from "@/components/animated-gradient"
import { HomepageEvents } from "@/components/homepage-events"
import { HomepageStats } from "@/components/homepage-stats"
import { HomepageExpertise } from "@/components/homepage-expertise"
import { HomepageExperience } from "@/components/homepage-experience"
import { HomepageServices } from "@/components/homepage-services"
import { HomepageTestimonials } from "@/components/homepage-testimonials"
import { HomepageBlogPosts } from "@/components/homepage-blog-posts"
import { getHomepageData } from "@/lib/api"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Samuel Johnson | Fintech Consultant & Business Advisor",
  description:
    "Samuel Johnson is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
  openGraph: {
    title: "Samuel Johnson | Fintech Consultant & Business Advisor",
    description:
      "Samuel Johnson is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    type: "website",
    url: "https://samueljohnson.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Samuel Johnson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Johnson | Fintech Consultant & Business Advisor",
    description:
      "Samuel Johnson is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    images: ["/images/og-image.jpg"],
  },
}

export default async function Home() {
  const homepageData = await getHomepageData()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Fintech Consultant & Business Advisor
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  {homepageData.hero.title}{" "}
                  <span className="text-primary">{homepageData.hero.subtitle}</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                  {homepageData.hero.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                  <Link href="/services">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
              <div className="pt-4">
                <SocialLinks className="flex gap-5" />
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl" />
              <div className="relative aspect-square max-w-[400px] overflow-hidden rounded-full border-8 border-background shadow-xl">
                <Image
                  alt="Samuel Johnson"
                  className="object-cover"
                  fill
                  src="/placeholder.svg?height=400&width=400"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 border-y bg-muted/30">
        <div className="container px-4 md:px-6">
          <Suspense fallback={<div className="h-20 w-full animate-pulse bg-muted rounded-lg" />}>
            <HomepageStats />
          </Suspense>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Speaking Engagements
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Events</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Join me at these upcoming conferences and workshops where I'll be sharing insights on fintech regulation
              and business growth.
            </p>
          </div>

          <Suspense fallback={<div className="h-64 w-full animate-pulse bg-muted rounded-lg" />}>
            <HomepageEvents />
          </Suspense>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Core Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Specialized Knowledge</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              My expertise spans across critical areas in fintech, regulatory compliance, and business development.
            </p>
          </div>

          <Suspense fallback={<div className="h-96 w-full animate-pulse bg-muted rounded-lg" />}>
            <HomepageExpertise />
          </Suspense>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Professional Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Key Experience</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              A selection of my most impactful roles and achievements in the fintech and business advisory space.
            </p>
          </div>

          <Suspense fallback={<div className="h-96 w-full animate-pulse bg-muted rounded-lg" />}>
            <HomepageExperience />
          </Suspense>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Services
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How I Can Help</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Comprehensive consulting services tailored to the unique needs of fintech startups and established
              businesses.
            </p>
          </div>

          <Suspense fallback={<div className="h-96 w-full animate-pulse bg-muted rounded-lg" />}>
            <HomepageServices />
          </Suspense>

          <div className="flex justify-center mt-12">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Client Success Stories</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Hear from the businesses and entrepreneurs I've had the privilege of working with.
            </p>
          </div>

          <Suspense fallback={<div className="h-64 w-full animate-pulse bg-muted rounded-lg" />}>
            <HomepageTestimonials />
          </Suspense>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Insights
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Latest Articles</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Thoughts and insights on fintech, regulatory compliance, and business growth.
            </p>
          </div>

          <Suspense fallback={<div className="h-64 w-full animate-pulse bg-muted rounded-lg" />}>
            <HomepageBlogPosts />
          </Suspense>

          <div className="flex justify-center mt-12">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg">
              Have a project in mind or want to learn more about my services? I'd love to hear from you.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 shadow-lg">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="relative space-y-6">
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Feel free to reach out to discuss how I can help your business navigate the complex fintech
                    landscape and achieve sustainable growth.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <p>{homepageData.contact.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                          className="h-5 w-5 text-primary"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <p>{homepageData.contact.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <p>{homepageData.contact.location}</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-bold mb-3">Connect With Me</h3>
                    <SocialLinks className="flex gap-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-background p-8 shadow-lg">
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your company"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-md">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
