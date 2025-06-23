'use server'
import { connectToMongoDB } from '../models/connectDB'
import Service from '../models/Service'
import { INewService } from '@/components/types'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Server action for creating or updating a service
export async function createService(prevData: any, formData: FormData) {
  const service = Object.fromEntries(formData.entries()).service as string
  const finalService = JSON.parse(service) as INewService & { _id?: string }
  if (!finalService.title || !finalService.description || !finalService.subtext || !finalService.listItems) {
    return { error: 'Missing required fields' }
  }
  await connectToMongoDB()
  if (finalService._id) {
    // If _id exists, update the service
    const existingService = await Service.findById(finalService._id).lean()
    if (!existingService) {
      return { error: `Service with id ${finalService._id} not found` }
    }
    await Service.findByIdAndUpdate(finalService._id, finalService, { new: true })
    revalidatePath('/admin/services')
    redirect('/admin/services')
  }
  const newService = new Service(finalService)
  await newService.save()
  revalidatePath('/admin/services')
  redirect('/admin/services')
}

// Server action for deleting a service
export async function deleteServiceAction(prevState: any, formData: FormData) {
  const id = formData.get('serviceId') as string
  if (!id) return { error: 'Missing service id' }
  await connectToMongoDB()
  await Service.findByIdAndDelete(id)
  revalidatePath('/admin/services')
  return { success: true }
}
