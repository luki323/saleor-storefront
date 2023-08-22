import {useCallback} from 'react';

import type {AddressSchema} from '../../../_components/address-form';
import {updateCheckoutBillingAddress} from '../../../_tools/update-checkout-billing-address';

export function useBillingAddressSubmit() {
  return useCallback(
    async ({streetAddress2, ...restBillingAddress}: AddressSchema) => {
      try {
        const {errors} =
          (await updateCheckoutBillingAddress({
            ...(streetAddress2 && {streetAddress2}),
            ...restBillingAddress,
          })) ?? {};

        if (errors?.length) {
          // TODO: display server error
          console.error(errors);
        }
      } catch (error) {
        // TODO: display server error
        console.error(error);
      }
    },
    [],
  );
}
