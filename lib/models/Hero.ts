// filepath: /lib/models/Hero.ts
import mongoose from 'mongoose'

const HeroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // URL or path
})

export default mongoose.models.Hero || mongoose.model('Hero', HeroSchema)
