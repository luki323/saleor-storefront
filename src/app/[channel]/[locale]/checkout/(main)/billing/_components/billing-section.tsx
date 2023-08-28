import type {CountryCode} from '@/graphql/generated/types';
import {getBasePath} from '@/i18n/context/get-base-path';
import {FormattedMessage} from '@/i18n/react-intl';
import {localeToCountryCode} from '@/i18n/tools/locale-to-country-code';
import {raise} from '@/lib/tools/raise';

import {Heading} from '../../_components/Heading';
import {Section} from '../../_components/Section';
import {getAddressValidationRules} from '../../_tools/get-address-validation-rules';
import type {Checkout} from '../../_tools/get-checkout';
import {getCountryCodes} from '../../_tools/get-country-codes';
import {BillingAddressForm} from './billing-address-form';

interface Props {
  readonly billingAddress: Checkout['billingAddress'];
  readonly country: CountryCode | null;
}

export async function BillingSection({billingAddress, country}: Props) {
  const [channel, locale] = getBasePath();

  const countryCode =
    country ?? billingAddress?.country ?? localeToCountryCode(locale);

  const [countryCodes, addressValidationRules] = await Promise.all([
    getCountryCodes({
      channel,
    }),
    getAddressValidationRules({
      countryCode: countryCode ?? raise('Country code is not defineds'),
    }),
  ]);

  return (
    <Section>
      <Heading>
        <FormattedMessage defaultMessage="Billing address" id="6orx1c" />
      </Heading>
      <BillingAddressForm
        defaultValues={{
          ...billingAddress,
          ...(countryCode && {country: countryCode}),
        }}
        countryCodes={countryCodes}
        addressValidationRules={addressValidationRules}
      />
    </Section>
  );
}
