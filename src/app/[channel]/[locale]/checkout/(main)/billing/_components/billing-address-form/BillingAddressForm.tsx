'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {APP_ROUTES} from '@/lib/consts';
import {capitalize} from '@/lib/tools/capitalize';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {AddressFields} from '../../../_components/address-fields';
import {BackwardLink} from '../../../_components/BackwardLink';
import {Form} from '../../../_components/Form';
import {SubmitButton} from '../../../_components/SubmitButton';
import {useAddressSchema} from '../../../_hooks/use-address-schema';
import type {getAddressValidationRules} from '../../../_tools/get-address-validation-rules';
import type {getCountryCodes} from '../../../_tools/get-country-codes';
import {useBillingAddressSubmit} from './use-billing-address-submit';

interface Props {
  readonly defaultValues: Partial<
    Zod.infer<ReturnType<typeof useAddressSchema>>
  >;
  readonly countryCodes: Awaited<ReturnType<typeof getCountryCodes>>;
  readonly addressValidationRules: Awaited<
    ReturnType<typeof getAddressValidationRules>
  >;
}

export function BillingAddressForm({
  defaultValues,
  countryCodes,
  addressValidationRules: {countryAreaChoices, postalCode, addressFormat},
}: Props) {
  const addressSchema = useAddressSchema({
    postalCode,
    addressFormat,
  });

  const city = defaultValues.city;
  const countryArea = countryAreaChoices.at(0)?.raw;

  const form = useForm<Zod.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      ...defaultValues,
      ...(city && {city: capitalize(city)}),
      ...(countryArea && {countryArea}),
    },
  });

  const {billingAddressSubmit, routeIsPending} = useBillingAddressSubmit();

  return (
    <Form form={form} onSubmit={form.handleSubmit(billingAddressSubmit)}>
      <AddressFields
        countryCodes={countryCodes}
        countryAreaChoices={countryAreaChoices}
      />
      <div className={cn('flex items-center justify-between')}>
        <BackwardLink href={formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING)}>
          <FormattedMessage defaultMessage="Return to shipping" id="Akc1Gk" />
        </BackwardLink>
        <div className={cn('w-fit')}>
          <SubmitButton
            disabled={form.formState.isSubmitting || routeIsPending}>
            <FormattedMessage
              defaultMessage="Continue to payment"
              id="+g+0OK"
            />
          </SubmitButton>
        </div>
      </div>
    </Form>
  );
}
