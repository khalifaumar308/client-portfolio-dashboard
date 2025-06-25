// This file provides mock data for development purposes
// In production, this would be replaced with actual API calls

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
  Experience,
  Testimonial,
  Stat,
  HomepageData,
} from "./api-types"

// Mock data for events
export const mockUpcomingEvents: Event[] = [
  {
    id: "1",
    title: "African Fintech Summit",
    description: "Keynote speech on 'The Future of Regulatory Frameworks for Fintech in Africa'",
    date: "June 15-16, 2025",
    location: "Kigali, Rwanda",
    image: "/placeholder.svg?key=9o2fg",
    eventUrl: "https://example.com/african-fintech-summit",
    type: "Conference",
    role: "Keynote Speaker",
  },
  {
    id: "2",
    title: "Fintech Regulation Masterclass",
    description: "A comprehensive workshop on navigating regulatory compliance for fintech startups",
    date: "May 22, 2025",
    location: "Lagos, Nigeria",
    image: "/fintech-workshop.png",
    eventUrl: "https://example.com/fintech-regulation-masterclass",
    type: "Workshop",
    role: "Host",
  },
  {
    id: "3",
    title: "Digital Financial Inclusion Forum",
    description: "Panel discussion on expanding financial access through innovative fintech solutions",
    date: "May 5-6, 2025",
    location: "Nairobi, Kenya",
    image: "/financial-inclusion-panel.png",
    eventUrl: "https://example.com/digital-financial-inclusion-forum",
    type: "Forum",
    role: "Panelist",
  },
]

export const mockPastEvents: Event[] = [
  {
    id: "4",
    title: "West African Fintech Week",
    description: "Presented on 'Strategic Partnerships for Fintech Growth' to an audience of industry leaders",
    date: "March 10-12, 2025",
    location: "Accra, Ghana",
    image: "/placeholder.svg?key=m9717",
    eventUrl: "https://example.com/west-african-fintech-week",
    type: "Conference",
    role: "Speaker",
  },
  {
    id: "5",
    title: "Regulatory Innovation Roundtable",
    description: "Facilitated discussion between regulators and fintech leaders on creating enabling environments",
    date: "February 25, 2025",
    location: "Abuja, Nigeria",
    image: "/placeholder.svg?key=tn4z0",
    eventUrl: "https://example.com/regulatory-innovation-roundtable",
    type: "Roundtable",
    role: "Facilitator",
  },
  {
    id: "6",
    title: "Fintech Founders Bootcamp",
    description: "Led a session on 'Regulatory Compliance as a Competitive Advantage' for early-stage founders",
    date: "January 18, 2025",
    location: "Virtual Event",
    image: "/virtual-fintech-bootcamp.png",
    eventUrl: "https://example.com/fintech-founders-bootcamp",
    type: "Workshop",
    role: "Speaker",
  },
  {
    id: "7",
    title: "Global Payments Innovation Summit",
    description: "Participated in expert panel on cross-border payment regulations in emerging markets",
    date: "December 5-7, 2024",
    location: "Dubai, UAE",
    image: "/payments-summit.png",
    eventUrl: "https://example.com/global-payments-innovation-summit",
    type: "Summit",
    role: "Panelist",
  },
  {
    id: "8",
    title: "Africa Fintech Policy Conference",
    description: "Delivered presentation on harmonizing fintech regulations across African markets",
    date: "November 15, 2024",
    location: "Cape Town, South Africa",
    image: "/fintech-policy-conference.png",
    eventUrl: "https://example.com/africa-fintech-policy-conference",
    type: "Conference",
    role: "Speaker",
  },
  {
    id: "9",
    title: "Financial Inclusion Hackathon",
    description: "Served as judge and mentor for teams developing inclusive fintech solutions",
    date: "October 22-24, 2024",
    location: "Kampala, Uganda",
    image: "/fintech-hackathon.png",
    eventUrl: "https://example.com/financial-inclusion-hackathon",
    type: "Hackathon",
    role: "Judge",
  },
]

export const mockEventTypes: EventType[] = [
  { name: "All Types", value: "all" },
  { name: "Conference", value: "conference" },
  { name: "Workshop", value: "workshop" },
  { name: "Forum", value: "forum" },
  { name: "Summit", value: "summit" },
  { name: "Roundtable", value: "roundtable" },
  { name: "Hackathon", value: "hackathon" },
]

export const mockEventRoles: EventRole[] = [
  { name: "All Roles", value: "all" },
  { name: "Speaker", value: "speaker" },
  { name: "Panelist", value: "panelist" },
  { name: "Host", value: "host" },
  { name: "Facilitator", value: "facilitator" },
  { name: "Judge", value: "judge" },
]

export const mockSpeakingTopics: SpeakingTopic[] = [
  {
    id: "1",
    title: "Regulatory Compliance Frameworks",
    description:
      "Navigating complex regulatory landscapes while fostering innovation in fintech businesses across African markets.",
    icon: "Shield",
  },
  {
    id: "2",
    title: "Sustainable Fintech Business Models",
    description:
      "Building fintech businesses that balance profitability with long-term sustainability and positive social impact.",
    icon: "BarChart",
  },
  {
    id: "3",
    title: "Strategic Partnerships in Fintech",
    description:
      "Leveraging strategic alliances to accelerate growth, enter new markets, and enhance product offerings.",
    icon: "Users",
  },
  {
    id: "4",
    title: "Fundraising for African Fintech Startups",
    description:
      "Strategies for securing investment at different stages of growth in the unique African funding landscape.",
    icon: "DollarSign",
  },
  {
    id: "5",
    title: "Financial Inclusion Through Fintech",
    description:
      "Harnessing technology to extend financial services to underserved populations and drive economic empowerment.",
    icon: "CreditCard",
  },
  {
    id: "6",
    title: "Cross-Border Fintech Regulations",
    description: "Navigating the complexities of operating fintech businesses across multiple African jurisdictions.",
    icon: "BookOpen",
  },
]

export const mockEventTestimonials: EventTestimonial[] = [
  {
    id: "1",
    quote:
      "Samuel's keynote at our fintech summit was exceptional. His deep understanding of regulatory frameworks combined with practical business insights made for a compelling presentation that our attendees rated as the highlight of the event.",
    name: "Adeola Adeyemi",
    title: "Event Director, West African Fintech Week",
  },
  {
    id: "2",
    quote:
      "The workshop Samuel conducted for our fintech founders was transformative. His ability to break down complex regulatory concepts into actionable strategies gave our startups a clear roadmap for compliance.",
    name: "Kwame Osei",
    title: "Program Director, Fintech Founders Bootcamp",
  },
  {
    id: "3",
    quote:
      "Samuel's panel moderation at our policy forum brought together diverse perspectives in a cohesive and insightful discussion. His expertise in both the regulatory and business aspects of fintech made for a balanced and productive conversation.",
    name: "Fatima Diallo",
    title: "Chairperson, Digital Financial Inclusion Forum",
  },
]

// Mock data for blog
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
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
    id: "2",
    title: "Building Sustainable Business Models for Fintech Startups",
    excerpt:
      "Key considerations for developing business models that are not only profitable but also sustainable in the long term.",
    date: "March 22, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/sustainable-fintech-business-models",
    category: "Business",
    readTime: "5 min read",
  },
  {
    id: "3",
    title: "The Role of Strategic Partnerships in Fintech Growth",
    excerpt:
      "How strategic alliances and partnerships can accelerate growth and market penetration for fintech companies.",
    date: "February 15, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/strategic-partnerships-fintech",
    category: "Strategy",
    readTime: "7 min read",
  },
  {
    id: "4",
    title: "Fundraising Strategies for African Fintech Startups",
    excerpt:
      "Practical approaches to securing investment for fintech ventures in African markets, from seed to Series A and beyond.",
    date: "January 28, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/fundraising-strategies-african-fintech",
    category: "Fundraising",
    readTime: "9 min read",
  },
  {
    id: "5",
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
    id: "6",
    title: "Digital Financial Inclusion: Challenges and Opportunities",
    excerpt:
      "Exploring the barriers to financial inclusion and how fintech innovations can help overcome them across African markets.",
    date: "December 12, 2024",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/digital-financial-inclusion",
    category: "Inclusion",
    readTime: "8 min read",
  },
]

export const mockFeaturedBlogPost: BlogPost = {
  id: "7",
  title: "The Future of Fintech Regulation in Africa",
  excerpt:
    "An in-depth analysis of emerging regulatory frameworks across African markets and how they will shape the future of fintech innovation and growth.",
  date: "April 15, 2025",
  image: "/placeholder.svg?height=600&width=1200",
  slug: "/blog/future-of-fintech-regulation-africa",
  category: "Regulation",
  readTime: "8 min read",
  author: {
    name: "Abiola Jimoh",
    title: "Fintech Consultant & Business Advisor",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
  },
  tags: ["Fintech", "Regulation", "Africa", "Innovation", "Compliance"],
}

export const mockBlogCategories: BlogCategory[] = [
  { name: "All", slug: "all" },
  { name: "Regulatory", slug: "regulatory" },
  { name: "Business", slug: "business" },
  { name: "Strategy", slug: "strategy" },
  { name: "Fundraising", slug: "fundraising" },
  { name: "Inclusion", slug: "inclusion" },
]

export const mockPopularTopics: PopularTopic[] = [
  {
    id: "1",
    title: "Regulatory Compliance",
    description:
      "Navigate complex regulatory frameworks and ensure your fintech business remains compliant while innovating.",
    icon: "Shield",
    slug: "regulatory",
  },
  {
    id: "2",
    title: "Business Growth",
    description:
      "Strategies and insights for scaling your fintech business, entering new markets, and driving sustainable growth.",
    icon: "BarChart",
    slug: "business",
  },
  {
    id: "3",
    title: "Fundraising",
    description:
      "Expert advice on securing investment, preparing for due diligence, and navigating the fundraising landscape.",
    icon: "DollarSign",
    slug: "fundraising",
  },
]

// Mock data for services
export const mockServices: Service[] = [
  {
    id: "1",
    title: "Regulatory Compliance",
    description: "Navigate complex regulatory frameworks",
    icon: "Shield",
    features: [
      "Licensing application support",
      "Compliance framework development",
      "Regulatory audit preparation",
      "Policy documentation",
    ],
    link: "/services/regulatory-compliance",
  },
  {
    id: "2",
    title: "Business Development",
    description: "Accelerate growth and expansion",
    icon: "BarChart3",
    features: ["Market entry strategy", "Partnership development", "Business model refinement", "Growth planning"],
    link: "/services/business-development",
  },
  {
    id: "3",
    title: "Fundraising Support",
    description: "Secure investment for your venture",
    icon: "Building",
    features: ["Investor documentation", "Pitch deck development", "Due diligence preparation", "Investor networking"],
    link: "/services/fundraising",
  },
]

// Mock data for experiences
export const mockExperiences: Experience[] = [
  {
    id: "1",
    title: "Principal Consultant",
    company: "StartUps Consulting",
    period: "Oct 2024 - Present",
    description:
      "Providing hands-on services to entrepreneurs, startups, and growth-stage businesses to develop and refine their business models. Focus areas include regulatory compliance, fundraising, partnerships, and team development.",
    icon: "Briefcase",
    type: "professional",
  },
  {
    id: "2",
    title: "Co-Founder & Co-CEO",
    company: "XCHANGEBOX",
    period: "May 2024 - Present",
    description:
      "Leading a fintech platform focused on payments, collections, and SME support, providing access to financial products including health insurance, pensions, micro-credit, and payment services for traders and farmers across Northern Nigeria.",
    icon: "Building",
    type: "professional",
  },
  {
    id: "3",
    title: "Head of Strategy Development",
    company: "Digital Bridge Institute",
    period: "Mar 2017 - Feb 2024",
    description:
      "Supported management with strategic inputs for partnerships and stakeholder management, providing capacity building for the sustainable drive of the digital economy in Nigeria.",
    icon: "BookOpen",
    type: "professional",
  },
  {
    id: "4",
    title: "Governing Council Member",
    company: "Fintech Association Of Nigeria",
    period: "Oct 2024 - Present",
    description:
      "Serving on the executive arm of FintechNGR tasked with the overall management of the Association, shaping policy and industry standards.",
    icon: "Award",
    type: "advisory",
  },
  {
    id: "5",
    title: "Non-Executive Director",
    company: "Unlimit",
    period: "Dec 2023 - Present",
    description:
      "Providing strategic guidance to a global payments company that helps businesses enter new markets, explore new industries, and reach new milestones through borderless payment solutions.",
    icon: "Globe",
    type: "advisory",
  },
  {
    id: "6",
    title: "Advisor",
    company: "Extension Africa",
    period: "Oct 2024 - Present",
    description:
      "Providing legal advisory services and serving as Company Secretary to an agritech startup supporting farmers across Africa with extension services, financial inclusion, and access to inputs.",
    icon: "Handshake",
    type: "advisory",
  },
]

// Mock data for testimonials
export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Samuel's expertise in regulatory compliance was instrumental in helping us secure our fintech license in record time. His guidance throughout the process was invaluable.",
    name: "Aisha Mohammed",
    title: "CEO, PayTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    quote:
      "Working with Samuel transformed our business model. His strategic insights and industry connections helped us pivot and scale in ways we hadn't imagined possible.",
    name: "Michael Okonkwo",
    title: "Founder, CreditLink",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    quote:
      "Samuel's deep understanding of both legal and business aspects of fintech made him the perfect advisor for our startup. He helped us navigate complex regulations while focusing on growth.",
    name: "Sarah Chen",
    title: "COO, GlobalPay Africa",
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Mock data for stats
export const mockStats: Stat[] = [
  {
    id: "1",
    value: "10+",
    label: "Years Experience",
  },
  {
    id: "2",
    value: "50+",
    label: "Clients Served",
  },
  {
    id: "3",
    value: "99+",
    label: "Endorsements",
  },
  {
    id: "4",
    value: "20+",
    label: "Partnerships",
  },
]

// Mock data for homepage
export const mockHomepageData: HomepageData = {
  hero: {
    title: "Navigating the Future of",
    subtitle: "Fintech",
    description:
      "With over a decade of experience in the fintech sector, I help startups and established businesses navigate regulatory landscapes, secure funding, and build sustainable growth strategies.",
  },
  stats: mockStats,
  upcomingEvents: mockUpcomingEvents.slice(0, 3),
  expertise: {
    title: "Specialized Knowledge",
    description:
      "My expertise spans across critical areas in fintech, regulatory compliance, and business development.",
    items: [
      {
        id: "1",
        title: "Regulatory Compliance",
        description:
          "Navigating complex regulatory frameworks to ensure your fintech business remains compliant while innovating.",
        icon: "Shield",
        link: "/services/regulatory-compliance",
      },
      {
        id: "2",
        title: "Strategic Partnerships",
        description: "Building valuable alliances and networks that drive collaborative success and business growth.",
        icon: "Handshake",
        link: "/services/strategic-partnerships",
      },
      {
        id: "3",
        title: "Business Growth",
        description: "Identifying opportunities and implementing strategies that fuel sustainable company expansion.",
        icon: "BarChart3",
        link: "/services/business-growth",
      },
      {
        id: "4",
        title: "Risk Evaluation",
        description:
          "Assessing and mitigating potential risks to ensure sustainable growth and protect business interests.",
        icon: "Scale",
        link: "/services/risk-evaluation",
      },
      {
        id: "5",
        title: "Legal Advisory",
        description: "Providing expert legal guidance on corporate governance, compliance, and contractual matters.",
        icon: "FileCheck",
        link: "/services/legal-advisory",
      },
      {
        id: "6",
        title: "Business Expansion",
        description: "Helping companies scale regionally and globally with strategic market entry and growth plans.",
        icon: "Globe",
        link: "/services/business-expansion",
      },
    ],
  },
  featuredExperience: mockExperiences,
  featuredServices: mockServices,
  testimonials: mockTestimonials,
  latestPosts: mockBlogPosts.slice(0, 3),
  contact: {
    title: "Get In Touch",
    description: "Have a project in mind or want to learn more about my services? I'd love to hear from you.",
    email: "samuel.johnson@example.com",
    phone: "+234 123 456 7890",
    location: "Abuja, Nigeria",
  },
}
