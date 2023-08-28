import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToCountryCode} from '@/i18n/tools/locale-to-country-code';
import {raise} from '@/lib/tools/raise';

import {getAddressValidationRules} from '../../_tools/get-address-validation-rules';
import type {Checkout} from '../../_tools/get-checkout';
import {getCountryCodes} from '../../_tools/get-country-codes';
import type {getCountrySearchParam} from '../../_tools/get-country-search-param';
import {InformationForm} from './information-form';

interface Props {
  readonly email: Checkout['email'];
  readonly shippingAddress: Checkout['shippingAddress'];
  readonly country?: ReturnType<typeof getCountrySearchParam>;
}

export async function InformationSection({
  email,
  shippingAddress,
  country,
}: Props) {
  const [channel, locale] = getBasePath();

  const countryCode =
    country ?? shippingAddress?.country ?? localeToCountryCode(locale);

  const [countryCodes, addressValidationRules] = await Promise.all([
    getCountryCodes({
      channel,
    }),
    getAddressValidationRules({
      countryCode: countryCode ?? raise('Country code is not defineds'),
    }),
  ]);

  return (
    <InformationForm
      defaultValues={{
        ...(email && {email}),
        ...shippingAddress,
        ...(countryCode && {country: countryCode}),
      }}
      countryCodes={countryCodes}
      addressValidationRules={addressValidationRules}
    />
  );
}
