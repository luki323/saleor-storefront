import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';

import {NavLinks} from '../nav-links/NavLinks';
import {getNavCollections} from './tools/get-nav-collections/get-nav-collections';

interface Props {
  readonly searchParams: URLSearchParams;
}

export async function CollectionLinks({searchParams}: Props) {
  const [channel, locale] = getBasePath();

  const navCollections = await getNavCollections({
    channel,
    languageCode: localeToLangCode(locale),
  });

  return (
    <NavLinks
      nodes={navCollections}
      searchParamName="collection"
      searchParams={searchParams}
    />
  );
}
