import { ServiceCard } from "@/components/service-card"
import type { ReactNode } from "react"
import { getAllServices } from "@/lib/admin-actions/service"
import { iconOptions } from "./iconOptions"

// Dynamically import Lucide icons

export async function HomepageServices() {
  const services = await getAllServices()
  //dsiplay featured only
  const displayServices = services.filter(service => service.featured)
  // Display up to 3 services on the homepage
  const displayedServices = displayServices.slice(0, 3)

  const getIconComponent = (iconName: string): ReactNode => {
    const IconComponent = iconOptions.find((icon) => icon.value === iconName)?.icon || iconOptions[0].icon
    return IconComponent;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {displayedServices.map((service) => (
        <ServiceCard
          key={service._id}
          title={service.title}
          description={service.description}
          icon={getIconComponent(service.icon!)}
          features={service.listItems}
          link={`/services/${service._id}`}
        />
      ))}
    </div>
  )
}
