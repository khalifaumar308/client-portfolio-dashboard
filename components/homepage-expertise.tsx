import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"
import type { LucideIcon } from "lucide-react"

// Dynamically import Lucide icons
const iconComponents: Record<string, LucideIcon> = {
  Shield: dynamic(() => import("lucide-react").then((mod) => mod.Shield)),
  Handshake: dynamic(() => import("lucide-react").then((mod) => mod.Handshake)),
  BarChart3: dynamic(() => import("lucide-react").then((mod) => mod.BarChart3)),
  Scale: dynamic(() => import("lucide-react").then((mod) => mod.Scale)),
  FileCheck: dynamic(() => import("lucide-react").then((mod) => mod.FileCheck)),
  Globe: dynamic(() => import("lucide-react").then((mod) => mod.Globe)),
  // Add more icons as needed
}

export async function HomepageExpertise() {
  // In a real implementation, this would come from the API
  const expertise = [
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
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {expertise.map((item) => {
        const IconComponent = iconComponents[item.icon] || iconComponents.Shield

        return (
          <Card
            key={item.id}
            className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/80 shadow-md transition-all hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-base">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={item.link} className="inline-flex items-center text-sm font-medium text-primary">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
