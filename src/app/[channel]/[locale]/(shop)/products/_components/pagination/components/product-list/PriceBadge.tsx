import type {ProductCardPricing} from '@/graphql/generated/documents';
import {FormattedPrice} from '@/i18n/components/FormattedPrice';
import {cn} from '@/lib/tools/cn';
import type {RequiredNonNullable} from '@/lib/types/utils';

import {Badge} from './Bage';

export function PriceBadge({
  onSale,
  price,
  priceUndiscounted,
}: RequiredNonNullable<ProductCardPricing>) {
  return (
    <Badge variant="outline">
      {onSale ? (
        <>
          <span className={cn('pr-2 text-grey line-through')}>
            <FormattedPrice
              value={priceUndiscounted.gross.amount}
              currency={priceUndiscounted.gross.currency}
            />
          </span>
          <span className={cn('text-destructive')}>
            <FormattedPrice
              value={price.gross.amount}
              currency={price.gross.currency}
            />
          </span>
        </>
      ) : (
        <FormattedPrice
          value={price.gross.amount}
          currency={price.gross.currency}
        />
      )}
    </Badge>
  );
}
