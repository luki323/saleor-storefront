import {graphql} from '@/graphql/generated/gql';
import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {cn} from '@/lib/tools/cn';
import {fetchQueryData} from '@/lib/tools/get-client';

import {HeaderMenuItem} from './HeaderMenuItem';

const HeaderMenu_MenuQuery = graphql(`
  query HeaderMenu_MenuQuery(
    $channel: String
    $languageCode: LanguageCodeEnum!
  ) {
    menu(name: "header", channel: $channel) {
      items {
        id
        ...HeaderMenuItem_MenuItemFragment
      }
    }
  }
`);

export async function HeaderMenu() {
  const [channel, locale] = getBasePath();

  const {menu} = await fetchQueryData(HeaderMenu_MenuQuery, {
    channel,
    languageCode: localeToLangCode(locale),
  });

  return (
    menu?.items && (
      <ul className={cn('flex items-baseline gap-3 text-sm')}>
        {menu.items.map((item) => (
          <li key={item.id}>
            <HeaderMenuItem item={item} />
          </li>
        ))}
      </ul>
    )
  );
}
