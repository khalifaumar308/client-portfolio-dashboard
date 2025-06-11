import { getTestimonials } from "@/lib/api"
import { TestimonialCard } from "@/components/testimonial-card"

export async function HomepageTestimonials() {
  const testimonials = await getTestimonials()

  // Display up to 3 testimonials on the homepage
  const displayTestimonials = testimonials.slice(0, 3)

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {displayTestimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          quote={testimonial.quote}
          name={testimonial.name}
          title={testimonial.title}
          image={testimonial.image}
        />
      ))}
    </div>
  )
}
