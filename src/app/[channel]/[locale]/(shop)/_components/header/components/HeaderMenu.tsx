import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {cn} from '@/lib/tools/cn';

import {getHeaderMenu} from '../tools/get-header-menu';
import {HeaderMenuItem} from './HeaderMenuItem';

export async function HeaderMenu() {
  const [channel, locale] = getBasePath();

  const menu = await getHeaderMenu({
    channel,
    languageCode: localeToLangCode(locale),
  });

  return (
    <ul className={cn('flex items-baseline gap-3 text-sm')}>
      {menu.map((item) => (
        <li key={item.id}>
          <HeaderMenuItem item={item} />
        </li>
      ))}
    </ul>
  );
}
