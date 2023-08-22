import {redirect} from 'next/navigation';

import {getBasePath} from '@/i18n/context/get-base-path';
import {FormattedMessage} from '@/i18n/react-intl';
import {localeToCountryCode} from '@/i18n/tools/locale-to-country-code';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {raise} from '@/lib/tools/raise';

import {Heading} from '../../_components/Heading';
import {Section} from '../../_components/Section';
import {getAddressValidationRules} from '../../_tools/get-address-validation-rules';
import {getCheckout} from '../../_tools/get-checkout';
import {getCountryCodes} from '../../_tools/get-country-codes';
import type {getCountrySearchParam} from '../../_tools/get-country-search-param';
import {getRedirectUrl} from '../../_tools/get-redirect-url';
import {ShippingAddressForm} from './shipping-address-form';

interface Props {
  readonly id: string;
  readonly country?: ReturnType<typeof getCountrySearchParam>;
}

export async function ShippingSection({id, country}: Props) {
  const [channel, locale] = getBasePath();

  const checkout = await getCheckout({id});
  const {shippingAddress = {}} = checkout;

  const redirectUrl = getRedirectUrl(
    checkout,
    formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION),
  );

  if (redirectUrl) {
    redirect(redirectUrl);
  }

  const countryCode =
    country ?? checkout.shippingAddress?.country ?? localeToCountryCode(locale);

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
        <FormattedMessage defaultMessage="Shipping address" id="ZpVtCa" />
      </Heading>
      <ShippingAddressForm
        defaultValues={{
          ...shippingAddress,
          ...(countryCode && {country: countryCode}),
        }}
        countryCodes={countryCodes}
        addressValidationRules={addressValidationRules}
      />
    </Section>
  );
}
