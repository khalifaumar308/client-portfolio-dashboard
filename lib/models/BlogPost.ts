import mongoose from 'mongoose'

export interface IBlogPost {
  title: string
  slug: string
  date: string
  category: string
  readTime: string
  excerpt: string
  content: string
  image: string
  author: string
}

const BlogPostSchema = new mongoose.Schema<IBlogPost>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  readTime: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
})

export default mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema)
