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
import type {AddressFieldsSchema} from '../../../_hooks/use-address-fields-schema';
import {useAddressFieldsSchema} from '../../../_hooks/use-address-fields-schema';
import type {AddressValidationRules} from '../../../_tools/get-address-validation-rules';
import {useBillingAddressSubmit} from './use-billing-address-submit';

interface Props {
  readonly defaultValues: Partial<AddressFieldsSchema>;
  readonly countryCodes: readonly string[];
  readonly addressValidationRules: AddressValidationRules;
}

export function BillingAddressForm({
  defaultValues,
  countryCodes,
  addressValidationRules: {countryAreaChoices, postalCode},
}: Props) {
  const addressFieldsSchema = useAddressFieldsSchema({
    postalCode,
  });

  const city = defaultValues.city;
  const countryArea = countryAreaChoices.at(0)?.raw;

  const form = useForm<AddressFieldsSchema>({
    resolver: zodResolver(addressFieldsSchema),
    defaultValues: {
      ...defaultValues,
      ...(city && {city: capitalize(city)}),
      ...(countryArea && {countryArea}),
    },
  });

  const {billingAddressSubmit, routeIsPending} = useBillingAddressSubmit();

  const disabled = form.formState.isSubmitting || routeIsPending;

  return (
    <Form form={form} onSubmit={form.handleSubmit(billingAddressSubmit)}>
      <AddressFields
        countryCodes={countryCodes}
        countryAreaChoices={countryAreaChoices}
        disabled={disabled}
      />
      <div className={cn('flex items-center justify-between')}>
        <BackwardLink href={formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING)}>
          <FormattedMessage defaultMessage="Return to shipping" id="Akc1Gk" />
        </BackwardLink>
        <div className={cn('w-fit')}>
          <SubmitButton disabled={disabled}>
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
