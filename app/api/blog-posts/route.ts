import { NextRequest, NextResponse } from 'next/server'
import {
  getAllBlogPosts,
  createBlogPost,
} from '@/lib/admin-actions/blogPost'

export async function GET(req: NextRequest) {
  try {
    const posts = await getAllBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const post = await createBlogPost(data)
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 400 })
  }
}
