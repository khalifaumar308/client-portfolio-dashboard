import Link from "next/link"
import { Calendar, FileText, Briefcase, Award, MessageSquare, BarChart, ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboard() {
  // Mock data
  const stats = {
    blogCount: 12,
    eventsCount: 5,
    testimonialsCount: 8,
    yearsExperience: 15,
  }

  const recentBlogPosts = [
    {
      id: "1",
      title: "The Future of Fintech Regulation",
      category: "Regulation",
      readTime: "5 min read",
      date: "May 10, 2023",
    },
    {
      id: "2",
      title: "Blockchain in Financial Services",
      category: "Technology",
      readTime: "8 min read",
      date: "April 22, 2023",
    },
    {
      id: "3",
      title: "Digital Banking Trends for 2023",
      category: "Banking",
      readTime: "6 min read",
      date: "March 15, 2023",
    },
    {
      id: "4",
      title: "Financial Inclusion Through Technology",
      category: "Inclusion",
      readTime: "7 min read",
      date: "February 28, 2023",
    },
    {
      id: "5",
      title: "The Rise of Embedded Finance",
      category: "Innovation",
      readTime: "4 min read",
      date: "January 12, 2023",
    },
  ]

  const recentEvents = [
    {
      id: "1",
      title: "Fintech Summit 2023",
      location: "New York, USA",
      role: "Keynote Speaker",
      date: "June 15, 2023",
    },
    {
      id: "2",
      title: "Future of Banking Conference",
      location: "London, UK",
      role: "Panelist",
      date: "July 22, 2023",
    },
    {
      id: "3",
      title: "Digital Finance Forum",
      location: "Singapore",
      role: "Moderator",
      date: "August 10, 2023",
    },
  ]

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8 w-full max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your content management system.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.blogCount}</div>
            <p className="text-xs text-muted-foreground">{stats.blogCount === 1 ? "Post" : "Posts"} published</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.eventsCount}</div>
            <p className="text-xs text-muted-foreground">Upcoming {stats.eventsCount === 1 ? "event" : "events"}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.testimonialsCount}</div>
            <p className="text-xs text-muted-foreground">
              Client {stats.testimonialsCount === 1 ? "testimonial" : "testimonials"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Experience</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.yearsExperience}</div>
            <p className="text-xs text-muted-foreground">Years of experience</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
            <CardDescription>Your most recently published blog posts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBlogPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-4">
                  <div className="flex-1 space-y-1">
                    <p className="font-medium leading-none">{post.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {post.category} • {post.readTime}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">{post.date}</div>
                    <Link href={`/admin/blog/edit/${post.id}`} className="text-sm text-primary hover:underline">
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-end">
                <Link href="/admin/blog" className="flex items-center text-sm text-primary hover:underline">
                  View all posts <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your scheduled speaking engagements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4">
                  <div className="flex-1 space-y-1">
                    <p className="font-medium leading-none">{event.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.location} • {event.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                    <Link href={`/admin/events/edit/${event.id}`} className="text-sm text-primary hover:underline">
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-end">
                <Link href="/admin/events" className="flex items-center text-sm text-primary hover:underline">
                  View all events <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Link
              href="/admin/blog/new"
              className="flex items-center gap-2 rounded-md bg-muted p-3 text-sm hover:bg-muted/80"
            >
              <FileText className="h-4 w-4" />
              Create new blog post
            </Link>
            <Link
              href="/admin/events/new"
              className="flex items-center gap-2 rounded-md bg-muted p-3 text-sm hover:bg-muted/80"
            >
              <Calendar className="h-4 w-4" />
              Add new event
            </Link>
            <Link
              href="/admin/services/new"
              className="flex items-center gap-2 rounded-md bg-muted p-3 text-sm hover:bg-muted/80"
            >
              <Briefcase className="h-4 w-4" />
              Create new service
            </Link>
            <Link
              href="/admin/testimonials/new"
              className="flex items-center gap-2 rounded-md bg-muted p-3 text-sm hover:bg-muted/80"
            >
              <MessageSquare className="h-4 w-4" />
              Add new testimonial
            </Link>
            <Link
              href="/admin/stats"
              className="flex items-center gap-2 rounded-md bg-muted p-3 text-sm hover:bg-muted/80"
            >
              <BarChart className="h-4 w-4" />
              Update stats
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
