import type {ProductListItem} from '@/graphql/generated/documents';

type Props = Pick<ProductListItem, 'name' | 'slug'>;

export function ProductCard({name}: Props) {
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
}
