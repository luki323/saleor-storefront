import Image from 'next/image';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {FormattedMessage} from '@/i18n/react-intl';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {Badge} from './Bage';
import {PriceBadge} from './PriceBadge';

const ProductCard_ProductFragment = graphql(`
  fragment ProductCard_ProductFragment on Product {
    name
    translation(languageCode: $languageCode) {
      name
    }
    defaultVariant {
      pricing(address: $address) {
        ...PriceBadge_VariantPricingInfoFragment
      }
    }
    isAvailable
    thumbnail(size: 4096) {
      url
      alt
    }
  }
`);

interface Props {
  readonly product: FragmentType<typeof ProductCard_ProductFragment>;
}

export function ProductCard(props: Props) {
  const {name, defaultVariant, isAvailable, thumbnail} = applyTranslation(
    getFragment(ProductCard_ProductFragment, props.product),
  );

  return (
    <div
      className={cn(
        'relative aspect-square rounded-lg border border-input bg-white hover:border-blue-600',
      )}>
      {thumbnail && isDefined(thumbnail.alt) && (
        <Image
          alt={thumbnail.alt}
          src={thumbnail.url}
          width={400}
          height={400}
          className={cn(
            'h-full transition duration-300 hover:scale-105 max-sm:w-full',
          )}
        />
      )}
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
      {defaultVariant && defaultVariant.pricing && (
        <span className={cn('absolute bottom-3 left-2')}>
          <PriceBadge pricing={defaultVariant.pricing} />
        </span>
      )}
    </div>
  );
}
