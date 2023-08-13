import {getChannel} from '@/i18n/context/get-channel';
import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {cn} from '@/lib/tools/cn';

import {fetchHeaderMenu} from '../_tools/fetch-header-menu';
import {SearchInput} from './search-input/SearchInput';
import {HeaderLinks} from './ui/HeaderLinks';
import {HomeLink} from './ui/HomeLink';
import {MenuButton} from './ui/MenuButton';
import {ShoppingCartButton} from './ui/ShoppingCartButton';

export async function Header() {
  const channel = getChannel();
  const languageCode = localeToLangCode(getLocale());
  const menu = await fetchHeaderMenu({languageCode, channel});

  return (
    <header className={cn('relative flex px-4 py-3')}>
      <div className={cn('flex-1')}>
        <div className={cn('flex items-center gap-5 max-lg:hidden')}>
          <HomeLink />
          <HeaderLinks menu={menu} />
        </div>
        <div className={cn('lg:hidden')}>
          <MenuButton />
        </div>
      </div>
      <div className={cn('flex basis-1/3 items-center justify-center')}>
        <div className={cn('flex-1 max-lg:hidden')}>
          <SearchInput />
        </div>
        <div className={cn('lg:hidden')}>
          <HomeLink />
        </div>
      </div>
      <div className={cn('flex flex-1 items-center justify-end')}>
        <ShoppingCartButton />
      </div>
    </header>
  );
}
