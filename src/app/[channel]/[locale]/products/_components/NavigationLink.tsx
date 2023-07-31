import type {ReactNode} from 'react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {ROUTE} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import type {ObjectValues} from '@/lib/types';

import {SEARCH_PARAMS} from '../_consts';

type Props = {
  readonly children: ReactNode;
  readonly disabled?: boolean;
  readonly query: Record<ObjectValues<typeof SEARCH_PARAMS>, number | null>;
};

export function NavigationLink({children, disabled = false, query}: Props) {
  if (disabled) {
    return <a>{children}</a>;
  }
  return (
    <IntlLink
      href={{
        pathname: ROUTE.PRODUCTS,
        query,
      }}
      className={cn('underline')}>
      {children}
    </IntlLink>
  );
}
