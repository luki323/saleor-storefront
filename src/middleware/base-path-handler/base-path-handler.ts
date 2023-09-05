import {formatLocale} from '@/i18n/tools/format-locale';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';
import {splitPathname} from '@/lib/tools/split-pathname';

import type {Handler} from '../create-middie';
import {negotiateChannel} from './negotiate-channel';
import {negotiateCiLocale} from './negotiate-ci-locale';

export const basePathHandler: Handler = function basePathHandler(req) {
  const segments = splitPathname(req.nextUrl.pathname);
  const [channelSegment, localeSegment] = segments;

  const locale = negotiateCiLocale(req.headers, localeSegment);
  const formattedLocale = formatLocale(locale);

  const channel = negotiateChannel(formattedLocale, channelSegment);

  if (
    channelSegment !== channel ||
    !isDefined(localeSegment) ||
    localeSegment !== locale
  ) {
    // Redirect if the channel or locale isn't valid
    const updatedUrl = req.nextUrl.clone();
    updatedUrl.pathname = formatPathname(channel, locale, ...segments);

    this.MiddieResponse.redirect(updatedUrl);
  }
  if (localeSegment === locale) {
    // Rewrite if the channel is valid and the locale is case-insensitive equal
    const updatedUrl = req.nextUrl.clone();
    updatedUrl.pathname = formatPathname(channel, locale, ...segments.slice(2));

    this.MiddieResponse.rewrite(updatedUrl);
  }
};
