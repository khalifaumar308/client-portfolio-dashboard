'use server'
import { cookies } from "next/headers"
import jwt, {sign as JwtSign} from "jsonwebtoken"
import { getUser } from "./admin-actions/user";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret" // Use a strong secret in production

export async function login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  if (email && password) {
    const user = await getUser(email)
    if (!user) {
      return {
        success: false,
        error: "Invalid email or password.",
      }
    }
    // Create a JWT token
    const token = JwtSign({ email }, JWT_SECRET, { expiresIn: "7d" });
    (await cookies()).set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    })
    return { success: true }
  }
  return {
    success: false,
    error: "Invalid email or password.",
  }
}

export async function logout(): Promise<{ success: boolean }> {
  (await cookies()).delete("auth_token")
  return { success: true }
}