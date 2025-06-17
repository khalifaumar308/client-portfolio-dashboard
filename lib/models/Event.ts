import mongoose from 'mongoose'

export interface IEvent {
  title: string;
  date: string;
  location?: string
  description: string
  type: string;
  role: string;
  eventUrl: string;
  image: string;
  _id:string
}

export interface NewEvent{
  title: string;
  date: string;
  location?: string
  description: string
  type: string;
  role: string;
  eventUrl: string;
  image: string;
}

const EventSchema = new mongoose.Schema<IEvent>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String },
  description: { type: String },
  type: { type: String, required: true },
  role: { type: String, required: true },
  eventUrl: { type: String, required: true },
  image: { type: String, required: true },
})

export default mongoose.models?.Event || mongoose.model<IEvent>('Event', EventSchema)
