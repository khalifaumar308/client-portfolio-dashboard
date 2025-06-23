import { TestimonialForm } from "@/components/admin/testimonial-form"

export const metadata = {
  title: "Add New Testimonial | Admin Dashboard",
  description: "Create a new testimonial entry",
}

export default function NewTestimonialPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Testimonial</h1>
          <p className="text-muted-foreground">Create a new testimonial entry</p>
        </div>
      </div>
      <TestimonialForm />
    </div>
  )
}