import {ROUTE} from '@/consts';
import {IntlLink} from '@/i18n/components/IntlLink';

import type {GetPoductListVariables} from '@/graphql/generated/documents';
import type {ReactNode} from 'react';

type Props = {
  readonly children: ReactNode;
  readonly disabled?: boolean;
  readonly query: Required<
    | Pick<GetPoductListVariables, 'first' | 'after'>
    | Pick<GetPoductListVariables, 'last' | 'before'>
  >;
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
      className="underline">
      {children}
    </IntlLink>
  );
}
