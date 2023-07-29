import {ROUTE} from '@/consts';
import {IntlLink} from '@/i18n/components/IntlLink';
import {cn} from '@/tools/cn';

import {SEARCH_PARAMS} from '../_consts';

import type {ObjectValues} from '@/types';
import type {ReactNode} from 'react';

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
