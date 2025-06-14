import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ChevronDown, LogOut, Menu, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin Dashboard | Samuel Johnson",
  description: "Content Management System for Samuel Johnson's personal website",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <AdminSidebar />
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/admin" className="flex items-center gap-2 font-semibold">
              <User className="h-5 w-5" />
              <span>Samuel Johnson CMS</span>
            </Link>
            <div className="ml-auto flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <span>Admin</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/admin/login">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" asChild>
                <Link href="/" target="_blank">
                  View Website
                </Link>
              </Button>
            </div>
          </header>
          <div className="flex-1 flex flex-row min-h-0">
            {/* Sidebar */}
            <aside className="hidden md:flex md:flex-col md:relative md:w-[220px] lg:w-[280px] border-r">
              <div className="flex h-full flex-col gap-2 p-4">
                <AdminSidebar />
              </div>
            </aside>
            {/* Main content */}
            <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-8 overflow-x-auto bg-background">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
