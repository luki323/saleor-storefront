import {cn} from '@/lib/tools/cn';

import {HeaderMenu} from './components/HeaderMenu';
import {HomeLink} from './components/HomeLink';
import {MenuButton} from './components/MenuButton';
import {SearchTextField} from './components/search-text-field/SearchTextField';
import {ShoppingCartButton} from './components/ShoppingCartButton';

export async function Header() {
  return (
    <div className={cn('flex items-center px-4 py-4 lg:px-6')}>
      <div className={cn('flex-1')}>
        <div className={cn('flex flex-1 items-center gap-5 max-md:hidden')}>
          <HomeLink />
          <HeaderMenu />
        </div>
        <div className={cn('md:hidden')}>
          <MenuButton />
        </div>
      </div>
      <div className={cn('flex basis-1/3 items-center justify-center')}>
        <div className={cn('flex-1 max-md:hidden')}>
          <SearchTextField />
        </div>
        <div className={cn('flex items-center justify-center md:hidden')}>
          <HomeLink />
        </div>
      </div>
      <div className={cn('flex flex-1 justify-end')}>
        <ShoppingCartButton />
      </div>
    </div>
  );
}
