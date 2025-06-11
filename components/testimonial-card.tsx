import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  image: string
}

export function TestimonialCard({ quote, name, title, image }: TestimonialCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex flex-col items-center space-y-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-background shadow-md">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
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
          className="h-8 w-8 text-primary/20"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
        <blockquote className="text-center text-muted-foreground italic">"{quote}"</blockquote>
        <div className="text-center">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  )
}
