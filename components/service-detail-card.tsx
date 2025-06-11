import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"

interface ServiceDetailCardProps {
  title: string
  description: string
  icon: ReactNode
  image: string
  features: string[]
  cta: {
    text: string
    link: string
  }
}

export function ServiceDetailCard({ title, description, icon, image, features, cta }: ServiceDetailCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden md:order-2">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="relative p-6 md:p-8 space-y-6">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="rounded-full" asChild>
            <Link href={cta.link}>
              {cta.text} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
