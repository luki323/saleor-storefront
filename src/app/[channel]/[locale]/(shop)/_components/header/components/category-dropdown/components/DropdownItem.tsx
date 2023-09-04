import type {FragmentType} from '@/graphql/generated';
import {graphql} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {DropdownMenuItem} from '@/lib/components/ui/DropdownMenu';
import {cn} from '@/lib/tools/cn';

import {useSelectCategory} from '../use-select-category';

const DropdownItem_MenuItemFragment = graphql(`
  fragment DropdownItem_MenuItemFragment on MenuItem {
    name
    category {
      slug
    }
    translation(languageCode: $languageCode) {
      name
    }
  }
`);

interface Props {
  readonly item: FragmentType<typeof DropdownItem_MenuItemFragment>;
}

export function DropdownItem(props: Props) {
  const {name, category} = applyTranslation(
    getFragment(DropdownItem_MenuItemFragment, props.item),
  );
  const selectCategory = useSelectCategory();

  return (
    category && (
      <DropdownMenuItem
        onSelect={() => selectCategory(category.slug)}
        className={cn('flex-1')}>
        {name}
      </DropdownMenuItem>
    )
  );
}
