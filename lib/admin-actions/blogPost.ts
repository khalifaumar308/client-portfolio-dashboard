'use server'
import BlogPost, { IBlogPost } from '../models/BlogPost'
import { connectToMongoDB } from '../models/connectDB'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export interface IDBlog extends IBlogPost {
  _id: string
}

interface BlogPostData extends IBlogPost {
  _id?: string
}


export async function getAllBlogPosts() {
  await connectToMongoDB()
  const posts = await BlogPost.find().lean()
  return JSON.parse(JSON.stringify(posts)) as IDBlog[]
}

export async function getBlogPostById(id: string) {
  await connectToMongoDB()
  //check if id is a valid ObjectId and BlogPost exists
  if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
    throw new Error('Invalid blog post ID')
  }
  const post = await BlogPost.findById(id).lean()
  if (!post) {
    throw new Error(`Blog post with id ${id} not found`)
  }
  // If the post is found, return it
  console.log(post, 'post in getBlogPostById')
  return JSON.parse(JSON.stringify(post)) as IDBlog
}

export async function createBlogPostT(prevState: any, formData: FormData) {

  const blogForm = Object.fromEntries(formData.entries()).blog as string
  const finalblog = JSON.parse(blogForm) as BlogPostData
  console.log(finalblog, 'finalblog in createBlogPostT')
  await connectToMongoDB()
  if (finalblog._id) {
    // If _id exists, update the blog post
    const existingPost = await BlogPost.findById(finalblog._id).lean()
    if (!existingPost) {
      throw new Error(`Blog post with id ${finalblog._id} not found`)
    }
    await BlogPost.findByIdAndUpdate(finalblog._id, finalblog, { new: true })
    revalidatePath('/admin/blog')
    redirect('/admin/blog')
    return 'Blog post updated successfully'
  }
  // If _id does not exist, create a new blog post
  const post = new BlogPost({ ...finalblog })
  await post.save()
  revalidatePath('/admin/blog')
  redirect('/admin/blog')
  return 'Blog post created successfully'
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
