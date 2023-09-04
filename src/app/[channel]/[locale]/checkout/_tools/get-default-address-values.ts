import type {
  Address,
  ChoiceValue,
  CountryCode,
  Node,
  ObjectWithMetadata,
} from '@/graphql/generated/graphql';
import {capitalize} from '@/lib/tools/capitalize';

type AddressValues = Partial<
  Omit<Address, keyof Node | keyof ObjectWithMetadata>
>;

export function getDefaultAddressValues({
  addressValues,
  countryCode,
  countryAreaChoices,
}: {
  readonly addressValues: AddressValues;
  readonly countryCode: CountryCode;
  readonly countryAreaChoices: ReadonlyArray<ChoiceValue>;
}) {
  const countryArea = countryAreaChoices.at(0)?.raw;

  return {
    ...addressValues,
    ...(countryCode && {country: countryCode}),
    ...(addressValues?.city && {city: capitalize(addressValues.city)}),
    ...(countryArea && {countryArea}),
  };
}
