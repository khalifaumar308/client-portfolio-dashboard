import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protect /admin routes
export function middleware(request: NextRequest) {
  // Only run for /admin and its subpaths
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authToken = request.cookies.get('auth_token')
    if (!authToken) {
      // Redirect to login if not authenticated
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('from', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
