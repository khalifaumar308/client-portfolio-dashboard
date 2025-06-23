import { getAllTestimonials } from "@/lib/admin-actions/testimonial";
import { TestimonialsTable } from "@/components/admin/testimonials-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata = {
  title: "Testimonials | Admin Dashboard",
  description: "Manage all testimonials in the application",
};

export default async function TestimonialsPage() {
  const testimonials = await getAllTestimonials();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
          <p className="text-muted-foreground">
            Manage all testimonials in the application
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/testimonials/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Testimonial
          </Link>
        </Button>
      </div>
      <div className="flex items-center justify-between"></div>
      <TestimonialsTable testimonials={testimonials} />
    </div>
  );
}
