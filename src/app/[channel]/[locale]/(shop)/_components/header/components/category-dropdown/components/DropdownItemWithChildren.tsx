import {FormattedMessage} from 'react-intl';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/lib/components/ui/DropdownMenu';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import {DropdownItem} from './DropdownItem';

const DropdownItemWithChildren_MenuItemFragment = graphql(`
  fragment DropdownItemWithChildren_MenuItemFragment on MenuItem {
    name
    translation(languageCode: $languageCode) {
      name
    }
    ...DropdownItem_MenuItemFragment
  }
`);

interface Props {
  readonly item: FragmentType<typeof DropdownItemWithChildren_MenuItemFragment>;
}

export function DropdownItemWithChildren(props: PropsWithChildren<Props>) {
  const item = applyTranslation(
    getFragment(DropdownItemWithChildren_MenuItemFragment, props.item),
  );

  return (
    <div
      className={cn(
        'flex rounded-sm transition-colors hover:bg-accent hover:text-accent-foreground',
      )}>
      <DropdownItem item={item} />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <span className={cn('sr-only')}>
            <FormattedMessage
              defaultMessage="Subcategories of {category}"
              id="MOC4lx"
              values={{category: item.name}}
            />
          </span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>{props.children}</DropdownMenuSubContent>
      </DropdownMenuSub>
    </div>
  );
}
