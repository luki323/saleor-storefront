import {CountryCode} from '@/graphql/generated/types';
import {uppercaseFirstLetter} from '@/lib/tools/uppercase-first-letter';

export function isCountryCode(value: string): value is CountryCode {
  return uppercaseFirstLetter(value) in CountryCode;
}
