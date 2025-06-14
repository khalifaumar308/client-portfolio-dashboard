import mongoose from 'mongoose'

const SocialLinkSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String },
}, { _id: false })

const ContactSchema = new mongoose.Schema({
  phone: { type: String },
  email: { type: String },
  location: { type: String },
  socialLinks: [SocialLinkSchema],
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)
