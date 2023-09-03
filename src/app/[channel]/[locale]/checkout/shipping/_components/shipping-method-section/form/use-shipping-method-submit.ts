import {revalidatePath} from 'next/cache';
import {useCallback, useTransition} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {updateCheckoutDeliveryMethodAction} from '../../../_tools/update-checkout-delivery-method-action';
import type {ShippingMethodSchema} from './consts/shipping-method-schema';

export function useShippingMethodSubmit() {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    shippingMethodSubmit: useCallback(
      async ({deliveryMethodId}: ShippingMethodSchema) => {
        try {
          const {errors} =
            (await updateCheckoutDeliveryMethodAction(deliveryMethodId)) ?? {};

          if (errors?.length) {
            // TODO: display server error
            console.error(errors);
          } else {
            startTransition(() => {
              const BILLING_PATHNAME = formatPathname(
                ...APP_ROUTES.CHECKOUT.BILLING,
              );

              intlRouter.push(BILLING_PATHNAME);
              revalidatePath(BILLING_PATHNAME);
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
