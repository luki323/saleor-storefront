import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {formatLocale} from './i18n/tools/format-locale';
import {ciEquals} from './lib/tools/ci-equals';
import {formatPathname} from './lib/tools/format-pathname';
import {splitPathname} from './lib/tools/split-pathname';
import {isDefined} from './lib/tools/type-guards/is-defined';
import {CUSTOM_REQUEST_HEADERS} from './middleware/consts';
import {negotiateChannel} from './middleware/tools/negotiate-channel';
import {negotiateCiLocale} from './middleware/tools/negotiate-ci-locale';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};

export default function middleware(request: NextRequest) {
  const pathnameSegments = splitPathname(request.nextUrl.pathname);
  const [preferredChannel, preferredLocale] = pathnameSegments;

  const locale = negotiateCiLocale(request.headers, preferredLocale);
  const formattedLocale = formatLocale(locale);

  const channel = negotiateChannel(formattedLocale, preferredChannel);

  const updatedUrl = new URL(request.url);

  const updatedHeaders = new Headers(request.headers);
  updatedHeaders.set(CUSTOM_REQUEST_HEADERS.CHANNEL, channel);
  updatedHeaders.set(CUSTOM_REQUEST_HEADERS.LOCALE, locale);

  if (
    preferredChannel !== channel ||
    !(isDefined(preferredLocale) && ciEquals(preferredLocale, locale))
  ) {
    // Redirect if the channel or locale is not valid

    updatedUrl.pathname = formatPathname(channel, locale, ...pathnameSegments);

    return NextResponse.redirect(updatedUrl);
  } else if (preferredLocale !== locale) {
    // Rewrite if the channel is valid and the locale is case-insensitive equal

    updatedUrl.pathname = formatPathname(
      channel,
      locale,
      ...pathnameSegments.slice(2),
    );
    return NextResponse.rewrite(updatedUrl, {
      request: {
        headers: updatedHeaders,
      },
    });
  }
  return NextResponse.next({
    request: {
      headers: updatedHeaders,
    },
  });
}
