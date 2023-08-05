import Image from 'next/image';

import type {ProductListItem} from '@/graphql/generated/documents';
import {cn} from '@/lib/tools/cn';
import {raise} from '@/lib/tools/raise';

interface Props {
  readonly product: ProductListItem;
}

export function ProductCard({product: {defaultVariant}}: Props) {
  const {media} = defaultVariant ?? raise('Default variant shuld be defined');

  const {alt, url} =
    media?.at(0) ?? raise('Media should have at least one item');

  return (
    <div className={cn('rounded-lg border border-input bg-white shadow-sm')}>
      <Image alt={alt} src={url} width={400} height={400} />
    </div>
  );
}
