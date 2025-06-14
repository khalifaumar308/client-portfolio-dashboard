import { NextRequest, NextResponse } from 'next/server'
import {
  getStatById,
  updateStat,
  deleteStat,
} from '@/lib/admin-actions/stat'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const stat = await getStatById(params.id)
    if (!stat) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(stat)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stat' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await req.json()
    const stat = await updateStat(params.id, data)
    if (!stat) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(stat)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update stat' }, { status: 400 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const stat = await deleteStat(params.id)
    if (!stat) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete stat' }, { status: 400 })
  }
}
