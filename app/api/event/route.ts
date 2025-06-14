import { NextRequest, NextResponse } from 'next/server'
import {
  getAllEvents,
  createEvent,
} from '@/lib/admin-actions/event'

export async function GET(req: NextRequest) {
  try {
    const events = await getAllEvents()
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const event = await createEvent(data)
    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 400 })
  }
}
