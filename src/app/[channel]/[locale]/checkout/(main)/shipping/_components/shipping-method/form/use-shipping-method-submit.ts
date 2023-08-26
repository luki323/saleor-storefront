import {useCallback, useTransition} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {updateCheckoutDeliveryMethodAction} from '../../../_tools/update-checkout-delivery-method-action';
import type {shippingMethodSchema} from './consts/shipping-method-schema';

export function useShippingMethodSubmit() {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    shippingMethodSubmit: useCallback(
      async ({deliveryMethodId}: Zod.infer<typeof shippingMethodSchema>) => {
        try {
          const {errors} =
            (await updateCheckoutDeliveryMethodAction(deliveryMethodId)) ?? {};

          if (errors?.length) {
            // TODO: display server error
            console.error(errors);
          } else {
            startTransition(() => {
              intlRouter.push(formatPathname(...APP_ROUTES.CHECKOUT.BILLING));
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
