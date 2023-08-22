import {getChannel} from '@/i18n/context/get-channel';
import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {DEFAULT_PAGE_SIZE} from '../_consts';
import {fetchProducts} from '../_tools/fetch-products';
import type {SearchParams} from '../_types/types';
import {PageSizes} from './PageSizes';
import {PaginationLinks} from './PaginationLinks';
import {ProductList} from './ui/ProductList';

type Props = SearchParams;

export async function Pagination(props: Props) {
  const channel = getChannel();
  const languageCode = localeToLangCode(getLocale());
  const pageSizeKey = isDefined(props.last) ? 'last' : 'first';
  const cursorKey = pageSizeKey === 'first' ? 'after' : 'before';

  const {
    products,
    pageInfo: {__typename: ___typename, ...restPageInfo},
  } = await fetchProducts({
    [pageSizeKey]: props[pageSizeKey] ?? DEFAULT_PAGE_SIZE,
    [cursorKey]: props[cursorKey] ?? null,
    languageCode,
    filter: {search: props.search ?? ''},
    channel,
  });

  return (
    <>
      <ProductList products={products} />
      <nav className={cn('mt-3 flex flex-col gap-1')}>
        <PaginationLinks {...props} {...restPageInfo} />
        <div className={cn('self-end')}>
          <PageSizes {...props} />
        </div>
      </nav>
    </>
  );
}
