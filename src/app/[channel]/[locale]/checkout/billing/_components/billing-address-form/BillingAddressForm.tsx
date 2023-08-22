'use client';

import type {ComponentProps} from 'react';

import {AddressForm} from '../../../_components/address-form';
import {useBillingAddressSubmit} from './use-billing-address-submit';

interface Props
  extends Omit<ComponentProps<typeof AddressForm>, 'onSubmit' | 'children'> {}

export function BillingAddressForm(props: Props) {
  const billingAddressSubmit = useBillingAddressSubmit();

  return <AddressForm onSubmit={billingAddressSubmit} {...props} />;
}
