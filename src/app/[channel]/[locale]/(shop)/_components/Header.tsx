import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {fetchHeaderMenu} from '../_tools/fetch-header-menu';
import {CartButton} from './ui/CartButton';
import {HeaderMenu} from './ui/HeaderMenu';
import {SearchButton} from './ui/SearchButton';
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
        <HeaderMenu menu={menu} />
      </div>
      <div className={cn('hidden max-w-xl basis-1/3 lg:block')}>
        <SearchInput />
      </div>
      <div className={cn('flex flex-1 justify-end gap-5')}>
        <div className={cn('block lg:hidden')}>
          <SearchButton />
        </div>
        <CartButton />
      </div>
    </header>
  );
}
