import {useCallback} from 'react';

import type {AddressInput} from '@/graphql/generated/types';

import type {AddressSchema} from '../../../_components/address-form';
import {updateCheckoutBillingAddress} from '../../../_tools/update-checkout-billing-address';
import {updateCheckoutShippingAddress} from '../../_tools/update-checkout-shipping-address';
import type {shippingAddressSchema} from './consts/schema';

type ShippingAddressSchema = AddressSchema &
  Zod.infer<typeof shippingAddressSchema>;

export function useShippingAddressSubmit() {
  return useCallback(async (shippingAddressSchema: ShippingAddressSchema) => {
    const {
      useShippingAsBillingAddress,
      streetAddress2,
      ...restShippingAddress
    } = shippingAddressSchema;

    const addressInput: AddressInput = {
      ...(streetAddress2 && {streetAddress2}),
      ...restShippingAddress,
    };

    const {errors} = (await updateCheckoutShippingAddress(addressInput)) ?? {};

    try {
      if (errors?.length) {
        // TODO: display server error
        return;
      }

      if (useShippingAsBillingAddress) {
        const {errors} =
          (await updateCheckoutBillingAddress(addressInput)) ?? {};

        if (errors?.length) {
          // TODO: display server error
          console.error(errors);

          return;
        }
      }

      // TODO: next step
    } catch (error) {
      // TODO: display server error
      console.error(error);
    }
  }, []);
}
