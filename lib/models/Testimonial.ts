import mongoose from 'mongoose'

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  quote: { type: String, required: true },
  avatar: { type: String }, // URL or path
})

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema)
