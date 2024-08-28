import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Normalize the pathname to lowercase
    const lowercasePathname = pathname.toLowerCase();

    // If the pathname is already lowercase, continue with the request
    if (pathname === lowercasePathname) {
        return NextResponse.next();
    }

    // Redirect to the lowercase version of the URL
    const url = request.nextUrl.clone();
    url.pathname = lowercasePathname;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: '/:path*',
};
