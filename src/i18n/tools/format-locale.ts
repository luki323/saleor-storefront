import invariant from 'tiny-invariant';

import {ciEquals} from '@/lib/tools/ci-equals';
import {isDefined} from '@/lib/tools/is-defined';

import {AVAILABLE_LOCALES} from '../consts';

export function formatLocale(preferredLocale: string) {
  const formattedLocale = AVAILABLE_LOCALES.find((locale) =>
    ciEquals(locale, preferredLocale),
  );
  invariant(
    isDefined(formattedLocale),
    `Couldn't format '${preferredLocale}' locale`,
  );
  return formattedLocale;
}
