import {ChevronDownIcon} from 'lucide-react';
import invariant from 'tiny-invariant';

import type {ProductAttributeFragment} from '@/graphql/generated/documents';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/lib/components/ui/DropdownMenu';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {AttributeCheckbox} from './AttributeCheckbox';

interface Props {
  readonly attribute: ProductAttributeFragment;
}

export function ProductAttributesDropdown({
  attribute: {name, slug, choices},
}: Props) {
  invariant(isDefined(slug));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('flex items-center gap-1')}>
        {name}
        <ChevronDownIcon className={cn('h-4 w-4 text-grey')} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {choices?.edges.map(({node: {id, name, slug: nodeSlug}}, i) => {
          invariant(isDefined(name) && isDefined(nodeSlug));

          return (
            <>
              {Boolean(i) && <DropdownMenuSeparator />}
              <AttributeCheckbox
                serachParamName={slug}
                key={id}
                attributeValue={{name, slug: nodeSlug}}>
                {name}
              </AttributeCheckbox>
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
