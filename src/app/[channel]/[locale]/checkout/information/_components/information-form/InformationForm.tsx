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
import {Checkbox} from '../../../_components/Checkbox';
import {Form} from '../../../_components/Form';
import {Heading} from '../../../_components/Heading';
import {Section} from '../../../_components/Section';
import {SubmitButton} from '../../../_components/SubmitButton';
import {TextField} from '../../../_components/TextField';
import type {AddressFieldsSchema} from '../../../_hooks/use-address-fields-schema';
import {useAddressFieldsSchema} from '../../../_hooks/use-address-fields-schema';
import type {AddressValidationRules} from '../../../_tools/get-address-validation-rules';
import {FIELDS} from './fields';
import type {InformationFieldsSchema} from './hooks/use-information-fields-schema';
import {useInformationFieldsSchema} from './hooks/use-information-fields-schema';
import {useInformationSubmit} from './hooks/use-information-submit';

interface Props {
  readonly defaultValues: Partial<
    AddressFieldsSchema & InformationFieldsSchema
  >;
  readonly countryCodes: readonly string[];
  readonly addressValidationRules: AddressValidationRules;
}

export function InformationForm({
  defaultValues,
  countryCodes,
  addressValidationRules: {countryAreaChoices, postalCode},
}: Props) {
  const informationFieldsSchema = useInformationFieldsSchema();
  const addressFieldsSchema = useAddressFieldsSchema({
    postalCode,
  });

  const city = defaultValues.city;
  const countryArea = countryAreaChoices.at(0)?.raw;

  const form = useForm<AddressFieldsSchema & InformationFieldsSchema>({
    resolver: zodResolver(informationFieldsSchema.merge(addressFieldsSchema)),
    defaultValues: {
      ...defaultValues,
      ...(city && {city: capitalize(city)}),
      ...(countryArea && {countryArea}),
    },
  });

  const {shippingAddressSubmit, routeIsPending} = useInformationSubmit();

  const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

  const intl = useIntl();

  const disabled = form.formState.isSubmitting || routeIsPending;

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
                  type="email"
                  placeholder={intl.formatMessage({
                    defaultMessage: 'Email',
                    id: 'sy+pv5',
                  })}
                  autoComplete="email"
                  disabled={disabled}
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
          disabled={disabled}
        />
        <Controller
          name={FIELDS.USE_SHIPPING_AS_BILLING_ADDRESS}
          control={form.control}
          render={({field: {value = false, onChange}}) => (
            <Checkbox
              checked={value}
              disabled={disabled}
              onCheckedChange={onChange}>
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
