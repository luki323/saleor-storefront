import {useCallback, useTransition} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {ADDRESS_FIELDS_NAMES} from '../../../_consts';
import type {AddressFieldsSchema} from '../../../_hooks/use-address-fields-schema';
import {updateCheckoutBillingAddressAction} from '../../../_tools/update-checkout-billing-address-action';

export function useBillingAddressSubmit(
  form: UseFormReturn<AddressFieldsSchema>,
) {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    billingAddressSubmit: useCallback(
      async ({streetAddress2, ...restBillingAddress}: AddressFieldsSchema) => {
        try {
          const {errors} =
            (ADDRESS_FIELDS_NAMES.some(
              (addressFieldName) =>
                form.getFieldState(addressFieldName).isDirty,
            )
              ? await updateCheckoutBillingAddressAction({
                  ...(streetAddress2 && {streetAddress2}),
                  ...restBillingAddress,
                })
              : null) ?? {};

          if (errors?.length) {
            // TODO: display server error
            console.error(errors);
          } else {
            startTransition(() => {
              intlRouter.push(formatPathname(...APP_ROUTES.CHECKOUT.PAYMENT));
              intlRouter.refresh();
            });
          }
        } catch (error) {
          // TODO: display server error
          console.error(error);
        }
      },
      [form, intlRouter],
    ),
  };
}
