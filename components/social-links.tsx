import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={className}>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="transition-transform hover:scale-110"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
          <Twitter className="h-5 w-5 text-primary" />
        </div>
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="transition-transform hover:scale-110"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
          <Linkedin className="h-5 w-5 text-primary" />
        </div>
      </Link>
      <Link
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="transition-transform hover:scale-110"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
          <Github className="h-5 w-5 text-primary" />
        </div>
      </Link>
    </div>
  )
}
