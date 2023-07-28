import {IntlProvider} from '@/i18n/components/IntlProvider';

import type {ReactNode} from 'react';

type Props = {
  readonly children: ReactNode;
  readonly params: {
    readonly locale: string;
  };
};

export default function HomeLayout({children, params: {locale}}: Props) {
  return <IntlProvider locale={locale}>{children}</IntlProvider>;
}
