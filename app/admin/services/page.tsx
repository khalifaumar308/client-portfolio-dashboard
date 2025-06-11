import Link from "next/link"
import { Briefcase, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServicesTable } from "@/components/admin/services-table"

export const metadata = {
  title: "Services Management | Admin Dashboard",
  description: "Manage your professional services",
}

export default function ServicesPage() {
  // Mock data
  const services = [
    {
      id: "1",
      title: "Fintech Consulting",
      slug: "fintech-consulting",
      description: "Expert guidance on fintech strategy, implementation, and optimization.",
      icon: "Lightbulb",
      featured: true,
      order: 1,
    },
    {
      id: "2",
      title: "Regulatory Compliance",
      slug: "regulatory-compliance",
      description: "Navigate complex regulatory landscapes with confidence.",
      icon: "Shield",
      featured: true,
      order: 2,
    },
    {
      id: "3",
      title: "Digital Transformation",
      slug: "digital-transformation",
      description: "Transform your financial services for the digital age.",
      icon: "RefreshCw",
      featured: true,
      order: 3,
    },
    {
      id: "4",
      title: "Financial Inclusion Strategy",
      slug: "financial-inclusion",
      description: "Develop strategies to reach underserved markets.",
      icon: "Users",
      featured: false,
      order: 4,
    },
    {
      id: "5",
      title: "Payments Innovation",
      slug: "payments-innovation",
      description: "Modernize payment systems and infrastructure.",
      icon: "CreditCard",
      featured: false,
      order: 5,
    },
  ]

  const featuredCount = services.filter((service) => service.featured).length

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="text-muted-foreground">Manage your professional services</p>
        </div>
        <Button asChild>
          <Link href="/admin/services/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Service
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{services.length}</div>
            <p className="text-xs text-muted-foreground">{services.length === 1 ? "Service" : "Services"} available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Featured Services</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{featuredCount}</div>
            <p className="text-xs text-muted-foreground">{featuredCount === 1 ? "Service" : "Services"} featured</p>
          </CardContent>
        </Card>
      </div>

      <ServicesTable services={services} />
    </div>
  )
}
