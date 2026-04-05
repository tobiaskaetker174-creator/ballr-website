import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSWORD = "Tobias123";
const COOKIE_NAME = "auth_token";
const AUTH_VALUE = "authenticated_tobias";

// Public routes that don't need authentication
const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/how-it-works",
  "/faq",
  "/blog",
  "/different",
  "/careers",
  "/feature-request",
  "/leagues",
  "/pickup-football-bangkok",
  "/play-football-bangkok",
  "/expat-football-bangkok",
  "/amateur-football-bangkok",
  "/player-of-the-month",
  "/goal-of-the-month",
  "/th",
  "/vote",
  "/sitemap.xml",
  "/seo",
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Always allow static files, API routes
  if (
    path.startsWith("/_next") ||
    path.startsWith("/api") ||
    path === "/favicon.ico" ||
    path.endsWith(".png") ||
    path.endsWith(".jpg") ||
    path.endsWith(".svg") ||
    path.endsWith(".ico")
  ) {
    return NextResponse.next();
  }

  // Allow all public routes
  const isPublic = PUBLIC_ROUTES.some(route => {
    if (route === "/") return path === "/";
    return path === route || path.startsWith(route + "/");
  });

  if (isPublic) {
    return NextResponse.next();
  }

  // Protected routes (e.g., /create, /dashboard, etc.) need auth
  const authCookie = request.cookies.get(COOKIE_NAME);
  if (authCookie?.value === AUTH_VALUE) {
    return NextResponse.next();
  }

  // Check URL param for password
  const password = request.nextUrl.searchParams.get("password");
  if (password === PASSWORD) {
    const response = NextResponse.redirect(new URL(path, request.url));
    response.cookies.set(COOKIE_NAME, AUTH_VALUE, { 
      httpOnly: true, 
      secure: true, 
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30
    });
    return response;
  }

  // Redirect to home for unauthenticated users trying protected routes
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
