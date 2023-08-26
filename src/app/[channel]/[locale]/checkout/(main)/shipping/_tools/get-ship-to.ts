import {capitalize} from '@/lib/tools/capitalize';

import type {getCheckout} from '../../_tools/get-checkout';

export function getShipTo({
  streetAddress1 = '',
  city = '',
  countryArea = '',
  postalCode = '',
  country,
}: Awaited<ReturnType<typeof getCheckout>>['shippingAddress'] = {}) {
  return [
    streetAddress1,
    [capitalize(city), countryArea, postalCode].filter(Boolean).join(' '),
    country ?? '',
  ]
    .filter(Boolean)
    .join(', ');
}
