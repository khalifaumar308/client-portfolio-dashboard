// Event Types
export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image: string
  eventUrl: string
  type: string
  role: string
}

export interface EventType {
  name: string
  value: string
}

export interface EventRole {
  name: string
  value: string
}

export interface SpeakingTopic {
  id: string
  title: string
  description: string
  icon: string
}

export interface EventTestimonial {
  id: string
  quote: string
  name: string
  title: string
}

// Blog Types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  date: string
  image: string
  slug: string
  category: string
  readTime: string
  tags?: string[]
  author?: {
    name: string
    title: string
    image: string
    bio: string
  }
}

export interface BlogCategory {
  name: string
  slug: string
}

export interface PopularTopic {
  id: string
  title: string
  description: string
  icon: string
  slug: string
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  link: string
}

export interface ServiceDetail {
  id: string
  title: string
  description: string
  icon: string
  image: string
  features: string[]
  cta: {
    text: string
    link: string
  }
}

// Experience Types
export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  icon: string
  type: "professional" | "advisory"
}

// Testimonial Types
export interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
  image: string
}

// Project Types
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

// Skill Types
export interface Skill {
  id: string
  skill: string
  percentage: number
}

// Value Types
export interface Value {
  id: string
  title: string
  description: string
  icon: string
}

// Education & Qualification Types
export interface Education {
  id: string
  title: string
  organization: string
  period: string
  description: string
  type: "education" | "certification"
}

// Stats
export interface Stat {
  id: string
  value: string
  label: string
}

// Homepage Sections
export interface HomepageData {
  hero: {
    title: string
    subtitle: string
    description: string
  }
  stats: Stat[]
  upcomingEvents: Event[]
  expertise: {
    title: string
    description: string
    items: Array<{
      id: string
      title: string
      description: string
      icon: string
      link: string
    }>
  }
  featuredExperience: Experience[]
  featuredServices: Service[]
  testimonials: Testimonial[]
  latestPosts: BlogPost[]
  contact: {
    title: string
    description: string
    email: string
    phone: string
    location: string
  }
}
