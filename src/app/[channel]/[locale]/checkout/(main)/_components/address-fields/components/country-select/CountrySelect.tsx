import {useFormContext} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';

import {ADDRESS_FIELDS} from '../../../../_consts';
import type {useAddressSchema} from '../../../../_hooks/use-address-schema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPlaceholder,
  SelectTrigger,
  SelectValue,
} from '../Select';
import {useCountryOptions} from './hooks/use-country-options';
import {useSetCountrySearchParam} from './hooks/use-set-country-search-param';

interface Props {
  readonly countryCodes: readonly string[];
}

export function CountrySelect({countryCodes}: Props) {
  const form = useFormContext<Zod.infer<ReturnType<typeof useAddressSchema>>>();

  const countryOptions = useCountryOptions(countryCodes);

  const {routeIsPending, setCountrySearchParam} = useSetCountrySearchParam();

  return (
    <FormField
      name={ADDRESS_FIELDS.COUNTRY}
      control={form.control}
      render={({field}) => (
        <Select
          value={field.value}
          disabled={routeIsPending}
          onValueChange={(value) => {
            field.onChange(value);

            setCountrySearchParam(value);
          }}
          required>
          <SelectTrigger>
            <SelectPlaceholder>
              <FormattedMessage defaultMessage="Country/Region" id="/V1GsM" />
            </SelectPlaceholder>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {countryOptions.map(({label, value}) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
