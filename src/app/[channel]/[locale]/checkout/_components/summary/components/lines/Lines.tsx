import Image from 'next/image';

import type {FragmentType} from '@/graphql/generated/fragment-masking';
import {getFragment} from '@/graphql/generated/fragment-masking';
import {graphql} from '@/graphql/generated/gql';
import {cn} from '@/lib/tools/cn';

import {Money} from '../../../Money';
import {Quantity} from './Quantity';

const Lines_CheckoutFragment = graphql(/* GraphQL */ `
  fragment Lines_CheckoutFragment on Checkout {
    lines {
      totalPrice {
        currency
        net {
          amount
        }
        gross {
          amount
        }
      }
      variant {
        product {
          name
          translation(languageCode: $languageCode) {
            name
          }
          media {
            url
            alt
          }
        }
      }
      quantity
      id
    }
    displayGrossPrices
  }
`);

interface Props {
  readonly checkout: FragmentType<typeof Lines_CheckoutFragment>;
}

export function Lines({checkout}: Props) {
  const {lines, displayGrossPrices} = getFragment(
    Lines_CheckoutFragment,
    checkout,
  );

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
              <Money
                value={
                  displayGrossPrices
                    ? totalPrice.gross.amount
                    : totalPrice.net.amount
                }
                currency={totalPrice.currency}
              />
            </li>
          );
        },
      )}
    </ul>
  );
}
