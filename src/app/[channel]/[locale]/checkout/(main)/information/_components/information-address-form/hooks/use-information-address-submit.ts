import {useCallback, useTransition} from 'react';

import type {AddressInput} from '@/graphql/generated/types';
import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {useAddressSchema} from '../../../../_hooks/use-address-schema';
import {updateCheckoutBillingAddress} from '../../../../_tools/update-checkout-billing-address';
import {updateCheckoutEmail} from '../../../_tools/update-checkout-email-action';
import {updateCheckoutShippingAddress} from '../../../_tools/update-checkout-shipping-address';
import type {useInformationSchema} from './use-information-schema';

type ShippingAddressSchema = Zod.infer<ReturnType<typeof useAddressSchema>> &
  Zod.infer<ReturnType<typeof useInformationSchema>>;

export function useInformationAddressSubmit() {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    shippingAddressSubmit: useCallback(
      async ({
        email,
        useShippingAsBillingAddress,
        ...shippingAddress
      }: ShippingAddressSchema) => {
        const {streetAddress2, ...restShippingAddress} = shippingAddress;

        const addressInput: AddressInput = {
          ...(streetAddress2 && {streetAddress2}),
          ...restShippingAddress,
        };

        const [checkoutShippingAddress, checkoutEmail] = await Promise.all([
          updateCheckoutShippingAddress(addressInput),
          updateCheckoutEmail(email),
        ]);

        try {
          if (
            checkoutShippingAddress?.errors.length ||
            checkoutEmail?.errors.length
          ) {
            // TODO: display server error
            return;
          }

          if (useShippingAsBillingAddress) {
            const checkoutBillingAddress = await updateCheckoutBillingAddress(
              addressInput,
            );

            if (checkoutBillingAddress?.errors.length) {
              // TODO: display server error
              return;
            }
          }
          startTransition(() => {
            intlRouter.push(formatPathname(...APP_ROUTES.CHECKOUT.BILLING));
          });
        } catch (error) {
          // TODO: display server error
          console.error(error);
        }
      },
      [intlRouter],
    ),
  };
}
