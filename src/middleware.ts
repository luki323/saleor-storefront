import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {handleBasePath} from '@/middleware/handle-base-path';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default function middleware(request: NextRequest) {
  const basePathResult = handleBasePath(request);

  if (basePathResult instanceof NextResponse) {
    return basePathResult;
  }
  return NextResponse.next({
    request: {
      headers: basePathResult,
    },
  });
}
