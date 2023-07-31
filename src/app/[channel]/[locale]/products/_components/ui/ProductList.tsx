import {ProductCard} from './ProductCard';

import type {ProductListItem} from '@/graphql/generated/documents';

type Props = {
  readonly products: readonly ProductListItem[];
};

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
