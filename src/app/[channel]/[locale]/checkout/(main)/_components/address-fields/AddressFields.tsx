import {useFormContext} from 'react-hook-form';

import {FormattedMessage, useIntl} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {cn} from '@/lib/tools/cn';

import {ADDRESS_FIELDS} from '../../_consts';
import type {AddressFieldsSchema} from '../../_hooks/use-address-fields-schema';
import type {AddressValidationRules} from '../../_tools/get-address-validation-rules';
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
import {TextField} from './components/TextField';

interface Props {
  readonly countryCodes: readonly string[];
  readonly countryAreaChoices: AddressValidationRules['countryAreaChoices'];
  readonly disabled: boolean;
}

export function AddressFields({
  countryCodes,
  countryAreaChoices,
  disabled,
}: Props) {
  const form = useFormContext<AddressFieldsSchema>();

  const intl = useIntl();

  return (
    <div className={cn('flex flex-col gap-3.5')}>
      <CountrySelect countryCodes={countryCodes} disabled={disabled} />
      <FormGroup>
        <FormField
          name={ADDRESS_FIELDS.FIRST_NAME}
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  placeholder={intl.formatMessage({
                    defaultMessage: 'Firstname',
                    id: 'qTs7Lh',
                  })}
                  disabled={disabled}
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
          name={ADDRESS_FIELDS.LAST_NAME}
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  placeholder={intl.formatMessage({
                    defaultMessage: 'Lastname',
                    id: '/Knt5/',
                  })}
                  disabled={disabled}
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
        name={ADDRESS_FIELDS.STREET_ADDRESS1}
        control={form.control}
        render={({field}) => (
          <FormItem>
            <FormFieldControl>
              <TextField
                placeholder={intl.formatMessage({
                  defaultMessage: 'Address',
                  id: 'e6Ph5+',
                })}
                disabled={disabled}
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
        name={ADDRESS_FIELDS.STREET_ADDRESS2}
        control={form.control}
        render={({field}) => (
          <FormItem>
            <FormFieldControl>
              <TextField
                placeholder={intl.formatMessage({
                  defaultMessage: 'Apartment, suit, etc. (optional)',
                  id: '0MqfPh',
                })}
                disabled={disabled}
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
          name={ADDRESS_FIELDS.CITY}
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  placeholder={intl.formatMessage({
                    defaultMessage: 'City',
                    id: 'TE4fIS',
                  })}
                  disabled={disabled}
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
          name={ADDRESS_FIELDS.COUNTRY_AREA}
          control={form.control}
          render={({field}) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={disabled}
              required>
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
          name={ADDRESS_FIELDS.POSTAL_CODE}
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormFieldControl>
                <TextField
                  placeholder={intl.formatMessage({
                    defaultMessage: 'ZIP Code',
                    id: 'rHnr4K',
                  })}
                  disabled={disabled}
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
    </div>
  );
}
