import { NextRequest, NextResponse } from 'next/server'
import {
  getHeroById,
  updateHero,
  deleteHero,
} from '@/lib/admin-actions/hero'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const hero = await getHeroById(params.id)
    if (!hero) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(hero)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hero' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await req.json()
    const hero = await updateHero(params.id, data)
    if (!hero) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(hero)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update hero' }, { status: 400 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const hero = await deleteHero(params.id)
    if (!hero) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete hero' }, { status: 400 })
  }
}
