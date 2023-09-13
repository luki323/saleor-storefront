import type {NextRequest} from 'next/server';

import {basePathHandler} from './middleware/base-path-handler';
import {createMiddleware} from './middleware/create-middleware';
import {setBasePathHeadersHandler} from './middleware/set-base-path-headers-handler';

export default async function middleware(req: NextRequest) {
  const {middleware, use} = createMiddleware();
  use(basePathHandler);
  use(setBasePathHeadersHandler);

  return middleware(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
