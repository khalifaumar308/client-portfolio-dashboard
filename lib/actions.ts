"use server"

import { z } from "zod"

// Define a schema for contact form validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(formData)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Message received! I'll get back to you soon." }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      const fieldErrors = error.errors.reduce(
        (acc, curr) => {
          const fieldName = curr.path[0] as string
          acc[fieldName] = curr.message
          return acc
        },
        {} as Record<string, string>,
      )

      return { success: false, fieldErrors }
    }

    // Return generic error
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
