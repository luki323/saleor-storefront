import {isCountryCode} from '@/i18n/tools/is-country-code';

export function getCountrySearchParam({
  country,
}:
  | {
      readonly country?: string;
    }
  | undefined = {}) {
  return isCountryCode(country) ? country : null;
}
