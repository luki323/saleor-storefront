import type {VariantProps} from 'cva';
import {cva} from 'cva';
import invariant from 'tiny-invariant';

import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';
import type {CheckoutSummary} from '@/modules/checkout/tools/get-checkout-summary';

import {Money} from '../../../Money';
import {Text} from './Text';

type TotalProps = Partial<
  Pick<
    CheckoutSummary,
    'displayGrossPrices' | 'subtotalPrice' | 'shippingPrice' | 'totalPrice'
  >
>;

export async function Total({
  displayGrossPrices,
  subtotalPrice,
  shippingPrice,
  totalPrice,
}: TotalProps) {
  const intl = await getIntl(getLocale());

  invariant(subtotalPrice);
  invariant(shippingPrice);
  invariant(totalPrice);

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
        <Cell justifyEnd>
          <Money
            value={
              displayGrossPrices
                ? subtotalPrice.gross.amount
                : subtotalPrice.net.amount
            }
            currency={subtotalPrice.currency}
            bold
          />
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
        <Cell justifyEnd>
          <Money
            value={
              displayGrossPrices
                ? shippingPrice.gross.amount
                : shippingPrice.net.amount
            }
            currency={shippingPrice.currency}
          />
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
        <Cell justifyEnd>
          <abbr className={cn('mr-2 text-xs text-grey-light')}>
            {totalPrice.currency}
          </abbr>
          <Money
            value={
              displayGrossPrices
                ? totalPrice.gross.amount
                : totalPrice.net.amount
            }
            currency={totalPrice.currency}
            large
            bold
          />
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

type CellProps = VariantProps<typeof cellStyles>;

const cellStyles = cva('flex-1 flex items-center', {
  variants: {
    justifyEnd: {
      true: 'justify-end',
    },
  },
});

function Cell({children, justifyEnd}: PropsWithChildren<CellProps>) {
  return (
    <div role="cell" className={cn(cellStyles({justifyEnd}))}>
      {children}
    </div>
  );
}
