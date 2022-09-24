import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isAuthenticated } from "./config/firebase"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // if (isAuthenticated() !== true)
  //   return NextResponse.redirect(new URL("/auth/login", request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*"],
}