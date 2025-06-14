import { NextRequest, NextResponse } from 'next/server'
import {
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
} from '@/lib/admin-actions/blogPost'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const post = await getBlogPostById(params.id)
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await req.json()
    const post = await updateBlogPost(params.id, data)
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 400 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const post = await deleteBlogPost(params.id)
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 400 })
  }
}
