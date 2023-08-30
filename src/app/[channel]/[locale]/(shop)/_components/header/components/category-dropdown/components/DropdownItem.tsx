import type {HeaderDropdownMenuFragment} from '@/graphql/generated/documents';
import {DropdownMenuItem} from '@/lib/components/ui/DropdownMenu';
import {cn} from '@/lib/tools/cn';
import type {RequiredNonNullable} from '@/lib/types/utils';

import {useSelectCategory} from '../use-select-category';

interface Props {
  readonly item: HeaderDropdownMenuFragment &
    RequiredNonNullable<Pick<HeaderDropdownMenuFragment, 'category'>>;
}

export function DropdownItem({item: {name, category}}: Props) {
  const selectCategory = useSelectCategory();

  return (
    <DropdownMenuItem
      onSelect={() => selectCategory(category.slug)}
      className={cn('flex-1')}>
      {name}
    </DropdownMenuItem>
  );
}
