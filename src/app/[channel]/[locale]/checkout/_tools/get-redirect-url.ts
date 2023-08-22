import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {getCheckout} from './get-checkout';

type Checkout = Awaited<ReturnType<typeof getCheckout>>;

export function getRedirectUrl(
  {shippingAddress, billingAddress}: Checkout,
  pathname: string,
) {
  if (!shippingAddress) {
    const shippingPathname = formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION);

    return pathname === shippingPathname ? null : shippingPathname;
  } else if (!billingAddress) {
    const billingPathname = formatPathname(...APP_ROUTES.CHECKOUT.BILLING);

    return pathname === billingPathname ? null : billingPathname;
  }
  return null;
}
