import type {AvailableLocale} from '../consts';
import {AVAILABLE_LOCALES} from '../consts';

export function assertAvailableLocale(
  locale: string,
): asserts locale is AvailableLocale {
  const availableLocales: readonly string[] = AVAILABLE_LOCALES;

  if (!availableLocales.includes(locale)) {
    throw new Error(`Not found ${locale} locale`);
  }
}
