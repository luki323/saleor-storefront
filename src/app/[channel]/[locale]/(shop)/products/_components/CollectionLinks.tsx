import {getBasePath} from '@/i18n/context/get-base-path';
import {FormattedMessage} from '@/i18n/react-intl';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {getNavCollections} from '../_tools/get-nav-collections';
import type {SearchParams} from '../_types';
import {NavList} from './NavList';

interface Props {
  readonly searchParams: SearchParams;
}

export async function CollectionLinks({searchParams}: Props) {
  const [channel, locale] = getBasePath();

  const navCollections = await getNavCollections({
    channel,
    languageCode: localeToLangCode(locale),
  });

  return (
    <div>
      <h4 className={cn('text-xs text-grey')}>
        <FormattedMessage defaultMessage="Collections" id="ulh3kf" />
      </h4>
      <NavList
        basePath={APP_ROUTES.PRODUCTS}
        items={navCollections}
        searchParamName="collection"
        searchParams={createSearchParams(searchParams)}
      />
    </div>
  );
}
