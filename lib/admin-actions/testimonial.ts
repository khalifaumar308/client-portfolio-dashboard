import Testimonial from '../models/Testimonial'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getAllTestimonials() {
  await dbConnect()
  return Testimonial.find().lean()
}

export async function getTestimonialById(id: string) {
  await dbConnect()
  return Testimonial.findById(id).lean()
}

export async function createTestimonial(data: any) {
  await dbConnect()
  const testimonial = new Testimonial(data)
  await testimonial.save()
  return testimonial.toObject()
}

export async function updateTestimonial(id: string, data: any) {
  await dbConnect()
  return Testimonial.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteTestimonial(id: string) {
  await dbConnect()
  return Testimonial.findByIdAndDelete(id).lean()
}
