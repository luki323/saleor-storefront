import Link from 'next/link';
import type {ComponentProps} from 'react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {buttonStyles} from '@/lib/components/ui/Button';
import {cn} from '@/lib/tools/cn';

type Props = Pick<ComponentProps<typeof Link>, 'href' | 'children'>;

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
