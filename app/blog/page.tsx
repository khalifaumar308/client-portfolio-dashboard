import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedGradient } from "@/components/animated-gradient"
import { BlogCategoryFilter } from "@/components/blog-category-filter"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { BlogPostsLoading } from "@/components/blog-posts-loading"
import { PopularTopicsLoading } from "@/components/popular-topics-loading"
import { BlogPosts } from "@/components/blog-posts"
import { FeaturedBlogPost } from "@/components/featured-blog-post"
import { PopularTopics } from "@/components/popular-topics"
import { getBlogCategories, getFeaturedBlogPost } from "@/lib/api"
import { getAllBlogPosts } from "@/lib/admin-actions/blogPost"

export const metadata = {
  title: "Blog | Abiola Jimoh",
  description: "Insights and articles on fintech, regulatory compliance, and business growth strategies.",
}

export default async function BlogPage() {
  // Fetch data in parallel
  const [categories, posts] = await Promise.all([getBlogCategories(), getAllBlogPosts()])
  ///extract first 3 posts as featured posts
  const featuredPosts = posts.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <AnimatedGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Insights & Perspectives
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              The <span className="text-primary">Fintech Frontier</span> Blog
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Expert insights on fintech innovation, regulatory compliance, and business growth strategies for the
              African market and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 h-12 rounded-full" />
            </div>
            <BlogCategoryFilter categories={categories} />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {/* <section className="w-full py-12 md:py-16 bg-red-700">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Article</h2>
          </div>

          <Suspense fallback={<div className="h-96 w-full rounded-2xl bg-muted animate-pulse" />}>
            <FeaturedBlogPost post={featuredPost} />
          </Suspense>
        </div>
      </section> */}

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
          </div>

          <Suspense fallback={<BlogPostsLoading count={6} />}>
            <BlogPosts />
          </Suspense>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Load More Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <NewsletterSignup />
        </div>
      </section>

      {/* Popular Topics */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Popular Topics</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore our most discussed subjects and gain valuable insights on these key areas.
            </p>
          </div>

          <Suspense fallback={<PopularTopicsLoading count={3} />}>
            <PopularTopics />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Have a Topic in Mind?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              If you'd like me to cover a specific topic or have questions about fintech regulation, business growth, or
              fundraising, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/contact">
                  Suggest a Topic <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/services">Explore My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
