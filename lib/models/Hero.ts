// filepath: /lib/models/Hero.ts
import mongoose from 'mongoose'
import {type IHero} from '@/components/types'

const HeroSchema = new mongoose.Schema<IHero>({
  title: { type: String, required: true },
  imageUrl: { type: String }, // URL or path
  subText: { type: String, required: true },
  yearsOfExperience: { type: Number, default: 0 },
  clientsServed: { type: Number, default: 0 },
  endorsements: { type: Number, default: 0 },
  partnerships: { type: Number, default: 0 },
  socialMediaLinks: [{
    platform: { type: String, required: true },
    url: { type: String, required: true }
  }]
}, {
  timestamps: true,
  versionKey: false
})

export default mongoose.models?.Hero || mongoose.model('Hero', HeroSchema)
