import type {LinkProps} from 'next/link';
import type {ReactNode} from 'react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {buttonStyles} from '@/lib/components/ui/Button';
import {cn} from '@/lib/tools/cn';

interface Props extends Pick<LinkProps, 'href'> {
  readonly children: ReactNode;
}

export function NavigationLink({href, children}: Props) {
  return (
    <IntlLink
      href={href}
      className={cn(
        buttonStyles({variant: 'ghost'}),
        'absolute right-4 top-4 md:right-8 md:top-8',
      )}>
      {children}
    </IntlLink>
  );
}
