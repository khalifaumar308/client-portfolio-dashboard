import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  link: string
}

export function ServiceCard({ title, description, icon, features, link }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button variant="outline" className="w-full rounded-full" asChild>
            <Link href={link}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
