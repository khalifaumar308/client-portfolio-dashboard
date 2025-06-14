import mongoose from 'mongoose'

const StatSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
  icon: { type: String }, // Icon name or URL
})

export default mongoose.models.Stat || mongoose.model('Stat', StatSchema)
