import type {FragmentType} from '@/graphql/generated';
import {graphql} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {FormattedPrice} from '@/i18n/components/FormattedPrice';
import {cn} from '@/lib/tools/cn';

import {Badge} from './Bage';

const PriceBadge_VariantPricingInfoFragment = graphql(`
  fragment PriceBadge_VariantPricingInfoFragment on VariantPricingInfo {
    onSale
    price {
      gross {
        currency
        amount
      }
    }
    priceUndiscounted {
      gross {
        currency
        amount
      }
    }
  }
`);

interface Props {
  readonly pricing: FragmentType<typeof PriceBadge_VariantPricingInfoFragment>;
}

export function PriceBadge(props: Props) {
  const {onSale, price, priceUndiscounted} = getFragment(
    PriceBadge_VariantPricingInfoFragment,
    props.pricing,
  );

  return (
    <Badge variant="outline">
      {onSale ? (
        <>
          {priceUndiscounted && (
            <span className={cn('pr-2 text-grey line-through')}>
              <FormattedPrice
                value={priceUndiscounted.gross.amount}
                currency={priceUndiscounted.gross.currency}
              />
            </span>
          )}
          {price && (
            <span className={cn('text-destructive')}>
              <FormattedPrice
                value={price.gross.amount}
                currency={price.gross.currency}
              />
            </span>
          )}
        </>
      ) : (
        price && (
          <FormattedPrice
            value={price.gross.amount}
            currency={price.gross.currency}
          />
        )
      )}
    </Badge>
  );
}
