import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET 
  })
  
  const isManagerRoute = request.nextUrl.pathname.startsWith('/manager-dash')

  // No token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Manager can access manager-dash and prep-dash
  if (token.role === 'manager') {
    return NextResponse.next()
  }

  // Prep users can only access prep-dash
  if (token.role === 'prep' && isManagerRoute) {
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