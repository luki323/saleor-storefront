import type {PropsWithChildren} from 'react';

import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {LinkedLogo} from './_components/LinkedLogo';
import {NavbarMenu} from './_components/navbar-menu';
import {SearchButton} from './_components/SearchButton';
import {ShoppingCartButton} from './_components/ShoppingCartButton';

export default function ShopLayout({children}: PropsWithChildren) {
  return (
    <div className={cn('px-4 md:px-6')}>
      <div className={cn('mx-auto max-w-7xl')}>
        <header
          className={cn(
            'sticky top-0 flex items-center gap-2 bg-primary-foreground py-3 md:py-4',
          )}>
          <div className={cn('mr-4 sm:mr-8 md:mr-12')}>
            <LinkedLogo href={formatPathname(APP_ROUTES.ROOT)} />
          </div>
          <NavbarMenu />
          <div className={cn('ml-auto')}>
            <SearchButton />
          </div>
          <ShoppingCartButton />
        </header>
        {children}
      </div>
    </div>
  );
}
