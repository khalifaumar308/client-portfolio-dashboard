import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedGradient } from "@/components/animated-gradient"
import { SocialLinks } from "@/components/social-links"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact | Abiola Jimoh",
  description: "Get in touch with Abiola Jimoh for fintech consulting and business advisory services.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Get in Touch
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Have a project in mind or want to learn more about my services? I'd love to hear from you and discuss how
              I can help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of the channels below or use the contact form to send me a message.
                  I typically respond within 24-48 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-muted-foreground">+234 123 456 7890</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available Monday-Friday, 9:00 AM - 5:00 PM (WAT)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground">samuel.johnson@example.com</p>
                    <p className="text-sm text-muted-foreground mt-1">For inquiries and appointments</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-muted-foreground">Abuja, Nigeria</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available for in-person meetings and virtual consultations
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Connect With Me</h3>
                <SocialLinks className="flex gap-4" />
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-muted/30 p-8">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold">Schedule a Consultation</h3>
                  <p className="text-muted-foreground">
                    For a more detailed discussion about your specific needs, schedule a 30-minute consultation call.
                  </p>
                  <Button className="rounded-full" asChild>
                    <Link href="https://calendly.com/samueljohnson/consultation">
                      Book a Time Slot <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-background p-8 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-30" />
              <div className="relative">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Answers to common questions about working with me and my consulting services.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What is your typical response time?</h3>
                <p className="text-muted-foreground">
                  I typically respond to all inquiries within 24-48 hours during business days. For urgent matters,
                  please indicate so in your message.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you work with clients outside Nigeria?</h3>
                <p className="text-muted-foreground">
                  Yes, I work with clients across Africa and internationally, particularly those interested in African
                  markets. Virtual consultations are available for clients in different time zones.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">What information should I include in my inquiry?</h3>
                <p className="text-muted-foreground">
                  To help me provide the most relevant response, please include details about your business, the
                  specific challenges you're facing, and your goals for our potential collaboration.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do your consulting engagements typically work?</h3>
                <p className="text-muted-foreground">
                  After an initial consultation, I'll propose an engagement structure based on your needs—whether that's
                  a one-time advisory session, a project-based engagement, or an ongoing retainer relationship.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you sign NDAs before initial discussions?</h3>
                <p className="text-muted-foreground">
                  Yes, I'm happy to sign a non-disclosure agreement before discussing sensitive business details. Client
                  confidentiality is paramount in all my engagements.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can you provide references from past clients?</h3>
                <p className="text-muted-foreground">
                  Yes, upon request and with their permission, I can connect you with past clients who can speak to
                  their experience working with me on similar projects or challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's work together to navigate regulatory challenges, accelerate growth, and build a sustainable fintech
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/experience">View Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
