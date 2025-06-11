import Link from "next/link"
import { Briefcase } from "lucide-react"

import { SocialLinks } from "@/components/social-links"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container flex flex-col gap-8 py-12 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg">Samuel Johnson</span>
            </Link>
            <p className="text-muted-foreground">
              Seasoned fintech consultant with over a decade of experience helping businesses navigate regulatory
              landscapes, secure funding, and build sustainable growth strategies.
            </p>
            <SocialLinks className="flex gap-4 mt-4" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-base font-medium">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Content</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap.xml"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services/regulatory-compliance"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Regulatory Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/business-development"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Business Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/legal-advisory"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Legal Advisory
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t pt-8 mt-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Samuel Johnson. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Fintech Consultant & Business Advisor</p>
        </div>
      </div>
    </footer>
  )
}
