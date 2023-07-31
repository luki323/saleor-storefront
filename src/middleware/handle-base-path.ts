import {NextResponse} from 'next/server';

import {formatLocale} from '@/i18n/tools/format-locale';
import {ciEquals} from '@/lib/tools/ci-equals';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';
import {splitPathname} from '@/lib/tools/split-pathname';

import {CUSTOM_HEADERS} from './consts';
import {negotiateChannel} from './tools/negotiate-channel';
import {negotiateCiLocale} from './tools/negotiate-ci-locale';

import type {NextRequest} from 'next/server';

export function handleBasePath(request: NextRequest) {
  const pathnameSegments = splitPathname(request.nextUrl.pathname);
  const [preferredChannel, preferredLocale] = pathnameSegments;

  const locale = negotiateCiLocale(request.headers, preferredLocale);
  const formattedLocale = formatLocale(locale);

  const channel = negotiateChannel(formattedLocale, preferredChannel);

  const updatedHeaders = new Headers(request.headers);
  // For use in server actions and route handlers
  updatedHeaders.set(CUSTOM_HEADERS.CHANNEL, channel);
  updatedHeaders.set(CUSTOM_HEADERS.LOCALE, formattedLocale);

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
    return NextResponse.rewrite(updatedUrl, {
      request: {
        headers: updatedHeaders,
      },
    });
  }
  return updatedHeaders;
}
