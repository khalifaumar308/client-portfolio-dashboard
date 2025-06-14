import Experience from '../models/Experience'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getAllExperiences() {
  await dbConnect()
  return Experience.find().lean()
}

export async function getExperienceById(id: string) {
  await dbConnect()
  return Experience.findById(id).lean()
}

export async function createExperience(data: any) {
  await dbConnect()
  const experience = new Experience(data)
  await experience.save()
  return experience.toObject()
}

export async function updateExperience(id: string, data: any) {
  await dbConnect()
  return Experience.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteExperience(id: string) {
  await dbConnect()
  return Experience.findByIdAndDelete(id).lean()
}
