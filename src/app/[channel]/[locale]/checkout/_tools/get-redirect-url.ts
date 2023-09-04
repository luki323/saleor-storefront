import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

type Checkout = Partial<{
  readonly shippingAddress: unknown;
  readonly deliveryMethod: unknown;
  readonly billingAddress: unknown;
}>;

export function getRedirectUrl(
  {shippingAddress, deliveryMethod, billingAddress}: Checkout,
  pathname: string,
) {
  const requirementRecords = {
    [formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)]: {},
    [formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING)]: {
      shippingAddress,
    },
    [formatPathname(...APP_ROUTES.CHECKOUT.BILLING)]: {
      shippingAddress,
      deliveryMethod,
    },
    [formatPathname(...APP_ROUTES.CHECKOUT.PAYMENT)]: {
      shippingAddress,
      deliveryMethod,
      billingAddress,
    },
  };

  const [requirementName] =
    Object.entries(requirementRecords[pathname] ?? {}).find(
      (requirementEntry) => !requirementEntry[1],
    ) ?? [];

  if (!requirementName) {
    return null;
  }
  return (
    Object.entries(requirementRecords).findLast(
      ([, requirementRecord]) =>
        !Object.hasOwn(requirementRecord, requirementName),
    )?.[0] ?? null
  );
}
