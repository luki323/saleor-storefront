import {IntlLink} from '@/i18n/components/IntlLink';
import {Text} from '@/lib/components/ui/Text';
import {ROUTE} from '@/lib/consts/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {fetchHeaderMenu} from '../../_tools/fetch-header-menu';

interface Props {
  readonly menu: Awaited<ReturnType<typeof fetchHeaderMenu>>;
}

export function HeaderMenu({menu}: Props) {
  return (
    <ul className={cn('flex gap-4')}>
      {menu.map(({name, slug}) => (
        <li key={slug}>
          <IntlLink
            href={formatPathname([ROUTE.PRODUCTS, slug])}
            className={cn('hover:underline')}>
            <Text as="span">{name}</Text>
          </IntlLink>
        </li>
      ))}
    </ul>
  );
}
