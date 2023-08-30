import {useCallback, useTransition} from 'react';

import type {AddressInput} from '@/graphql/generated/types';
import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {AddressFieldsSchema} from '../../../../_hooks/use-address-fields-schema';
import {updateCheckoutBillingAddressAction} from '../../../../_tools/update-checkout-billing-address-action';
import {updateCheckoutEmailAction} from '../../../_tools/update-checkout-email-action';
import {updateCheckoutShippingAddressAction} from '../../../_tools/update-checkout-shipping-address-action';
import type {InformationFieldsSchema} from './use-information-fields-schema';

export function useInformationSubmit() {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    shippingAddressSubmit: useCallback(
      async ({
        email,
        useShippingAsBillingAddress,
        ...shippingAddress
      }: AddressFieldsSchema & InformationFieldsSchema) => {
        const {streetAddress2, ...restShippingAddress} = shippingAddress;

        const addressInput: AddressInput = {
          ...(streetAddress2 && {streetAddress2}),
          ...restShippingAddress,
        };

        try {
          const [checkoutShippingAddress, checkoutEmail] = await Promise.all([
            updateCheckoutShippingAddressAction(addressInput).then(
              async (checkoutShippingAddress) => {
                const {errors} = checkoutShippingAddress ?? {};

                if (errors?.length) {
                  return {
                    errors,
                  };
                }
                if (useShippingAsBillingAddress) {
                  const {errors} =
                    (await updateCheckoutBillingAddressAction(addressInput)) ??
                    {};

                  if (errors?.length) {
                    return {
                      errors,
                    };
                  }
                }
                return null;
              },
            ),
            updateCheckoutEmailAction(email),
          ]);

          if (
            checkoutShippingAddress?.errors.length ||
            checkoutEmail?.errors.length
          ) {
            // TODO: display server error
          } else {
            startTransition(() => {
              intlRouter.push(formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING));
              intlRouter.refresh();
            });
          }
        } catch (error) {
          // TODO: display server error
          console.error(error);
        }
      },
      [intlRouter],
    ),
  };
}
