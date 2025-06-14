import { NextRequest, NextResponse } from 'next/server'
import {
  getAllHeroes,
  createHero,
} from '@/lib/admin-actions/hero'

export async function GET(req: NextRequest) {
  try {
    const heroes = await getAllHeroes()
    return NextResponse.json(heroes)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hero data' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const hero = await createHero(data)
    return NextResponse.json(hero, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create hero' }, { status: 400 })
  }
}
