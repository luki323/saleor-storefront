import {ciEquals} from '@/lib/tools/ci-equals';
import {isDefined} from '@/lib/tools/is-defined';

import {AVAILABLE_LOCALES} from '../consts';

export function isAvailableCiLocale(preferredLocale: string) {
  return isDefined(
    AVAILABLE_LOCALES.find((locale) => ciEquals(locale, preferredLocale)),
  );
}
