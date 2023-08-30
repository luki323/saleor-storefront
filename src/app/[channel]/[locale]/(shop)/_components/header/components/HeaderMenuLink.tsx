import type {HeaderMenuLinkFragment} from '@/graphql/generated/documents';
import {IntlLink} from '@/i18n/components/IntlLink';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import type {RequiredNonNullable} from '@/lib/types/utils';

interface Props {
  readonly item: HeaderMenuLinkFragment &
    RequiredNonNullable<Pick<HeaderMenuLinkFragment, 'page'>>;
}

export function HeaderMenuLink({item: {name, page}}: Props) {
  return (
    <IntlLink
      href={formatPathname(page.slug)}
      className={cn('underline-offset-4 hover:underline')}>
      {name}
    </IntlLink>
  );
}
