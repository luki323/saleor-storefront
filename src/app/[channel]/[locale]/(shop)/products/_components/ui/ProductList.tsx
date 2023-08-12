import type {ProductListItem} from '@/graphql/generated/documents';
import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {ProductCard} from './ProductCard';

interface Props {
  readonly products: readonly ProductListItem[];
}

export function ProductList({products}: Props) {
  return (
    <ul className={cn('grid gap-4 md:grid-cols-2 lg:grid-cols-3')}>
      {products.map((product) => (
        <li key={product.id}>
          <IntlLink href={formatPathname(APP_ROUTES.PRODUCTS, product.slug)}>
            <ProductCard product={product} />
          </IntlLink>
        </li>
      ))}
    </ul>
  );
}
