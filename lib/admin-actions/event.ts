import Event from '../models/Event'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getAllEvents() {
  await dbConnect()
  return Event.find().lean()
}

export async function getEventById(id: string) {
  await dbConnect()
  return Event.findById(id).lean()
}

export async function createEvent(data: any) {
  await dbConnect()
  const event = new Event(data)
  await event.save()
  return event.toObject()
}

export async function updateEvent(id: string, data: any) {
  await dbConnect()
  return Event.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteEvent(id: string) {
  await dbConnect()
  return Event.findByIdAndDelete(id).lean()
}
