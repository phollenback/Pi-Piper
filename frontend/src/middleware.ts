import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET 
  })
  
  const isManagerRoute = request.nextUrl.pathname.startsWith('/manager-dash')
  const isPrepRoute = request.nextUrl.pathname.startsWith('/prep-dash')

  // No token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Check role-based access
  if (isManagerRoute && token.role !== 'manager' && token.role !== 'owner') {
    return NextResponse.redirect(new URL('/prep-dash', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/manager-dash/:path*',
    '/prep-dash/:path*',
  ]
}