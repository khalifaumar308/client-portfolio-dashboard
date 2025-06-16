"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Calendar,
  FileText,
  Home,
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  Award,
  Users,
  BarChart,
  Settings,
  ImageIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Blog Posts",
    href: "/admin/blog",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Services",
    href: "/admin/services",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Experience",
    href: "/admin/experience",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Testimonials",
    href: "/admin/testimonials",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Homepage",
    href: "/admin/homepage",
    icon: <Home className="h-5 w-5" />,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <nav className="grid gap-2">
      {sidebarItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-muted font-medium")}
          asChild
        >
          <Link href={item.href}>
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        </Button>
      ))}
    </nav>
  )
}
