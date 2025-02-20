import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/99') {
    return NextResponse.redirect(new URL('https://fmontes.gumroad.com/l/99tips'));
  }
}

export const config = {
  matcher: ['/99'],
};
