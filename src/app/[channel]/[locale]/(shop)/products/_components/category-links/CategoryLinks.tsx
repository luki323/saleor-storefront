import {getLocale} from '@/i18n/context/get-locale';
import {FormattedMessage} from '@/i18n/react-intl';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';

import type {ProductsPageSearchParams} from '../../types';
import {NavLinks} from '../nav-links/NavLinks';
import {NavLinksTitle} from '../nav-links/NavLinksTitle';
import {getNavCategories} from './tools/get-nav-categories';

interface Props {
  readonly searchParams: ProductsPageSearchParams;
}

export async function CategoryLinks({searchParams}: Props) {
  const navCategories = await getNavCategories({
    languageCode: localeToLangCode(getLocale()),
  });

  return (
    <>
      <NavLinksTitle
        title={<FormattedMessage defaultMessage="Categories" id="VKb1MS" />}
      />
      <NavLinks
        items={navCategories}
        searchParamName="category"
        searchParams={searchParams}
      />
    </>
  );
}
