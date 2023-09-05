import invariant from 'tiny-invariant';

import {formatLocale} from '@/i18n/tools/format-locale';
import {isAvailableChannel} from '@/i18n/tools/is-available-channel';
import {isAvailableCiLocale} from '@/i18n/tools/is-available-ci-locale';
import {isDefined} from '@/lib/tools/is-defined';
import {splitPathname} from '@/lib/tools/split-pathname';

import {CUSTOM_REQUEST_HEADERS} from './consts';
import type {Handler} from './create-middie';

export const setBasePathHeadersHandler: Handler = function setBasePathHeaders(
  req,
) {
  const segments = splitPathname(req.nextUrl.pathname);
  const [channelSegment, localeSegment] = segments;

  invariant(isDefined(channelSegment) && isAvailableChannel(channelSegment));
  invariant(isDefined(localeSegment) && isAvailableCiLocale(localeSegment));

  const formattedLocale = formatLocale(localeSegment);

  const updatedHeaders = new Headers(req.headers);
  updatedHeaders.set(CUSTOM_REQUEST_HEADERS.CHANNEL, channelSegment);
  updatedHeaders.set(CUSTOM_REQUEST_HEADERS.LOCALE, formattedLocale);

  this.MiddieResponse.next({
    request: {headers: updatedHeaders},
  });
};
