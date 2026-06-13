import { NextResponse, type NextRequest } from 'next/server';
import { AUTH_COOKIE_NAME } from '@/lib/cookies';

const SIGN_IN_PATH = '/auth/sign-in';
const DEFAULT_AUTHED_PATH = '/dashboard/overview';

/**
 * Route protection. The auth token lives in a cookie (see lib/cookies.ts) so it
 * is readable here on the edge:
 *  - hitting a /dashboard route without a token → redirect to sign-in
 *  - hitting the sign-in page with a token → redirect to the dashboard
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  const isProtected = pathname.startsWith('/dashboard');
  const isAuthRoute = pathname.startsWith('/auth');

  if (isProtected && !token) {
    const url = request.nextUrl.clone();
    url.pathname = SIGN_IN_PATH;
    url.search = `?redirect=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && token) {
    const url = request.nextUrl.clone();
    url.pathname = DEFAULT_AUTHED_PATH;
    url.search = '';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*']
};
