import invariant from 'tiny-invariant';

import {formatLocale} from '@/i18n/tools/format-locale';
import {isAvailableChannel} from '@/i18n/tools/is-available-channel';
import {isAvailableCiLocale} from '@/i18n/tools/is-available-ci-locale';
import {isDefined} from '@/lib/tools/is-defined';
import {splitPathname} from '@/lib/tools/split-pathname';

import type {Handler} from './create-middleware';

export const CUSTOM_REQUEST_HEADERS = {
  CHANNEL: 'X-Channel',
  LOCALE: 'X-Locale',
};

export const setBasePathHeadersHandler: Handler = function setBasePathHeaders({
  req,
  EarlyReturnResponse,
}) {
  const segments = splitPathname(req.nextUrl.pathname);

  const [channelSegment] = segments;
  invariant(
    isDefined(channelSegment) && isAvailableChannel(channelSegment),
    `Invalid channel: "${channelSegment}"`,
  );
  const [, localeSegment] = segments;
  invariant(
    isDefined(localeSegment) && isAvailableCiLocale(localeSegment),
    `Invalid locale: "${localeSegment}"`,
  );
  const formattedLocale = formatLocale(localeSegment);

  const updatedHeaders = new Headers(req.headers);
  updatedHeaders.set(CUSTOM_REQUEST_HEADERS.CHANNEL, channelSegment);
  updatedHeaders.set(CUSTOM_REQUEST_HEADERS.LOCALE, formattedLocale);

  EarlyReturnResponse.next({
    request: {headers: updatedHeaders},
  });
};
