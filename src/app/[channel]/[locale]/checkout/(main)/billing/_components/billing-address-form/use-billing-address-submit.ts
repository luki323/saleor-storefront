import {useCallback, useTransition} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {useAddressSchema} from '../../../_hooks/use-address-schema';
import {updateCheckoutBillingAddress} from '../../../_tools/update-checkout-billing-address';

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
            (await updateCheckoutBillingAddress({
              ...(streetAddress2 && {streetAddress2}),
              ...restBillingAddress,
            })) ?? {};

          if (errors?.length) {
            // TODO: display server error
            console.error(errors);
          } else {
            startTransition(() => {
              intlRouter.push(formatPathname(...APP_ROUTES.CHECKOUT.BILLING));
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
