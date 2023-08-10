import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {formatLocale} from './i18n/tools/format-locale';
import {ciEquals} from './lib/tools/ci-equals';
import {formatPathname} from './lib/tools/format-pathname';
import {isDefined} from './lib/tools/is-defined';
import {splitPathname} from './lib/tools/split-pathname';
import {negotiateChannel} from './middleware/negotiate-channel';
import {negotiateCiLocale} from './middleware/negotiate-ci-locale';

export default function middleware(request: NextRequest) {
  const pathnameSegments = splitPathname(request.nextUrl.pathname);
  const [preferredChannel, preferredLocale] = pathnameSegments;

  const locale = negotiateCiLocale(request.headers, preferredLocale);
  const formattedLocale = formatLocale(locale);

  const channel = negotiateChannel(formattedLocale, preferredChannel);

  const updatedUrl = new URL(request.url);

  if (
    preferredChannel !== channel ||
    !(isDefined(preferredLocale) && ciEquals(preferredLocale, locale))
  ) {
    // Redirect if the channel or locale is not valid

    // eslint-disable-next-line functional/immutable-data -- There is no easy way to solve this without mutating an object
    updatedUrl.pathname = formatPathname([
      channel,
      locale,
      ...pathnameSegments,
    ]);
    return NextResponse.redirect(updatedUrl);
  } else if (preferredLocale !== locale) {
    // Rewrite if the channel is valid and the locale is case-insensitive equal

    // eslint-disable-next-line functional/immutable-data -- There is no easy way to solve this without mutating an object
    updatedUrl.pathname = formatPathname([
      channel,
      locale,
      ...pathnameSegments.slice(2),
    ]);
    return NextResponse.rewrite(updatedUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
