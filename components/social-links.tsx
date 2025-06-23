import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  className?: string
  socials: { platform: string;
    url: string;}[]
}

export function SocialLinks({ className, socials }: SocialLinksProps) {
  
  if (!socials || socials.length === 0) {
    return null; // Return null if no socials are provided
  }
  return (
    <div className={className}>
      {socials.map((social, index) => {
        const IconComponent = {
          Facebook: Facebook,
          Twitter: Twitter,
          LinkedIn: Linkedin,
          Instagram: Instagram,
          GitHub: Github,
        }[social.platform] || Facebook; // Default to Facebook if platform not recognized
        return (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="transition-transform hover:scale-110"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

     