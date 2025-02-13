import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.headers.get("authorization");

  if (token==null) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};