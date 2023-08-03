import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {fetchHeaderMenu} from '../_tools/fetch-header-menu';
import {CartButton} from './ui/CartButton';
import {HeaderMenu} from './ui/HeaderMenu';
import {HomeLink} from './ui/HomeLink';
import {MenuButton} from './ui/MenuButton';
import {SearchInput} from './ui/SearchInput';

type Props = GetHeaderMenuVariables;

export async function Header({languageCode, channel}: Props) {
  const menu = await fetchHeaderMenu({
    languageCode,
    ...(isDefined(channel) && {channel}),
  });

  return (
    <header className={cn('flex items-center px-6 py-4')}>
      <div className={cn('flex-1')}>
        <div className={cn('lg:hidden')}>
          <MenuButton className={cn('h-4')} />
        </div>
        <div className={cn('flex items-center gap-4 max-lg:hidden')}>
          <HomeLink className={cn('max-xl:hidden')} />
          <HeaderMenu menu={menu} />
        </div>
      </div>
      <div className={cn('lg:basis-1/3')}>
        <div className={cn('max-w-xl max-lg:hidden')}>
          <SearchInput />
        </div>
        <div className={cn('lg:hidden')}>
          <HomeLink />
        </div>
      </div>
      <div className={cn('flex flex-1 justify-end')}>
        <CartButton className={cn('h-4')} />
      </div>
    </header>
  );
}
