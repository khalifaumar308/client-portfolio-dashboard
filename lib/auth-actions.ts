"use server"

import { cookies } from "next/headers"

// This is a simple login function for demonstration purposes
// In a real application, you would use a proper authentication system
export async function login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  // For demo purposes, we'll accept any email with a password of "password"
  if (password === "password") {
    // Set a cookie to simulate authentication
    cookies().set("auth_token", "demo_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return { success: true }
  }

  return {
    success: false,
    error: "Invalid email or password. For demo, use any email with password 'password'.",
  }
}

export async function logout(): Promise<{ success: boolean }> {
  cookies().delete("auth_token")
  return { success: true }
}
