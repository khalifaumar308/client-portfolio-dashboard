import { NextRequest, NextResponse } from 'next/server'
import {
  getAllStats,
  createStat,
} from '@/lib/admin-actions/stat'

export async function GET(req: NextRequest) {
  try {
    const stats = await getAllStats()
    return NextResponse.json(stats)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const stat = await createStat(data)
    return NextResponse.json(stat, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create stat' }, { status: 400 })
  }
}
