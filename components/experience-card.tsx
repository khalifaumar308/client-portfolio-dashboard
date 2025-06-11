import type { ReactNode } from "react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  icon: ReactNode
}

export function ExperienceCard({ title, company, period, description, icon }: ExperienceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex flex-col gap-4 md:flex-row">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</div>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm font-medium text-primary">{period}</p>
          </div>
          <p className="text-base font-medium">{company}</p>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
