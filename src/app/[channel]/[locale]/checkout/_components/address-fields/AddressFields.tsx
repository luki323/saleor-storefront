import {useFormContext} from 'react-hook-form';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {FormattedMessage, useIntl} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {cn} from '@/lib/tools/cn';

import {ADDRESS_FIELDS} from '../../_consts';
import type {AddressFieldsSchema} from '../../_hooks/use-address-fields-schema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPlaceholder,
  SelectTrigger,
  SelectValue,
} from '../Select';
import {TextField} from '../TextField';
import {CountrySelect} from './components/country-select';
import {FormGroup, FormItem} from './components/Form';

const AddressFields_ChannelFragment = graphql(/* GraphQL */ `
  fragment AddressFields_ChannelFragment on Channel {
    ...CountrySelect_ChannelFragment
  }
`);

const AddressFields_AddressValidationDataFragment = graphql(/* GraphQL */ `
  fragment AddressFields_AddressValidationDataFragment on AddressValidationData {
    countryAreaChoices {
      raw
      verbose
    }
  }
`);

interface Props {
  readonly channel: FragmentType<typeof AddressFields_ChannelFragment>;
  readonly addressValidationData: FragmentType<
    typeof AddressFields_AddressValidationDataFragment
  >;
  readonly disabled: boolean;
}

export function AddressFields({
  channel,
  addressValidationData,
  disabled,
}: Props) {
  const form = useFormContext<AddressFieldsSchema>();

  const channelFragment = getFragment(AddressFields_ChannelFragment, channel);
  const {countryAreaChoices} = getFragment(
    AddressFields_AddressValidationDataFragment,
    addressValidationData,
  );

  const intl = useIntl();

  return (
    <div className={cn('flex flex-col gap-3.5')}>
      <CountrySelect channel={channelFragment} disabled={disabled} />
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
                {countryAreaChoices
                  .filter(
                    (
                      countryAreaChoice,
                    ): countryAreaChoice is {
                      readonly raw: string;
                      readonly verbose: string;
                    } =>
                      Boolean(countryAreaChoice.raw) &&
                      Boolean(countryAreaChoice.verbose),
                  )
                  .map(({raw, verbose}) => (
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
