import Hero from '../models/Hero'
import mongoose from 'mongoose'

// Connect to MongoDB (adjust URI as needed)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getAllHeroes() {
  await dbConnect()
  return Hero.find().lean()
}

export async function getHeroById(id: string) {
  await dbConnect()
  return Hero.findById(id).lean()
}

export async function createHero(data: any) {
  await dbConnect()
  const hero = new Hero(data)
  await hero.save()
  return hero.toObject()
}

export async function updateHero(id: string, data: any) {
  await dbConnect()
  return Hero.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteHero(id: string) {
  await dbConnect()
  return Hero.findByIdAndDelete(id).lean()
}
