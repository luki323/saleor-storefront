import {getChannel} from '@/i18n/context/get-channel';
import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {cn} from '@/lib/tools/cn';

import {fetchHeaderMenu} from '../_tools/fetch-header-menu';
import {SearchInput} from './search-input/SearchInput';
import {CartButton} from './ui/CartButton';
import {HeaderLinks} from './ui/HeaderLinks';
import {HomeLink} from './ui/HomeLink';
import {MenuButton} from './ui/MenuButton';

export async function Header() {
  const channel = getChannel();
  const languageCode = localeToLangCode(getLocale());
  const menu = await fetchHeaderMenu({languageCode, channel});

  return (
    <header className={cn('flex items-center px-6 py-4')}>
      <div className={cn('flex-1')}>
        <div className={cn('lg:hidden')}>
          <MenuButton className={cn('h-4')} />
        </div>
        <nav className={cn('flex items-center gap-4 max-lg:hidden')}>
          <HomeLink className={cn('max-xl:hidden')} />
          <HeaderLinks menu={menu} />
        </nav>
      </div>
      <div className={cn('lg:basis-1/3')}>
        <div className={cn('max-lg:hidden')}>
          <SearchInput />
        </div>
        <nav className={cn('lg:hidden')}>
          <HomeLink />
        </nav>
      </div>
      <div className={cn('flex flex-1 justify-end')}>
        <CartButton className={cn('h-4')} />
      </div>
    </header>
  );
}
