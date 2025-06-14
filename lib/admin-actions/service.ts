import Service from '../models/Service'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getAllServices() {
  await dbConnect()
  return Service.find().lean()
}

export async function getServiceById(id: string) {
  await dbConnect()
  return Service.findById(id).lean()
}

export async function createService(data: any) {
  await dbConnect()
  const service = new Service(data)
  await service.save()
  return service.toObject()
}

export async function updateService(id: string, data: any) {
  await dbConnect()
  return Service.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteService(id: string) {
  await dbConnect()
  return Service.findByIdAndDelete(id).lean()
}
