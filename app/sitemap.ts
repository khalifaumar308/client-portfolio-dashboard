import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://samueljohnson.com"

  const routes = [
    "",
    "/about",
    "/services",
    "/experience",
    "/blog",
    "/contact",
    "/services/regulatory-compliance",
    "/services/business-development",
    "/services/fundraising",
    "/services/legal-advisory",
    "/services/corporate-training",
    "/services/risk-management",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Blog posts would be dynamically added here in a real implementation
  const blogPosts = [
    "/blog/fintech-regulations-africa",
    "/blog/sustainable-fintech-business-models",
    "/blog/strategic-partnerships-fintech",
  ].map((post) => ({
    url: `${baseUrl}${post}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...blogPosts]
}
