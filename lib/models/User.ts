import mongoose from 'mongoose'

const StatSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
})

export default mongoose.models.User || mongoose.model('User', StatSchema)