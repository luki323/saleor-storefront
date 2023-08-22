import {zodResolver} from '@hookform/resolvers/zod';
import type {ReactNode} from 'react';
import type {SubmitHandler} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import type {AnyZodObject} from 'zod';

import {FormattedMessage, useIntl} from '@/i18n/react-intl';
import {Form} from '@/lib/components/form/Form';
import {FormField} from '@/lib/components/form/FormField/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {cn} from '@/lib/tools/cn';

import {CountrySelect} from './components/country-select';
import {FormGroup, FormItem} from './components/Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPlaceholder,
  SelectTrigger,
  SelectValue,
} from './components/Select';
import {SubmitButton} from './components/SubmitButton';
import {TextField} from './components/TextField';
import {FIELDS} from './fields';
import type {AddressSchema, AddressValidationRules} from './types';
import {useAddressSchema} from './use-address-schema';

interface Props<Schema extends AnyZodObject> {
  readonly children?: ReactNode;
  readonly schema?: Schema;
  readonly onSubmit: SubmitHandler<AddressSchema & Zod.infer<Schema>>;
  readonly defaultValues: Partial<AddressSchema & Zod.infer<Schema>>;
  readonly countryCodes: readonly string[];
  readonly addressValidationRules: AddressValidationRules;
}

export function AddressForm<Schema extends AnyZodObject>({
  children,
  schema,
  onSubmit,
  defaultValues,
  countryCodes,
  addressValidationRules: {countryAreaChoices, postalCode, addressFormat},
}: Props<Schema>) {
  const addressSchema = useAddressSchema({
    schema,
    postalCode,
    addressFormat,
  });

  const countryArea = countryAreaChoices.at(0)?.raw;

  const form = useForm<AddressSchema>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      ...(countryArea && {countryArea}),
      ...defaultValues,
    },
  });

  const intl = useIntl();

  return (
    <Form
      form={form}
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn('flex flex-col gap-3.5')}>
      <CountrySelect countryCodes={countryCodes} />
      <FormGroup>
        <FormField
          name={FIELDS.FIRST_NAME}
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  placeholder={intl.formatMessage({
                    defaultMessage: 'Firstname',
                    id: 'qTs7Lh',
                  })}
                  required
                  {...field}
                />
              </FormFieldControl>
              <FormFieldErrorMessage>
                <ErrorText />
              </FormFieldErrorMessage>
            </FormItem>
          )}
        />
        <FormField
          name={FIELDS.LAST_NAME}
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  placeholder={intl.formatMessage({
                    defaultMessage: 'Lastname',
                    id: '/Knt5/',
                  })}
                  required
                  {...field}
                />
              </FormFieldControl>
              <FormFieldErrorMessage>
                <ErrorText />
              </FormFieldErrorMessage>
            </FormItem>
          )}
        />
      </FormGroup>
      <FormField
        name={FIELDS.STREET_ADDRESS1}
        control={form.control}
        render={({field}) => (
          <FormItem>
            <FormFieldControl>
              <TextField
                placeholder={intl.formatMessage({
                  defaultMessage: 'Address',
                  id: 'e6Ph5+',
                })}
                required
                {...field}
              />
            </FormFieldControl>
            <FormFieldErrorMessage>
              <ErrorText />
            </FormFieldErrorMessage>
          </FormItem>
        )}
      />
      <FormField
        name={FIELDS.STREET_ADDRESS2}
        control={form.control}
        render={({field}) => (
          <FormItem>
            <FormFieldControl>
              <TextField
                placeholder={intl.formatMessage({
                  defaultMessage: 'Apartment, suit, etc. (optional)',
                  id: '0MqfPh',
                })}
                {...field}
              />
            </FormFieldControl>
            <FormFieldErrorMessage>
              <ErrorText />
            </FormFieldErrorMessage>
          </FormItem>
        )}
      />
      <FormGroup>
        <FormField
          name={FIELDS.CITY}
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  placeholder={intl.formatMessage({
                    defaultMessage: 'City',
                    id: 'TE4fIS',
                  })}
                  required
                  {...field}
                />
              </FormFieldControl>
              <FormFieldErrorMessage>
                <ErrorText />
              </FormFieldErrorMessage>
            </FormItem>
          )}
        />
        <FormField
          name={FIELDS.COUNTRY_AREA}
          control={form.control}
          render={({field}) => (
            <Select value={field.value} onValueChange={field.onChange} required>
              <SelectTrigger>
                <SelectPlaceholder>
                  <FormattedMessage defaultMessage="State" id="ku+mDU" />
                </SelectPlaceholder>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countryAreaChoices.map(({raw, verbose}) => (
                  <SelectItem key={raw} value={raw}>
                    {verbose}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FormField
          name={FIELDS.POSTAL_CODE}
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  placeholder={intl.formatMessage({
                    defaultMessage: 'ZIP Code',
                    id: 'rHnr4K',
                  })}
                  required
                  {...field}
                />
              </FormFieldControl>
              <FormFieldErrorMessage>
                <ErrorText />
              </FormFieldErrorMessage>
            </FormItem>
          )}
        />
      </FormGroup>
      {children}
      <div className={cn('self-end')}>
        <SubmitButton>
          <FormattedMessage defaultMessage="Continue to shipping" id="DgnS8R" />
        </SubmitButton>
      </div>
    </Form>
  );
}
