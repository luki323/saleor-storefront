import {isCountryCode} from '@/i18n/tools/is-country-code';

export function findCountryCode(...values: readonly unknown[]) {
  return values.find(isCountryCode);
}
