import {useRouter} from 'next/navigation';
import {
  // experimental_useOptimistic as useOptimistic,
  useCallback,
  useMemo,
  useState,
} from 'react';

// import {useStable} from '@/lib/hooks/use-stable';
import {checkoutLineQuantityEditAction} from './checkout-line-quantity-edit-action';

// export function useCheckoutLineQuantityEdit(lineId: string, value: number) {
//   const stableValue = useStable(value);

//   const [optimisticQuantity, setOptimisticQuantity] =
//     useOptimistic(stableValue);

//   const updateQuantity = useCallback(
//     async (quantity: number) => {
//       setOptimisticQuantity(quantity);

//       try {
//         await checkoutLineQuantityEditAction({
//           lineId,
//           quantity,
//         });
//       } catch (error) {
//         // TODO: display server error
//         console.error(error);
//       }
//     },
//     [lineId, setOptimisticQuantity],
//   );

//   return {
//     optimisticQuantity,
//     ...useMemo(
//       () => ({
//         increaseQuantity: () => updateQuantity(optimisticQuantity + 1),
//         decreaseQuantity: () => updateQuantity(optimisticQuantity - 1),
//       }),
//       [optimisticQuantity, updateQuantity],
//     ),
//   };
// }

// TOOD: Replace this with optimistic updates
export function useCheckoutLineQuantityEdit(lineId: string, value: number) {
  const [quantity, setQuantity] = useState(value);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const updateQuantity = useCallback(
    async (quantity: number) => {
      setIsPending(true);

      try {
        await checkoutLineQuantityEditAction({
          lineId,
          quantity,
        });
        setQuantity(quantity);
        router.refresh();
      } catch (error) {
        // TODO: display server error
        console.error(error);
      }
      setIsPending(false);
    },
    [router, lineId],
  );

  return {
    optimisticQuantity: quantity,
    ...useMemo(
      () => ({
        increaseQuantity: () => updateQuantity(quantity + 1),
        decreaseQuantity: () => updateQuantity(quantity - 1),
      }),
      [quantity, updateQuantity],
    ),
    isPending,
  };
}
