'use server'
import BlogPost, { IBlogPost } from '../models/BlogPost'
import mongoose from 'mongoose'
import { connectToMongoDB } from '../models/connectDB'
import { revalidatePath } from 'next/cache'


export async function getAllBlogPosts() {
  await connectToMongoDB()
  return BlogPost.find().lean()
}

export async function getBlogPostById(id: string) {
  await connectToMongoDB()
  return BlogPost.findById(id).lean()
}

export async function createBlogPostT(prevState: any, formData: FormData) {
  const blogForm = Object.fromEntries(formData.entries()).blog as string
  const finalblog = JSON.parse(blogForm) as IBlogPost

  await connectToMongoDB()
  const post = new BlogPost(finalblog)
  await post.save()
  revalidatePath('/admin/blog')
}

// export async function addEvent(prevState: any, formData: FormData) {
//   const eventForm = Object.fromEntries(formData.entries()).event as string
//   const finalEvent = JSON.parse(eventForm) as NewEvent
//   // if (!finalEvent || !finalEvent.title || !finalEvent.date || !finalEvent.type || !finalEvent.role || !finalEvent.eventUrl || !finalEvent.image) {
//   //   throw new Error("Missing required fields: title, date, type, role, eventUrl, or image")
//   // }
//   await connectToMongoDB()
//   const event = new Event(finalEvent)
//   await event.save()
//   revalidatePath('/admin/events')
// }

export async function updateBlogPost(id: string, data: any) {
  await connectToMongoDB()
  return BlogPost.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteBlogPost(id: string) {
  await connectToMongoDB()
  return BlogPost.findByIdAndDelete(id).lean()
}
