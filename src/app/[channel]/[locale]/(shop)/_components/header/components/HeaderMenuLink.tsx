import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {IntlLink} from '@/i18n/components/IntlLink';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

const HeaderMenuLink_MenuItemFragment = graphql(`
  fragment HeaderMenuLink_MenuItemFragment on MenuItem {
    name
    page {
      slug
    }
    translation(languageCode: $languageCode) {
      name
    }
  }
`);

interface Props {
  readonly item: FragmentType<typeof HeaderMenuLink_MenuItemFragment>;
}

export function HeaderMenuLink(props: Props) {
  const item = getFragment(HeaderMenuLink_MenuItemFragment, props.item);
  applyTranslation(item);

  return (
    item.page && (
      <IntlLink
        href={formatPathname(item.page.slug)}
        className={cn('underline-offset-4 hover:underline')}>
        {item.name}
      </IntlLink>
    )
  );
}
