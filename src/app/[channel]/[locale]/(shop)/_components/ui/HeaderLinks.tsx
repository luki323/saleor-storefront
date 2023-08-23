import {IntlLink} from '@/i18n/components/IntlLink';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {fetchHeaderMenu} from '../../_tools/fetch-header-menu';

interface Props {
  readonly menu: Awaited<ReturnType<typeof fetchHeaderMenu>>;
}

export function HeaderLinks({menu}: Props) {
  return (
    <ul className={cn('flex gap-5 text-sm')}>
      {menu.map(({name, slug}) => (
        <li key={slug}>
          <IntlLink
            href={formatPathname(APP_ROUTES.PRODUCTS, slug)}
            className={cn('text-grey hover:text-inherit hover:underline')}>
            {name}
          </IntlLink>
        </li>
      ))}
    </ul>
  );
}
