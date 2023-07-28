import {AVAILABLE_LOCALES} from '../consts';

import type {AvailableLocle} from '../consts';

export function assertAvailableLocale(
  locale: string,
): asserts locale is AvailableLocle {
  const availableLocales: readonly string[] = AVAILABLE_LOCALES;

  if (!availableLocales.includes(locale)) {
    throw new Error(`Not found ${locale} locale`);
  }
}
