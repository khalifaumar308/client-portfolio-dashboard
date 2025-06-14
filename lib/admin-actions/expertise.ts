import Expertise from '../models/Expertise'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getAllExpertise() {
  await dbConnect()
  return Expertise.find().lean()
}

export async function getExpertiseById(id: string) {
  await dbConnect()
  return Expertise.findById(id).lean()
}

export async function createExpertise(data: any) {
  await dbConnect()
  const expertise = new Expertise(data)
  await expertise.save()
  return expertise.toObject()
}

export async function updateExpertise(id: string, data: any) {
  await dbConnect()
  return Expertise.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteExpertise(id: string) {
  await dbConnect()
  return Expertise.findByIdAndDelete(id).lean()
}
