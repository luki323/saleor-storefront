import type {ProductListItem} from '@/graphql/generated/documents';

import {ProductCard} from './ProductCard';

interface Props {
  readonly products: readonly ProductListItem[];
}

export function ProductList({products}: Props) {
  return (
    <ul>
      {products.map(({name, slug, id}) => (
        <li key={id}>
          <ProductCard name={name} slug={slug} />
        </li>
      ))}
    </ul>
  );
}
