import * as zod from 'zod';

import {FIELDS} from './fields';

export const shippingMethodSchema = zod.object({
  [FIELDS.DELIVERY_METHOD_ID]: zod.string(),
});
