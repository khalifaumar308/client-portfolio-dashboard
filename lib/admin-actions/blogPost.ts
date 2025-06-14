import BlogPost from '../models/BlogPost'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/porpolio'

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI)
  }
}

export async function getAllBlogPosts() {
  await dbConnect()
  return BlogPost.find().lean()
}

export async function getBlogPostById(id: string) {
  await dbConnect()
  return BlogPost.findById(id).lean()
}

export async function createBlogPost(data: any) {
  await dbConnect()
  const post = new BlogPost(data)
  await post.save()
  return post.toObject()
}

export async function updateBlogPost(id: string, data: any) {
  await dbConnect()
  return BlogPost.findByIdAndUpdate(id, data, { new: true }).lean()
}

export async function deleteBlogPost(id: string) {
  await dbConnect()
  return BlogPost.findByIdAndDelete(id).lean()
}
