import type {
  Address,
  ChoiceValue,
  CountryCode,
  Node,
  ObjectWithMetadata,
} from '@/graphql/generated/graphql';
import {capitalize} from '@/lib/tools/capitalize';

import type {AddressFieldsSchema} from '../_hooks/use-address-fields-schema';

export function getDefaultAddressValues({
  addressValues,
  countryCode,
  cityChoices,
  countryAreaChoices,
}: {
  readonly addressValues: Partial<
    Omit<Address, keyof Node | keyof ObjectWithMetadata>
  >;
  readonly countryCode: CountryCode;
  readonly cityChoices: ReadonlyArray<ChoiceValue>;
  readonly countryAreaChoices: ReadonlyArray<ChoiceValue>;
}): Partial<AddressFieldsSchema> {
  const city = cityChoices.at(0)?.raw;
  const countryArea = countryAreaChoices.at(0)?.raw;

  return {
    ...addressValues,
    ...(countryCode && {country: countryCode}),
    ...(city && {city}),
    ...(addressValues?.city && {city: capitalize(addressValues.city)}),
    ...(countryArea && {countryArea}),
  };
}
