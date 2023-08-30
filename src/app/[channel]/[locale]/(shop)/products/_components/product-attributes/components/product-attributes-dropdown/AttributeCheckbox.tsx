'use client';

import type {ProductAttributeValueFragment} from '@/graphql/generated/documents';
import {DropdownMenuCheckBoxItem} from '@/lib/components/ui/DropdownMenu';
import {hasSearchParam} from '@/lib/tools/has-search-param';
import type {PropsWithChildren} from '@/lib/types/react';
import type {RequiredNonNullable} from '@/lib/types/utils';

import {useToggleAttribute} from './use-toggle-attribute';

interface Props {
  readonly serachParamName: string;
  readonly attributeValue: RequiredNonNullable<ProductAttributeValueFragment>;
}

export function AttributeCheckbox({
  serachParamName,
  attributeValue: {name, slug},
}: PropsWithChildren<Props>) {
  const toggleAttribute = useToggleAttribute(serachParamName);

  return (
    <DropdownMenuCheckBoxItem
      checked={hasSearchParam(window.location.search, serachParamName, slug)}
      onSelect={() => toggleAttribute(slug)}>
      {name}
    </DropdownMenuCheckBoxItem>
  );
}
