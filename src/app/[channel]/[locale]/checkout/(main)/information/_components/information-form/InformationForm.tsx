'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {Controller, useForm} from 'react-hook-form';

import {FormattedMessage, useIntl} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {capitalize} from '@/lib/tools/capitalize';
import {cn} from '@/lib/tools/cn';
import {deferInputFocus} from '@/lib/tools/defer-input-focus';

import {AddressFields} from '../../../_components/address-fields';
import {FormItem} from '../../../_components/address-fields/components/Form';
import {TextField} from '../../../_components/address-fields/components/TextField';
import {Checkbox} from '../../../_components/Checkbox';
import {Form} from '../../../_components/Form';
import {Heading} from '../../../_components/Heading';
import {Section} from '../../../_components/Section';
import {SubmitButton} from '../../../_components/SubmitButton';
import {useAddressSchema} from '../../../_hooks/use-address-schema';
import type {getAddressValidationRules} from '../../../_tools/get-address-validation-rules';
import type {getCountryCodes} from '../../../_tools/get-country-codes';
import {FIELDS} from './fields';
import {useInformationSchema} from './hooks/use-information-schema';
import {useInformationSubmit} from './hooks/use-information-submit';

interface Props {
  readonly defaultValues: Partial<
    Zod.infer<
      ReturnType<typeof useAddressSchema> &
        ReturnType<typeof useInformationSchema>
    >
  >;
  readonly countryCodes: Awaited<ReturnType<typeof getCountryCodes>>;
  readonly addressValidationRules: Awaited<
    ReturnType<typeof getAddressValidationRules>
  >;
}

export function InformationForm({
  defaultValues,
  countryCodes,
  addressValidationRules: {countryAreaChoices, postalCode, addressFormat},
}: Props) {
  const informationSchema = useInformationSchema();
  const addressSchema = useAddressSchema({
    postalCode,
    addressFormat,
  });

  const city = defaultValues.city;
  const countryArea = countryAreaChoices.at(0)?.raw;

  const form = useForm<
    Zod.infer<typeof addressSchema & typeof informationSchema>
  >({
    resolver: zodResolver(informationSchema.merge(addressSchema)),
    defaultValues: {
      ...defaultValues,
      ...(city && {city: capitalize(city)}),
      ...(countryArea && {countryArea}),
    },
  });

  const {shippingAddressSubmit, routeIsPending} = useInformationSubmit();

  const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

  const intl = useIntl();

  return (
    <Form form={form} onSubmit={form.handleSubmit(shippingAddressSubmit)}>
      <Section>
        <Heading>
          <FormattedMessage defaultMessage="Contact" id="zFegDD" />
        </Heading>
        <FormField
          name={FIELDS.EMAIL}
          control={form.control}
          render={({field: {ref, ...restField}}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  ref={refMountCallback(ref, deferInputFocus)}
                  placeholder={intl.formatMessage({
                    defaultMessage: 'Email',
                    id: 'sy+pv5',
                  })}
                  required
                  {...restField}
                />
              </FormFieldControl>
              <FormFieldErrorMessage>
                <ErrorText />
              </FormFieldErrorMessage>
            </FormItem>
          )}
        />
      </Section>
      <Section>
        <Heading>
          <FormattedMessage defaultMessage="Shipping address" id="ZpVtCa" />
        </Heading>
        <AddressFields
          countryCodes={countryCodes}
          countryAreaChoices={countryAreaChoices}
        />
        <Controller
          name={FIELDS.USE_SHIPPING_AS_BILLING_ADDRESS}
          control={form.control}
          render={({field}) => (
            <Checkbox
              checked={field.value ?? false}
              onCheckedChange={field.onChange}>
              <FormattedMessage
                defaultMessage="Use shipping address as billing address"
                id="2htJqw"
              />
            </Checkbox>
          )}
        />
      </Section>
      <div className={cn('self-end')}>
        <SubmitButton disabled={form.formState.isSubmitting || routeIsPending}>
          <FormattedMessage defaultMessage="Continue to shipping" id="DgnS8R" />
        </SubmitButton>
      </div>
    </Form>
  );
}
