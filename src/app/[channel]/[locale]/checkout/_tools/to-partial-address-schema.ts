import type {Address} from '@/graphql/generated/types';
import {isCountryCode} from '@/i18n/tools/is-country-code';

import type {AddressSchema} from '../_components/address-form';

export function toPartialAddressSchema({
  country,
  ...address
}: Pick<Address, keyof AddressSchema>): Partial<AddressSchema> {
  return {
    ...(country.code && isCountryCode(country.code) && {country: country.code}),
    ...address,
  };
}
