import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BlogCard } from "@/components/blog-card"
import { NewsletterSignup } from "@/components/newsletter-signup"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  return {
    title: "The Future of Fintech Regulation in Africa",
    excerpt:
      "An in-depth analysis of emerging regulatory frameworks across African markets and how they will shape the future of fintech innovation and growth.",
    content: `
      <p>The fintech landscape across Africa is evolving at an unprecedented pace, with new startups and innovations emerging regularly. However, this rapid growth has created a complex regulatory environment that varies significantly from country to country.</p>
      
      <h2>Current Regulatory Landscape</h2>
      
      <p>Currently, fintech regulation in Africa exists on a spectrum. Countries like South Africa, Kenya, and Nigeria have made significant strides in developing comprehensive regulatory frameworks, while others are still in the early stages of addressing fintech-specific concerns.</p>
      
      <p>In Nigeria, the Central Bank has introduced several policies aimed at creating a balanced ecosystem that encourages innovation while protecting consumers and ensuring financial stability. These include:</p>
      
      <ul>
        <li>The Regulatory Framework for Payment Service Banks</li>
        <li>Guidelines for Mobile Money Services</li>
        <li>Regulations for Agency Banking</li>
      </ul>
      
      <p>Kenya, home to M-Pesa, one of Africa's most successful fintech innovations, has developed regulations through iterative processes, often allowing innovations to develop before creating specific regulatory frameworks.</p>
      
      <h2>Emerging Trends in Fintech Regulation</h2>
      
      <p>Several key trends are shaping the future of fintech regulation across the continent:</p>
      
      <h3>1. Regulatory Sandboxes</h3>
      
      <p>Regulatory sandboxes are becoming increasingly popular as they allow fintech companies to test innovative products in a controlled environment with regulatory oversight. Countries like Sierra Leone, Mozambique, and Rwanda have implemented or are developing sandbox frameworks.</p>
      
      <h3>2. Regional Harmonization</h3>
      
      <p>There's a growing recognition of the need for regional regulatory harmonization to facilitate cross-border fintech operations. Organizations like the West African Monetary Institute (WAMI) and the East African Community (EAC) are working towards standardizing certain aspects of fintech regulation.</p>
      
      <h3>3. Risk-Based Approaches</h3>
      
      <p>Regulators are increasingly adopting risk-based approaches that apply different levels of regulatory scrutiny based on the potential risks posed by specific fintech activities. This allows for more proportionate regulation that doesn't stifle innovation.</p>
      
      <h2>Challenges and Opportunities</h2>
      
      <p>Despite progress, significant challenges remain:</p>
      
      <ul>
        <li><strong>Capacity constraints:</strong> Many regulatory bodies lack the technical expertise to effectively oversee complex fintech innovations.</li>
        <li><strong>Balancing innovation and protection:</strong> Finding the right balance between encouraging innovation and protecting consumers and financial stability remains difficult.</li>
        <li><strong>Cross-border issues:</strong> Differences in regulatory approaches create challenges for fintech companies operating across multiple African countries.</li>
      </ul>
      
      <p>However, these challenges also present opportunities:</p>
      
      <ul>
        <li><strong>Regulatory technology (RegTech):</strong> The development of technology solutions to streamline compliance processes.</li>
        <li><strong>Public-private collaboration:</strong> Increased dialogue between regulators and industry players to develop more effective regulatory frameworks.</li>
        <li><strong>Leapfrogging:</strong> The opportunity for African countries to bypass outdated regulatory approaches and implement innovative frameworks suited to digital financial services.</li>
      </ul>
      
      <h2>The Path Forward</h2>
      
      <p>The future of fintech regulation in Africa will likely be characterized by:</p>
      
      <ol>
        <li>More collaborative approaches between regulators and industry</li>
        <li>Greater regional harmonization of regulatory frameworks</li>
        <li>Increased use of technology in regulatory processes</li>
        <li>Activity-based rather than entity-based regulation</li>
        <li>Stronger consumer protection measures</li>
      </ol>
      
      <p>For fintech companies operating in Africa, staying ahead of regulatory developments will be crucial. This means not only complying with existing regulations but also actively engaging with regulators to help shape future frameworks.</p>
      
      <h2>Conclusion</h2>
      
      <p>The regulatory landscape for fintech in Africa is at a critical juncture. The decisions made by regulators in the coming years will significantly impact the trajectory of fintech innovation across the continent. By adopting flexible, innovation-friendly approaches while ensuring adequate consumer protection, African regulators can help create an environment where fintech can thrive and contribute to greater financial inclusion and economic growth.</p>
    `,
    date: "April 15, 2025",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Regulation",
    readTime: "8 min read",
    author: {
      name: "Samuel Johnson",
      title: "Fintech Consultant & Business Advisor",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Samuel Johnson is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    },
    tags: ["Fintech", "Regulation", "Africa", "Innovation", "Compliance"],
  }
}

// This would typically come from a CMS or database
const getRelatedPosts = () => {
  return [
    {
      title: "Navigating Fintech Regulations in Africa",
      excerpt:
        "A comprehensive guide to understanding and complying with the evolving regulatory landscape for fintech companies in Africa.",
      date: "April 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/fintech-regulations-africa",
      category: "Regulatory",
      readTime: "6 min read",
    },
    {
      title: "Compliance as a Competitive Advantage",
      excerpt:
        "How fintech companies can transform regulatory compliance from a cost center to a strategic advantage in the marketplace.",
      date: "January 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/compliance-competitive-advantage",
      category: "Regulatory",
      readTime: "6 min read",
    },
    {
      title: "The Role of Strategic Partnerships in Fintech Growth",
      excerpt:
        "How strategic alliances and partnerships can accelerate growth and market penetration for fintech companies.",
      date: "February 15, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "/blog/strategic-partnerships-fintech",
      category: "Strategy",
      readTime: "7 min read",
    },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return {
    title: `${post.title} | Samuel Johnson Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const relatedPosts = getRelatedPosts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <Button variant="ghost" size="sm" className="mb-4" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>
              <Badge className="mb-4 bg-primary hover:bg-primary/90">{post.category}</Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            </div>

            <div className="flex items-center justify-between border-y py-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={post.author.image || "/placeholder.svg"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.author.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link key={index} href={`/blog?tag=${tag.toLowerCase()}`}>
                  <Badge variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Share this article</h3>
                <p className="text-sm text-muted-foreground">Spread the knowledge with your network</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Twitter">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Facebook">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Share via other methods">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full shrink-0">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{post.author.title}</p>
                <p className="text-sm">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Related Articles</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Continue exploring topics related to {post.category.toLowerCase()} and fintech innovation.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={index}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  date={relatedPost.date}
                  image={relatedPost.image}
                  slug={relatedPost.slug}
                  category={relatedPost.category}
                  readTime={relatedPost.readTime}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need Expert Guidance?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              If you're facing challenges with regulatory compliance or business growth in the fintech space, I can help
              you navigate the complexities and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 font-medium" asChild>
                <Link href="/services">View My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
