'use client';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {DropdownMenuCheckBoxItem} from '@/lib/components/ui/DropdownMenu';
import {hasSearchParam} from '@/lib/tools/has-search-param';
import {isDefined} from '@/lib/tools/is-defined';

import {useToggleAttribute} from './use-toggle-attribute';

const AttributeCheckbox_AttributeValueFragment = graphql(`
  fragment AttributeCheckbox_AttributeFragment on AttributeValue {
    name
    translation(languageCode: $languageCode) {
      name
    }
    slug
  }
`);

interface Props {
  readonly searchParamName: string;
  readonly attributeValue: FragmentType<
    typeof AttributeCheckbox_AttributeValueFragment
  >;
}

export function AttributeCheckbox({searchParamName, attributeValue}: Props) {
  const {name, slug} = applyTranslation(
    getFragment(AttributeCheckbox_AttributeValueFragment, attributeValue),
  );
  const toggleAttribute = useToggleAttribute(searchParamName);

  return (
    isDefined(name) &&
    isDefined(slug) && (
      <DropdownMenuCheckBoxItem
        checked={hasSearchParam(window.location.search, searchParamName, slug)}
        onSelect={() => toggleAttribute(slug)}>
        {name}
      </DropdownMenuCheckBoxItem>
    )
  );
}
