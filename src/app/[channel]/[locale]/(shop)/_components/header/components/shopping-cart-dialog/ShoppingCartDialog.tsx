import {Suspense} from 'react';

import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {CartDialog} from './components/cart-dialog';
import {EmptyCartDialog} from './components/EmptyCartDialog';
import {ShoppingCartButton} from './components/ShoppingCartButton';

export function ShoppingCartDialog() {
  const checkoutId = getCheckoutId();

  if (checkoutId) {
    return (
      <Suspense fallback={<ShoppingCartButton disabled />}>
        <CartDialog id={checkoutId} />
      </Suspense>
    );
  }
  return <EmptyCartDialog />;
}
