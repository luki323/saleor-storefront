import {getChannel} from '@/i18n/context/get-channel';
import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {cn} from '@/lib/tools/cn';

import {fetchHeaderMenu} from '../_tools/fetch-header-menu';
import {SearchTextField} from './search-text-filed/SearchTextField';
import {HeaderLinks} from './ui/HeaderLinks';
import {HomeLink} from './ui/HomeLink';
import {MenuButton} from './ui/MenuButton';
import {SearchButton} from './ui/SearchButton';
import {ShoppingCartButton} from './ui/ShoppingCartButton';
import {UnderHeader} from './UnderHeader';

export async function Header() {
  const channel = getChannel();
  const languageCode = localeToLangCode(getLocale());
  const menu = await fetchHeaderMenu({languageCode, channel});

  return (
    <UnderHeader>
      <header className={cn('relative flex px-5 py-4')}>
        <div className={cn('flex-1')}>
          <div className={cn('flex items-center gap-5 max-md:hidden')}>
            <HomeLink />
            <HeaderLinks menu={menu} />
          </div>
          <div className={cn('md:hidden')}>
            <MenuButton />
          </div>
        </div>
        <div className={cn('flex basis-1/3 items-center justify-center')}>
          <div className={cn('flex-1 max-lg:hidden')}>
            <SearchTextField />
          </div>
          <div className={cn('md:hidden')}>
            <HomeLink />
          </div>
        </div>
        <div className={cn('flex flex-1 items-center justify-end gap-3')}>
          <div className={cn('max-md:hidden lg:hidden')}>
            <SearchButton />
          </div>
          <ShoppingCartButton />
        </div>
      </header>
    </UnderHeader>
  );
}
