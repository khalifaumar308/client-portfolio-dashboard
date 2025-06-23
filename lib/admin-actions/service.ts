import { connectToMongoDB } from '../models/connectDB'
import Service from '../models/Service'
import { INewService, IService } from '@/components/types'

type serviceUUpdate = INewService & { _id?: string }

export async function getAllServices() {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Service.find().lean())) as IService[]
}

export async function getServiceById(id: string) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Service.findById(id).lean())) as IService | null
}

export async function updateService(id: string, data: any) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Service.findByIdAndUpdate(id, data, { new: true }).lean())) as IService | null
}

export async function deleteService(id: string) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Service.findByIdAndDelete(id).lean())) as IService | null
}
