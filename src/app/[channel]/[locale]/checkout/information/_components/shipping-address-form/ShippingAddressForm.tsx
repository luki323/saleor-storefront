'use client';

import type {ComponentProps} from 'react';

import {AddressForm} from '../../../_components/address-form';
import {shippingAddressSchema} from './consts/schema';
import {useShippingAddressSubmit} from './use-shipping-address-submit';
import {UseAsBillingAddressCheckbox} from './UseAsBillingAddressCheckbox';

interface Props
  extends Omit<ComponentProps<typeof AddressForm>, 'onSubmit' | 'children'> {}

export function ShippingAddressForm(props: Props) {
  const shippingAddressSubmit = useShippingAddressSubmit();

  return (
    <AddressForm
      onSubmit={shippingAddressSubmit}
      schema={shippingAddressSchema}
      {...props}>
      <UseAsBillingAddressCheckbox />
    </AddressForm>
  );
}
