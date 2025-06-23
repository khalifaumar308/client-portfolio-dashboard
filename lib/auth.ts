import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret"

export async function checkAuth(): Promise<boolean> {
  const authCookie = (await cookies()).get("auth_token")
  if (!authCookie?.value) return false
  try {
    jwt.verify(authCookie.value, JWT_SECRET)
    return true
  } catch {
    return false
  }
}
