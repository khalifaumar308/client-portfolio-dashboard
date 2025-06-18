import mongoose from 'mongoose'

export interface IBlogPost {
  title: string
  date: string
  category: string
  readTime: string
  excerpt: string
  content: string
  image: string
  tags?: string[]
}


const BlogPostSchema = new mongoose.Schema<IBlogPost>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  readTime: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: [String], default: [] }
})

export default mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema)
