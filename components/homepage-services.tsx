import { getServices } from "@/lib/api"
import { ServiceCard } from "@/components/service-card"
import dynamic from "next/dynamic"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

// Dynamically import Lucide icons
const iconComponents: Record<string, LucideIcon> = {
  Shield: dynamic(() => import("lucide-react").then((mod) => mod.Shield)),
  BarChart3: dynamic(() => import("lucide-react").then((mod) => mod.BarChart3)),
  Building: dynamic(() => import("lucide-react").then((mod) => mod.Building)),
  // Add more icons as needed
}

export async function HomepageServices() {
  const services = await getServices()

  // Display up to 3 services on the homepage
  const displayServices = services.slice(0, 3)

  const getIconComponent = (iconName: string): ReactNode => {
    const IconComponent = iconComponents[iconName] || iconComponents.Shield
    return <IconComponent className="h-6 w-6" />
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {displayServices.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          icon={getIconComponent(service.icon)}
          features={service.features}
          link={service.link}
        />
      ))}
    </div>
  )
}
