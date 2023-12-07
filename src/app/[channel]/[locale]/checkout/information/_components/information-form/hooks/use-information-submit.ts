import {useCallback, useTransition} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import type {AddressInput} from '@/graphql/generated/graphql';
import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {ADDRESS_FIELDS_NAMES} from '../../../../_consts';
import {updateCheckoutBillingAddressAction} from '../../../../_tools/update-checkout-billing-address-action';
import {updateCheckoutEmailAction} from '../../../_tools/update-checkout-email-action';
import {updateCheckoutShippingAddressAction} from '../../../_tools/update-checkout-shipping-address-action';
import type {InformationFieldsSchema} from './use-information-fields-schema';

export function useInformationSubmit(
  form: UseFormReturn<InformationFieldsSchema>,
) {
  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    shippingAddressSubmit: useCallback(
      async ({
        email,
        useShippingAsBillingAddress,
        streetAddress2,
        ...restAddressFields
      }: InformationFieldsSchema) => {
        const addressInput: AddressInput = {
          ...(streetAddress2 && {streetAddress2}),
          ...restAddressFields,
        };

        try {
          const [
            checkoutShippingAddress,
            checkoutBillingAddress,
            checkoutEmail,
          ] = await Promise.all([
            ADDRESS_FIELDS_NAMES.some(
              (addressFieldName) =>
                form.getFieldState(addressFieldName).isDirty,
            )
              ? updateCheckoutShippingAddressAction(addressInput)
              : null,
            useShippingAsBillingAddress
              ? updateCheckoutBillingAddressAction(addressInput)
              : null,
            form.getFieldState('email').isDirty
              ? updateCheckoutEmailAction(email)
              : null,
          ]);

          if (
            checkoutShippingAddress?.errors.length ||
            checkoutBillingAddress?.errors.length ||
            checkoutEmail?.errors.length
          ) {
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
      [form, intlRouter],
    ),
  };
}
