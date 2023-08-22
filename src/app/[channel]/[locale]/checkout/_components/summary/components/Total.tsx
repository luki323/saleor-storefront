import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import type {CheckoutSummary} from './types';

interface TotalProps
  extends Partial<
    Pick<
      CheckoutSummary,
      'displayGrossPrices' | 'subtotalPrice' | 'shippingPrice' | 'totalPrice'
    >
  > {}

export async function Total({
  displayGrossPrices,
  subtotalPrice,
  shippingPrice,
  totalPrice,
}: TotalProps) {
  const intl = await getIntl(getLocale());

  return (
    <div role="table" className={cn('mt-6 flex flex-col gap-2')}>
      <Row>
        <Cell>
          <Text>
            {intl.formatMessage({
              defaultMessage: 'Subtotal',
              id: 'L8seEc',
            })}
          </Text>
        </Cell>
        <Cell>
          <Price>
            {displayGrossPrices
              ? subtotalPrice?.gross.amount
              : subtotalPrice?.net.amount}
          </Price>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Text>
            {intl.formatMessage({
              defaultMessage: 'Shipping',
              id: 'PRlD0A',
            })}
          </Text>
        </Cell>
        <Cell>
          <Price>
            {displayGrossPrices
              ? shippingPrice?.gross.amount
              : shippingPrice?.net.amount}
          </Price>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Text large>
            {intl.formatMessage({
              defaultMessage: 'Total',
              id: 'MJ2jZQ',
            })}
          </Text>
        </Cell>
        <Cell>
          <Price large>
            {displayGrossPrices
              ? totalPrice?.gross.amount
              : totalPrice?.net.amount}
          </Price>
        </Cell>
      </Row>
    </div>
  );
}

function Row({children}: PropsWithChildren) {
  return (
    <div role="row" className={cn('flex')}>
      {children}
    </div>
  );
}

function Cell({children}: PropsWithChildren) {
  return (
    <div role="cell" className={cn('flex-1')}>
      {children}
    </div>
  );
}

interface TextProps {
  readonly large?: boolean;
}

function Text({children, large}: PropsWithChildren<TextProps>) {
  return (
    <p className={cn('text-sm text-white', large && 'text-base font-semibold')}>
      {children}
    </p>
  );
}

interface PriceProps {
  readonly large?: boolean;
}

function Price({children, large}: PropsWithChildren<PriceProps>) {
  return (
    <p
      className={cn(
        'ml-auto w-fit text-sm font-semibold text-white',
        large && 'text-base font-bold',
      )}>
      {/* $ is mock value */}${children}
    </p>
  );
}
