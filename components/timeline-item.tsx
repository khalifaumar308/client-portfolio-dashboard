import type { ReactNode } from "react"

interface TimelineItemProps {
  icon: ReactNode
  title: string
  organization: string
  period: string
  description: string
}

export function TimelineItem({ icon, title, organization, period, description }: TimelineItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex flex-col md:flex-row gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <p className="text-sm font-medium text-primary">{period}</p>
          </div>
          <p className="text-base font-medium">{organization}</p>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
