"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSignup() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to my newsletter.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-background p-8 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0" />
      <div className="relative flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="text-muted-foreground">
            Subscribe to my newsletter for the latest insights on fintech regulation, business growth strategies, and
            industry trends.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 min-w-[240px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="h-12 rounded-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  Subscribing...
                  <svg
                    className="ml-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
