import {useCallback, useTransition} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {useAddressSchema} from '../../../_hooks/use-address-schema';
import {updateCheckoutBillingAddressAction} from '../../../_tools/update-checkout-billing-address-action';

export function useBillingAddressSubmit() {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    billingAddressSubmit: useCallback(
      async ({
        streetAddress2,
        ...restBillingAddress
      }: Zod.infer<ReturnType<typeof useAddressSchema>>) => {
        try {
          const {errors} =
            (await updateCheckoutBillingAddressAction({
              ...(streetAddress2 && {streetAddress2}),
              ...restBillingAddress,
            })) ?? {};

          if (errors?.length) {
            // TODO: display server error
            console.error(errors);
          } else {
            startTransition(() => {
              intlRouter.push(formatPathname(...APP_ROUTES.CHECKOUT.PAYMENT));
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
