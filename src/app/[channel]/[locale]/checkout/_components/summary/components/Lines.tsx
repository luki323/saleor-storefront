import Image from 'next/image';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import type {CheckoutSummary} from './types';

interface LinesProps {
  readonly displayGrossPrices: boolean;
  readonly lines: CheckoutSummary['lines'];
}

export function Lines({displayGrossPrices, lines}: LinesProps) {
  return (
    <ul className={cn('flex flex-col gap-4')}>
      {lines.map(
        ({
          id,
          quantity,
          totalPrice,
          variant: {
            product: {name, translation, media},
          },
        }) => {
          const {url, alt} = media?.at(0) ?? {};

          return (
            <li key={id} className={cn('flex items-center justify-between')}>
              <div className={cn('flex items-center gap-2')}>
                <div className={cn('relative')}>
                  <div className={cn('absolute -right-2 -top-2')}>
                    <Quantity value={quantity} />
                  </div>
                  {url && (
                    <Image
                      src={url}
                      alt={alt ?? ''}
                      className={cn('rounded-lg border border-faded-black')}
                      height={64}
                      width={64}
                    />
                  )}
                </div>
                <p className={cn('text-sm font-semibold text-white')}>
                  {translation?.name ?? name}
                </p>
              </div>
              <Price>
                {displayGrossPrices
                  ? totalPrice['gross'].amount
                  : totalPrice['net'].amount}
              </Price>
            </li>
          );
        },
      )}
    </ul>
  );
}

interface QuantityProps {
  readonly value: number;
}

function Quantity({value}: QuantityProps) {
  return (
    <div
      className={cn(
        'flex h-5 w-5 items-center justify-center rounded-full bg-[#686868]',
      )}>
      <p className={cn('text-xs text-white')}>{value}</p>
    </div>
  );
}

function Price({children}: PropsWithChildren) {
  // $ is mock value
  return <p className={cn('text-sm text-white')}>${children}</p>;
}
