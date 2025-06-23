'use server'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../models/connectDB'
import Experience, { IExperience } from '../models/Experience'
import { redirect } from 'next/navigation'

export type ExperienceUpdate = IExperience & { _id?: string }

export async function getAllExperiences() {
  await connectToMongoDB()
  const exps = await Experience.find().lean()
  return JSON.parse(JSON.stringify(exps)) as ExperienceUpdate[]
}

export async function getExperienceById(id: string) {
  await connectToMongoDB()
  const experiance = await Experience.findById(id).lean()
  return JSON.parse(JSON.stringify(experiance)) as ExperienceUpdate
}

export async function createExperience(prevState: any, formData: FormData) {
  const eventForm = Object.fromEntries(formData.entries()).experience as string
  const finalEvent = JSON.parse(eventForm) as ExperienceUpdate
  await connectToMongoDB()
  
  if (finalEvent._id) {
    // If _id exists, update the experience
    const existingExperience = await Experience.findById(finalEvent._id).lean()
    if (!existingExperience) {
      throw new Error(`Experience with id ${finalEvent._id} not found`)
    }
    await Experience.findByIdAndUpdate(finalEvent._id, finalEvent, { new: true })
    revalidatePath('/admin/experience')
    redirect('/admin/experience')
    
  }
  const experience = new Experience(finalEvent)
  await experience.save()
  revalidatePath('/admin/experience')
  redirect('/admin/experience')

  return { success: true }
}

export async function updateExperience(id: string, data: any) {
  await connectToMongoDB()
  return Experience.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteExperience(id: string) {
  await connectToMongoDB()
  return Experience.findByIdAndDelete(id).lean()
}
