import type {AttributeInput} from '@/graphql/generated/types';
import {isDefined} from '@/lib/tools/is-defined';
import {omit} from '@/lib/tools/omit';
import {toArray} from '@/lib/tools/to-array';

import type {
  PredefinedProductsPageSearchParams,
  ProductsPageSearchParams,
} from '../../../../types';

const predefinedKeys: readonly (keyof PredefinedProductsPageSearchParams)[] = [
  'first',
  'after',
  'last',
  'before',
  'category',
  'collection',
  'search',
];

export function parseAttributeSearchParams(
  props: ProductsPageSearchParams,
): readonly AttributeInput[] {
  return Object.entries(omit(props, ...predefinedKeys)).flatMap(
    ([key, value]) =>
      isDefined(value) ? {slug: key, values: toArray(value)} : [],
  );
}
