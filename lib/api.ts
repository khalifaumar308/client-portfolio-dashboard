// This file is the main API interface
// It imports the implementation (either real or mock)
// This allows us to easily switch between implementations

// Import the mock implementation for development
import * as apiImplementation from "./api-mock-implementation"

// Base API URL - replace with your actual API endpoint
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com"

// Helper function to handle API responses
async function fetchAPI<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("API fetch error:", error)
    throw error
  }
}

// Re-export all functions from the implementation
export const {
  // Events API
  getUpcomingEvents,
  getPastEvents,
  getEventTypes,
  getEventRoles,
  getSpeakingTopics,
  getEventTestimonials,
  getEventBySlug,

  // Blog API
  getBlogPosts,
  getFeaturedBlogPost,
  getBlogCategories,
  getPopularTopics,
  getBlogPostBySlug,
  getRelatedBlogPosts,

  // Services API
  getServices,
  getServiceDetails,
  getServiceBySlug,

  // Experience API
  getExperiences,

  // Testimonials API
  getTestimonials,

  // Stats API
  getStats,

  // Homepage Data
  getHomepageData,
} = apiImplementation

// Events API
// export async function getUpcomingEvents(): Promise<Event[]> {
//   return fetchAPI<Event[]>('/events/upcoming');
// }

// export async function getPastEvents(): Promise<Event[]> {
//   return fetchAPI<Event[]>('/events/past');
// }

// export async function getEventTypes(): Promise<EventType[]> {
//   return fetchAPI<EventType[]>('/events/types');
// }

// export async function getEventRoles(): Promise<EventRole[]> {
//   return fetchAPI<EventRole[]>('/events/roles');
// }

// export async function getSpeakingTopics(): Promise<SpeakingTopic[]> {
//   return fetchAPI<SpeakingTopic[]>('/events/speaking-topics');
// }

// export async function getEventTestimonials(): Promise<EventTestimonial[]> {
//   return fetchAPI<EventTestimonial[]>('/events/testimonials');
// }

// export async function getEventBySlug(slug: string): Promise<Event> {
//   return fetchAPI<Event>(`/events/${slug}`);
// }

// // Blog API
// export async function getBlogPosts(): Promise<BlogPost[]> {
//   return fetchAPI<BlogPost[]>('/blog/posts');
// }

// export async function getFeaturedBlogPost(): Promise<BlogPost> {
//   return fetchAPI<BlogPost>('/blog/featured');
// }

// export async function getBlogCategories(): Promise<BlogCategory[]> {
//   return fetchAPI<BlogCategory[]>('/blog/categories');
// }

// export async function getPopularTopics(): Promise<PopularTopic[]> {
//   return fetchAPI<PopularTopic[]>('/blog/popular-topics');
// }

// export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
//   return fetchAPI<BlogPost>(`/blog/${slug}`);
// }

// export async function getRelatedBlogPosts(slug: string): Promise<BlogPost[]> {
//   return fetchAPI<BlogPost[]>(`/blog/${slug}/related`);
// }

// // Services API
// export async function getServices(): Promise<Service[]> {
//   return fetchAPI<Service[]>('/services');
// }

// export async function getServiceDetails(): Promise<ServiceDetail[]> {
//   return fetchAPI<ServiceDetail[]>('/services/details');
// }

// export async function getServiceBySlug(slug: string): Promise<ServiceDetail> {
//   return fetchAPI<ServiceDetail>(`/services/${slug}`);
// }

// // Experience API
// export async function getExperiences(): Promise<Experience[]> {
//   return fetchAPI<Experience[]>('/experiences');
// }

// // Testimonials API
// export async function getTestimonials(): Promise<Testimonial[]> {
//   return fetchAPI<Testimonial[]>('/testimonials');
// }

// // Projects API
// export async function getProjects(): Promise<Project[]> {
//   return fetchAPI<Project[]>('/projects');
// }

// // Skills API
// export async function getSkills(): Promise<Skill[]> {
//   return fetchAPI<Skill[]>('/skills');
// }

// // Values API
// export async function getValues(): Promise<Value[]> {
//   return fetchAPI<Value[]>('/values');
// }

// // Education API
// export async function getEducation(): Promise<Education[]> {
//   return fetchAPI<Education[]>('/education');
// }

// // Stats API
// export async function getStats(): Promise<Stat[]> {
//   return fetchAPI<Stat[]>('/stats');
// }

// // Homepage Data
// export async function getHomepageData(): Promise<HomepageData> {
//   return fetchAPI<HomepageData>('/homepage');
// }
