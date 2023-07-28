import {ciEquals} from '@/tools/ci-equals';
import {raise} from '@/tools/raise';

import {AVAILABLE_LOCALES} from '../consts';

export function formatLocale(preferredLocale: string) {
  const matchedLocale =
    AVAILABLE_LOCALES.find((locale) => ciEquals(locale, preferredLocale)) ??
    raise(`Not found ${preferredLocale} locale`);

  return matchedLocale;
}
