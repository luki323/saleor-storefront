import type {AddressInput} from '@/graphql/generated/graphql';

import {updateCheckoutBillingAddressAction} from '../../../../../_tools/update-checkout-billing-address-action';
import {updateCheckoutShippingAddressAction} from '../../../../_tools/update-checkout-shipping-address-action';

export async function updateCheckoutAddress(
  addressInput: AddressInput,
  useShippingAsBillingAddress?: boolean,
) {
  const {errors} =
    (await updateCheckoutShippingAddressAction(addressInput)) ?? {};

  if (errors?.length) {
    return {
      errors,
    };
  }
  if (useShippingAsBillingAddress) {
    const {errors} =
      (await updateCheckoutBillingAddressAction(addressInput)) ?? {};

    if (errors?.length) {
      return {
        errors,
      };
    }
  }
  return null;
}
