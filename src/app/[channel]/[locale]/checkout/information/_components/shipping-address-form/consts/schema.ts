import * as zod from 'zod';

import {FIELDS} from './fields';

export type ShippingAddressSchema = zod.infer<typeof shippingAddressSchema>;

export const shippingAddressSchema = zod.object({
  [FIELDS.USE_SHIPPING_AS_BILLING_ADDRESS]: zod.boolean().optional(),
});
