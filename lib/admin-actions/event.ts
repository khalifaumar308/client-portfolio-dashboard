'use server'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../models/connectDB'
import Event, { IEvent, NewEvent } from '../models/Event'

export async function getAllEvents() {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Event.find().lean())) as IEvent[]
}

export async function getEventById(id: string) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Event.findById(id).lean())) as IEvent | null
}

export async function addEvent(prevState: any, formData: FormData) {
  const eventForm = Object.fromEntries(formData.entries()).event as string
  const finalEvent = JSON.parse(eventForm) as NewEvent
  // if (!finalEvent || !finalEvent.title || !finalEvent.date || !finalEvent.type || !finalEvent.role || !finalEvent.eventUrl || !finalEvent.image) {
  //   throw new Error("Missing required fields: title, date, type, role, eventUrl, or image")
  // }
  await connectToMongoDB()
  const event = new Event(finalEvent)
  await event.save()
  revalidatePath('/admin/events')
}

export async function updateEvent(id: string, data: Partial<IEvent>) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Event.findByIdAndUpdate(id, data, { new: true }).lean())) as IEvent | null
}

export async function deleteEvent(id: string) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Event.findByIdAndDelete(id).lean())) as IEvent | null
}
