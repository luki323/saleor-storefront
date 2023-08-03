import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {formatLocale} from './i18n/tools/format-locale';
import {ciEquals} from './lib/tools/ci-equals';
import {formatPathname} from './lib/tools/format-pathname';
import {isDefined} from './lib/tools/is-defined';
import {splitPathname} from './lib/tools/split-pathname';
import {negotiateChannel} from './middleware/negotiate-channel';
import {negotiateCiLocale} from './middleware/negotiate-ci-locale';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default function middleware(request: NextRequest) {
  const pathnameSegments = splitPathname(request.nextUrl.pathname);

  const [preferredChannel, preferredLocale] = pathnameSegments;

  const locale = negotiateCiLocale(request.headers, preferredLocale);
  const formattedLocale = formatLocale(locale);

  const channel = negotiateChannel(formattedLocale, preferredChannel);

  const isBasePathInvalid =
    preferredChannel !== channel ||
    !(isDefined(preferredLocale) && ciEquals(preferredLocale, locale));

  const updatedUrl = new URL(request.url);

  const updatedSegments = [
    channel,
    locale,
    ...(isBasePathInvalid ? pathnameSegments : pathnameSegments.slice(2)),
  ];

  // There is no easy way to solve this without mutating an object
  // eslint-disable-next-line functional/immutable-data
  updatedUrl.pathname = formatPathname(updatedSegments);

  if (isBasePathInvalid) {
    // Redirect if the channel or locale is not valid
    return NextResponse.redirect(updatedUrl);
  } else if (preferredLocale !== locale) {
    // Rewrite if the channel is valid and the locale is case-insensitive equal
    return NextResponse.rewrite(updatedUrl);
  }
  return NextResponse.next();
}
