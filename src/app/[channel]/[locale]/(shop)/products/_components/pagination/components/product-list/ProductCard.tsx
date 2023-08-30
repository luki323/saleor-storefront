import Image from 'next/image';
import invariant from 'tiny-invariant';

import type {ProductCard as ProductCardType} from '@/graphql/generated/documents';
import {FormattedMessage} from '@/i18n/react-intl';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {Badge} from './Bage';
import {PriceBadge} from './PriceBadge';

interface Props {
  readonly product: ProductCardType;
}

export function ProductCard({
  product: {name, thumbnail, defaultVariant, isAvailable},
}: Props) {
  invariant(thumbnail);

  const {pricing} = defaultVariant ?? {};
  invariant(pricing);

  const {alt, url} = thumbnail;
  invariant(isDefined(alt) && isDefined(url));

  const {price, priceUndiscounted, onSale} = pricing;
  invariant(price && priceUndiscounted && isDefined(onSale));

  return (
    <div
      className={cn(
        'relative aspect-square rounded-lg border border-input bg-white hover:border-blue-600',
      )}>
      <Image
        alt={alt}
        src={url}
        width={400}
        height={400}
        className={cn(
          'h-full transition duration-300 hover:scale-105 max-sm:w-full',
        )}
      />
      <h4 className={cn('absolute left-2 top-3 w-1/2')}>
        <Badge>{name}</Badge>
      </h4>
      <span
        className={cn('absolute right-2 top-3 flex flex-col items-end gap-1')}>
        {!isAvailable && (
          <Badge variant="outline">
            <FormattedMessage defaultMessage="Not available" id="cPhKTw" />
          </Badge>
        )}
      </span>
      <span className={cn('absolute bottom-3 left-2')}>
        <PriceBadge
          onSale={onSale}
          price={price}
          priceUndiscounted={priceUndiscounted}
        />
      </span>
    </div>
  );
}
