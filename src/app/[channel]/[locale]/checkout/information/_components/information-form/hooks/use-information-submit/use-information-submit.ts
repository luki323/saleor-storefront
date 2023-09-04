import {useCallback, useTransition} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {updateCheckoutEmailAction} from '../../../../_tools/update-checkout-email-action';
import type {InformationFieldsSchema} from '../use-information-fields-schema';
import {updateCheckoutAddress} from './update-checkout-address';

export function useInformationSubmit() {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    shippingAddressSubmit: useCallback(
      async ({
        email,
        useShippingAsBillingAddress,
        streetAddress2,
        ...restShippingAddress
      }: InformationFieldsSchema) => {
        try {
          const [checkoutAddress, checkoutEmail] = await Promise.all([
            updateCheckoutAddress(
              {
                ...(streetAddress2 && {streetAddress2}),
                ...restShippingAddress,
              },
              useShippingAsBillingAddress,
            ),
            updateCheckoutEmailAction(email),
          ]);

          if (checkoutAddress?.errors.length || checkoutEmail?.errors.length) {
            // TODO: display server error
          } else {
            startTransition(() => {
              const SHIPPING_PATHNAME = formatPathname(
                ...APP_ROUTES.CHECKOUT.SHIPPING,
              );

              intlRouter.push(SHIPPING_PATHNAME);
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
