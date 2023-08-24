import type {Address} from '@/graphql/generated/types';
import {isCountryCode} from '@/i18n/tools/is-country-code';

import type {useAddressSchema} from '../_hooks/use-address-schema';

type AddressSchema = Zod.infer<ReturnType<typeof useAddressSchema>>;

export function toAddressSchema({
  country,
  ...address
}: Pick<Address, keyof AddressSchema>): Partial<AddressSchema> {
  return {
    ...(country.code && isCountryCode(country.code) && {country: country.code}),
    ...address,
  };
}
