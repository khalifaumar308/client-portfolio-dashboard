import { TestimonialForm } from "@/components/admin/testimonial-form";
import { getTestimonialById } from "@/lib/admin-actions/testimonial";

type EditServicePageProps = {
  params: {
    id: string; // The ID of the service to edit
  };
};

async function page({ params }: EditServicePageProps) {
  const testimonial = await getTestimonialById(params.id);
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Testimonial</h1>
      <TestimonialForm testimonial={testimonial} editMode />
    </div>
  );
}

export default page