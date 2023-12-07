import {DEFAULT_LOCALE} from '@/i18n/consts';
import {isCountryCode} from '@/i18n/tools/is-country-code';
import {localeToCountryCode} from '@/i18n/tools/locale-to-country-code';
import {raise} from '@/lib/tools/raise';

export function findCountryCode(...values: readonly unknown[]) {
  return (
    values.find(isCountryCode) ??
    localeToCountryCode(DEFAULT_LOCALE) ??
    raise('Country code is not defined')
  );
}
