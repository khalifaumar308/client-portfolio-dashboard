import mongoose from 'mongoose'

export interface ITestimonial {
  name: string;
  role: string;
  image?: string;
  quote: string;
}

const TestimonialSchema = new mongoose.Schema<ITestimonial>({
  name: { type: String, required: true },
  role: { type: String },
  quote: { type: String, required: true },
  image: { type: String }, // URL or path
})

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema)
