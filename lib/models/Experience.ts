import mongoose from 'mongoose'

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true }, // e.g. "2020-2023"
  description: { type: String },
})

export default mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema)
