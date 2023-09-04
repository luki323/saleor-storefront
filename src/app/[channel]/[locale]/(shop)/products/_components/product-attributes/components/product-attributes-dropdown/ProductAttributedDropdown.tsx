import {ChevronDownIcon} from 'lucide-react';
import {Fragment} from 'react';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/lib/components/ui/DropdownMenu';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {AttributeCheckbox} from './AttributeCheckbox';

const ProductAttributesDropdown_AttributeFragment = graphql(`
  fragment ProductAttributesDropdown_AttributeFragment on Attribute {
    name
    translation(languageCode: $languageCode) {
      name
    }
    slug
    choices(first: 20) {
      edges {
        node {
          id
          ...AttributeCheckbox_AttributeFragment
        }
      }
    }
  }
`);

interface Props {
  readonly attribute: FragmentType<
    typeof ProductAttributesDropdown_AttributeFragment
  >;
}

export function ProductAttributesDropdown(props: Props) {
  const {name, slug, choices} = applyTranslation(
    getFragment(ProductAttributesDropdown_AttributeFragment, props.attribute),
  );

  return (
    isDefined(name) &&
    isDefined(slug) && (
      <DropdownMenu>
        <DropdownMenuTrigger className={cn('flex items-center gap-1')}>
          {name}
          <ChevronDownIcon className={cn('h-4 w-4 text-grey')} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {choices?.edges.map(({node}, idx) => (
            <Fragment key={node.id}>
              {idx !== 0 && <DropdownMenuSeparator />}
              <AttributeCheckbox searchParamName={slug} attributeValue={node} />
            </Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
