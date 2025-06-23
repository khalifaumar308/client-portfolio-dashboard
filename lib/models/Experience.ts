import mongoose from 'mongoose'

export interface IExperience {
  role: string
  company: string
  period: string // e.g. "2020-2023"
  description?: string,
  type?: 'Professional' | 'Advisory' // Default type for consistency
}

const ExperienceSchema = new mongoose.Schema <IExperience>({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true }, // e.g. "2020-2023"
  description: { type: String },
  type: { type: String, default: 'Profesional' }, // Default type for consistency
})

export default mongoose.models.Experience || mongoose.model<IExperience>('Experience', ExperienceSchema)
