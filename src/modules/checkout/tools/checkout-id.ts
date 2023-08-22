import 'server-only';

import {cookies} from 'next/headers';

const CHECKOUT_ID_COOKIE_NAME = '__Host-checkoutId';

export function setCheckoutId(value: string) {
  cookies().set(CHECKOUT_ID_COOKIE_NAME, value, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
  });
}

export function getCheckoutid() {
  return cookies().get(CHECKOUT_ID_COOKIE_NAME)?.value;
}
