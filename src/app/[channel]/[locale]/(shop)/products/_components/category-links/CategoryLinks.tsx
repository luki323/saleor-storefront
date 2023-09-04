import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';

import {NavLinks} from '../nav-links/NavLinks';
import {getNavCategories} from './tools/get-nav-categories';

interface Props {
  readonly searchParams: URLSearchParams;
}

export async function CategoryLinks({searchParams}: Props) {
  const navCategories = await getNavCategories({
    languageCode: localeToLangCode(getLocale()),
  });

  return (
    navCategories && (
      <NavLinks
        nodes={navCategories}
        searchParamName="category"
        searchParams={searchParams}
      />
    )
  );
}
