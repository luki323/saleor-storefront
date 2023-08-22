import type {getCheckoutSummary} from '@/modules/checkout/tools/get-checkout-summary';

export type CheckoutSummary = NonNullable<
  Awaited<ReturnType<typeof getCheckoutSummary>>
>;
