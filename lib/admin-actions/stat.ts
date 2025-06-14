import Stat from '../models/Stat'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getAllStats() {
  await dbConnect()
  return Stat.find().lean()
}

export async function getStatById(id: string) {
  await dbConnect()
  return Stat.findById(id).lean()
}

export async function createStat(data: any) {
  await dbConnect()
  const stat = new Stat(data)
  await stat.save()
  return stat.toObject()
}

export async function updateStat(id: string, data: any) {
  await dbConnect()
  return Stat.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteStat(id: string) {
  await dbConnect()
  return Stat.findByIdAndDelete(id).lean()
}
