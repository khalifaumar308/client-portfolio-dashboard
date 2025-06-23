import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ServiceForm } from "@/components/admin/service-form"

export const metadata = {
  title: "Add New Service | Admin Dashboard",
  description: "Create a new service entry",
}

export default function NewServicePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" className="mb-2" asChild>
            <Link href="/admin/services">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Add New Service</h1>
          <p className="text-muted-foreground">Create a new service entry</p>
        </div>
      </div>

      <ServiceForm />
    </div>
  )
}