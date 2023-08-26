import {redirect} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {Breadcrumbs} from '../_components/Breadcrumbs';
import {Wrapper} from '../_components/Wrapper';
import {getCheckout} from '../_tools/get-checkout';
import {getRedirectUrl} from '../_tools/get-redirect-url';
import {ShippingMethod} from './_components/shipping-method';
import {ShippingReview} from './_components/ShippingReview';
import {getShipTo} from './_tools/get-ship-to';

const SHIPPING_PATHNAME = formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING);

export default async function ShippingPage() {
  const id = getCheckoutId() ?? redirect(formatPathname(APP_ROUTES.ROOT));

  const checkout = await getCheckout({id});

  const redirectUrl = getRedirectUrl(checkout, SHIPPING_PATHNAME);

  if (redirectUrl) {
    redirect(redirectUrl);
  }

  const {shippingMethod, shippingMethods} = checkout;

  return (
    <Wrapper>
      <Breadcrumbs activePathname={SHIPPING_PATHNAME} checkout={checkout} />
      <ShippingReview
        contact={checkout.email}
        shipTo={getShipTo(checkout.shippingAddress)}
      />
      <ShippingMethod
        shippingMethod={shippingMethod}
        shippingMethods={shippingMethods}
      />
    </Wrapper>
  );
}
