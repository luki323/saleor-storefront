import {redirect} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {Breadcrumbs} from '../_components/breadcrumbs';
import {getCheckout} from '../_tools/get-checkout';
import {getRedirectUrl} from '../_tools/get-redirect-url';
import {ShippingMethodSection} from './_components/shipping-method-section';
import {ShippingReviewTable} from './_components/shipping-review-table';
import {getShipTo} from './_tools/get-ship-to';

export default async function ShippingPage() {
  const id = getCheckoutId() ?? redirect(formatPathname(APP_ROUTES.ROOT));

  const checkout = await getCheckout({id});

  const redirectUrl = getRedirectUrl(
    checkout,
    formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING),
  );

  if (redirectUrl) {
    redirect(redirectUrl);
  }
  const {shippingMethod, shippingMethods} = checkout;

  return (
    <div className={cn('space-y-7')}>
      <Breadcrumbs checkout={checkout} />
      <ShippingReviewTable
        contact={checkout.email ?? raise('Contact is not defined.')}
        shipTo={getShipTo(checkout.shippingAddress)}
      />
      <ShippingMethodSection
        shippingMethod={shippingMethod}
        shippingMethods={shippingMethods}
      />
    </div>
  );
}
