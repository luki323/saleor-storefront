import type {Address} from '@/graphql/generated/types';
import {isCountryCode} from '@/i18n/tools/is-country-code';

import type {AddressFieldsSchema} from '../_hooks/use-address-fields-schema';

export function toAddressFieldsSchema({
  country,
  ...address
}: Pick<Address, keyof AddressFieldsSchema>): Partial<AddressFieldsSchema> {
  return {
    ...(country.code && isCountryCode(country.code) && {country: country.code}),
    ...address,
  };
}
