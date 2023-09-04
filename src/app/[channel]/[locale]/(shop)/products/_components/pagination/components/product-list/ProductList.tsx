import type {FragmentType} from '@/graphql/generated';
import {graphql} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {ProductCard} from './ProductCard';

const ProductList_ProductCountableConnectionFragment = graphql(`
  fragment ProductList_ProductCountableConnectionFragment on ProductCountableConnection {
    edges {
      node {
        id
        slug
        ...ProductCard_ProductFragment
      }
    }
  }
`);

interface Props {
  readonly products: FragmentType<
    typeof ProductList_ProductCountableConnectionFragment
  >;
}

export function ProductList(props: Props) {
  const products = getFragment(
    ProductList_ProductCountableConnectionFragment,
    props.products,
  );

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
