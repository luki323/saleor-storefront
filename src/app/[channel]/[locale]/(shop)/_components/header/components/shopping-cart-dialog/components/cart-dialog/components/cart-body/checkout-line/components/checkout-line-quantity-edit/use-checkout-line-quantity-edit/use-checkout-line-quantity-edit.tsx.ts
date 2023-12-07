import {
  experimental_useOptimistic as useOptimistic,
  useCallback,
  useMemo,
} from 'react';

import {useStable} from '@/lib/hooks/use-stable';

import {checkoutLineQuantityEditAction} from './checkout-line-quantity-edit-action';

export function useCheckoutLineQuantityEdit(lineId: string, value: number) {
  const stableValue = useStable(value);
  const [optimisticQuantity, setOptimisticQuantity] =
    useOptimistic(stableValue);

  const updateQuantity = useCallback(
    async (quantity: number) => {
      setOptimisticQuantity(quantity);

      try {
        await checkoutLineQuantityEditAction({
          lineId,
          quantity,
        });
      } catch (error) {
        // TODO: display server error
        console.error(error);
      }
    },
    [lineId, setOptimisticQuantity],
  );

  return {
    optimisticQuantity,
    ...useMemo(
      () => ({
        increaseQuantity: () => updateQuantity(optimisticQuantity + 1),
        decreaseQuantity: () => updateQuantity(optimisticQuantity - 1),
      }),
      [optimisticQuantity, updateQuantity],
    ),
  };
}
