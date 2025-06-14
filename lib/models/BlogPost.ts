import mongoose from 'mongoose'

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  body: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  coverImage: { type: String },
})

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema)
