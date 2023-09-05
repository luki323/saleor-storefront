import type {NextRequest} from 'next/server';

import {basePathHandler} from './middleware/base-path-handler';
import {createMiddie} from './middleware/create-middie';
import {setBasePathHeadersHandler} from './middleware/set-base-path-headers-handler';

export default async function middleware(req: NextRequest) {
  const middie = createMiddie();
  middie.use(basePathHandler);
  middie.use(setBasePathHeadersHandler);

  return await middie(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
