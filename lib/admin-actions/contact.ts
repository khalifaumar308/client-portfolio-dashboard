import Contact from '../models/Contact'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getContact() {
  await dbConnect()
  return Contact.findOne().lean()
}

export async function updateContact(id: string, data: any) {
  await dbConnect()
  return Contact.findByIdAndUpdate(id, data, { new: true }).lean()
}
