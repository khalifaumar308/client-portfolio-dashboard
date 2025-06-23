'use server'
import { connectToMongoDB } from '../models/connectDB'
import Testimonial, { ITestimonial } from '../models/Testimonial'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export interface TestimonailUpdate extends ITestimonial {
  _id?:string
}

export async function getAllTestimonials() {
  await connectToMongoDB()
  const testimonials = await Testimonial.find().lean()
  return JSON.parse(JSON.stringify(testimonials)) as TestimonailUpdate[]
}

export async function getTestimonialById(id: string) {
  await connectToMongoDB()
  const testi = await Testimonial.findById(id).lean()
  return JSON.parse(JSON.stringify(testi)) as TestimonailUpdate
}

export async function createTestimonial(prevData: any, formData: FormData) {
  const testm = Object.fromEntries(formData.entries()).service as string
  const testimonial = JSON.parse(testm) as TestimonailUpdate
  await connectToMongoDB()
  if (testimonial._id) {
    await Testimonial.findByIdAndUpdate(testimonial._id, { ...testimonial })
    revalidatePath('/admin/testimonials')
    redirect('/admin/testimonials')
    // return {success: true}
  }
  const tst = new Testimonial(testimonial)
  await tst.save()
  revalidatePath('/admin/testimonials')
  redirect('/admin/testimonials')
}

export async function updateTestimonial(id: string, data: any) {
  await connectToMongoDB()
  return Testimonial.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteTestimonial(id: string) {
  await connectToMongoDB()
  return Testimonial.findByIdAndDelete(id).lean()
}
