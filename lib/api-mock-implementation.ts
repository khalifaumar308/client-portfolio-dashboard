// This file provides a mock implementation of the API functions
// In production, this would be replaced with actual API calls

import {
  mockUpcomingEvents,
  mockPastEvents,
  mockEventTypes,
  mockEventRoles,
  mockSpeakingTopics,
  mockEventTestimonials,
  mockBlogPosts,
  mockFeaturedBlogPost,
  mockBlogCategories,
  mockPopularTopics,
  mockServices,
  mockExperiences,
  mockTestimonials,
  mockStats,
  mockHomepageData,
} from "./mock-api"

import type {
  Event,
  EventType,
  EventRole,
  SpeakingTopic,
  EventTestimonial,
  BlogPost,
  BlogCategory,
  PopularTopic,
  Service,
  ServiceDetail,
  Experience,
  Testimonial,
  Stat,
  HomepageData,
} from "./api-types"

// Helper function to simulate API delay\
const simulateApiDelay = async <T>(data: T)
: Promise<T> =>
{
  // Simulate network delay (0-300ms)
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 300))
  return data;
}

// Events API
export async function getUpcomingEvents(): Promise<Event[]> {
  return simulateApiDelay(mockUpcomingEvents)
}

export async function getPastEvents(): Promise<Event[]> {
  return simulateApiDelay(mockPastEvents)
}

export async function getEventTypes(): Promise<EventType[]> {
  return simulateApiDelay(mockEventTypes)
}

export async function getEventRoles(): Promise<EventRole[]> {
  return simulateApiDelay(mockEventRoles)
}

export async function getSpeakingTopics(): Promise<SpeakingTopic[]> {
  return simulateApiDelay(mockSpeakingTopics)
}

export async function getEventTestimonials(): Promise<EventTestimonial[]> {
  return simulateApiDelay(mockEventTestimonials)
}

export async function getEventBySlug(slug: string): Promise<Event> {
  const event = mockUpcomingEvents.concat(mockPastEvents).find((e) => e.eventUrl.includes(slug))
  if (!event) {
    throw new Error(`Event with slug ${slug} not found`)
  }
  return simulateApiDelay(event)
}

// Blog API
export async function getBlogPosts(): Promise<BlogPost[]> {
  return simulateApiDelay(mockBlogPosts)
}

export async function getFeaturedBlogPost(): Promise<BlogPost> {
  return simulateApiDelay(mockFeaturedBlogPost)
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  return simulateApiDelay(mockBlogCategories)
}

export async function getPopularTopics(): Promise<PopularTopic[]> {
  return simulateApiDelay(mockPopularTopics)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const post = mockBlogPosts.find((p) => p.slug === slug) || mockFeaturedBlogPost
  return simulateApiDelay(post)
}

export async function getRelatedBlogPosts(slug: string): Promise<BlogPost[]> {
  // In a real implementation, this would find related posts based on tags, category, etc.
  return simulateApiDelay(mockBlogPosts.slice(0, 3))
}

// Services API
export async function getServices(): Promise<Service[]> {
  return simulateApiDelay(mockServices)
}

export async function getServiceDetails(): Promise<ServiceDetail[]> {
  // This would be implemented with real data in production
  return simulateApiDelay([])
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetail> {
  // This would be implemented with real data in production
  return simulateApiDelay({} as ServiceDetail)
}

// Experience API
export async function getExperiences(): Promise<Experience[]> {
  return simulateApiDelay(mockExperiences)
}

// Testimonials API
export async function getTestimonials(): Promise<Testimonial[]> {
  return simulateApiDelay(mockTestimonials)
}

// Stats API
export async function getStats(): Promise<Stat[]> {
  return simulateApiDelay(mockStats)
}

// Homepage Data
export async function getHomepageData(): Promise<HomepageData> {
  return simulateApiDelay(mockHomepageData)
}
