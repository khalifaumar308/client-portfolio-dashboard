'use server'
import { revalidatePath } from 'next/cache'
import { connectToMongoDB } from '../models/connectDB'
import Event, { IEvent, NewEvent } from '../models/Event'
import { redirect } from 'next/navigation'

interface DbEvent extends IEvent {
  _id: string
}

interface EventData extends NewEvent { 
  _id?: string
}

export async function getAllEvents() {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Event.find().lean())) as DbEvent[]
}

export async function getEventById(id: string) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Event.findById(id).lean())) as IEvent | null
}

export async function addEvent(prevState: any, formData: FormData) {
  const eventForm = Object.fromEntries(formData.entries()).event as string
  const finalEvent = JSON.parse(eventForm) as EventData
  // if (!finalEvent || !finalEvent.title || !finalEvent.date || !finalEvent.type || !finalEvent.role || !finalEvent.eventUrl || !finalEvent.image) {
  //   throw new Error("Missing required fields: title, date, type, role, eventUrl, or image")
  // }
  await connectToMongoDB()
  if (finalEvent._id) {
    // If _id exists, update the event
    const existingEvent = await Event.findById(finalEvent._id).lean()
    if (!existingEvent) {
      throw new Error(`Event with id ${finalEvent._id} not found`)
    }
    await Event.findByIdAndUpdate(finalEvent._id, finalEvent, { new: true })
    revalidatePath('/admin/events')
    redirect('/admin/events')    
  }
  const event = new Event(finalEvent)
  await event.save()
  revalidatePath('/admin/events')
  redirect('/admin/events')
}

export async function updateEvent(id: string, data: Partial<IEvent>) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Event.findByIdAndUpdate(id, data, { new: true }).lean())) as IEvent | null
}

export async function deleteEvent(id: string) {
  await connectToMongoDB()
  return JSON.parse(JSON.stringify(await Event.findByIdAndDelete(id).lean())) as IEvent | null
}
