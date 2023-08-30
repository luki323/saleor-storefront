import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {getProducts} from '../../tools/get-products/get-products';
import {ProductCard} from './ProductCard';

interface Props {
  readonly products: Awaited<ReturnType<typeof getProducts>>['products'];
}

export function ProductList({products}: Props) {
  return (
    <ul className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3')}>
      {products.edges.map(({node}) => (
        <li key={node.id} className={cn('animate-fadeIn')}>
          <IntlLink href={formatPathname(APP_ROUTES.PRODUCTS, node.slug)}>
            <ProductCard product={node} />
          </IntlLink>
        </li>
      ))}
    </ul>
  );
}
