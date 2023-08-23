import {CountryCode} from '@/graphql/generated/types';
import {capitalize} from '@/lib/tools/capitalize';

export function isCountryCode(value: string): value is CountryCode {
  return capitalize(value) in CountryCode;
}
