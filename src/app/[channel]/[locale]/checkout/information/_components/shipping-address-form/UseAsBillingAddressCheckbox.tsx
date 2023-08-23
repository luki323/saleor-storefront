import {useFormContext} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField, FormItem} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';

import {Checkbox} from '../../../_components/Checkbox';
import {FIELDS} from './consts/fields';
import type {ShippingAddressSchema} from './consts/schema';

export function UseAsBillingAddressCheckbox() {
  const form = useFormContext<ShippingAddressSchema>();

  return (
    <FormField
      name={FIELDS.USE_SHIPPING_AS_BILLING_ADDRESS}
      control={form.control}
      render={({field}) => {
        return (
          <FormItem>
            <FormFieldControl>
              <Checkbox
                checked={field.value ?? false}
                onCheckedChange={field.onChange}>
                <FormattedMessage
                  defaultMessage="Use shipping address as billing address"
                  id="2htJqw"
                />
              </Checkbox>
            </FormFieldControl>
          </FormItem>
        );
      }}
    />
  );
}
