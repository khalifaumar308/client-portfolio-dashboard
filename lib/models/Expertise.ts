import mongoose from 'mongoose'

const ExpertiseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
})

export default mongoose.models.Expertise || mongoose.model('Expertise', ExpertiseSchema)
