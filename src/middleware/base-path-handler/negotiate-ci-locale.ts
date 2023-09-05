import {match} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import {AVAILABLE_LOCALES, DEFAULT_LOCALE} from '@/i18n/consts';
import {isAvailableCiLocale} from '@/i18n/tools/is-available-ci-locale';
import {ciEquals} from '@/lib/tools/ci-equals';
import {isDefined} from '@/lib/tools/is-defined';

export function negotiateCiLocale(headers: Headers, preferredLocale?: string) {
  const requestedLanguages = new Negotiator({
    headers: Object.fromEntries(headers),
  }).languages();

  let locale: string;

  try {
    if (!isDefined(preferredLocale)) {
      throw null;
    }

    locale = match(
      [
        ...(isAvailableCiLocale(preferredLocale) ? [preferredLocale] : []),
        ...requestedLanguages,
      ],
      // @ts-expect-error https://github.com/formatjs/formatjs/pull/4132
      AVAILABLE_LOCALES,
      DEFAULT_LOCALE,
    );
  } catch {
    locale = DEFAULT_LOCALE;
  }
  return isDefined(preferredLocale) && ciEquals(preferredLocale, locale)
    ? preferredLocale
    : locale;
}
