import {getLocale} from '@/i18n/context/get-locale';
import {FormattedMessage} from '@/i18n/react-intl';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {getNavCategories} from '../_tools/get-nav-categories';
import type {SearchParams} from '../_types';
import {NavList} from './NavList';

interface Props {
  readonly searchParams: SearchParams;
}

export async function CategoryLinks({searchParams}: Props) {
  const categoryNames = await getNavCategories({
    languageCode: localeToLangCode(getLocale()),
  });

  return (
    <div>
      <h4 className={cn('text-xs text-grey')}>
        <FormattedMessage defaultMessage="Categories" id="VKb1MS" />
      </h4>
      <NavList
        basePath={APP_ROUTES.PRODUCTS}
        items={categoryNames}
        searchParamName="category"
        searchParams={createSearchParams(searchParams)}
      />
    </div>
  );
}
