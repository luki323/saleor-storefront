import {graphql} from '@/graphql/generated';
import {cn} from '@/lib/tools/cn';
import {fetchQueryData} from '@/lib/tools/get-client';

import {PageSizeLinks} from './components/PageSizeLinks';
import {PaginationLinks} from './components/PaginationLinks';
import {ProductList} from './components/product-list';
import {parseSearchParams} from './tools/parse-search-params';

const Pagination_ProductsQuery = graphql(`
  query Pagination_ProductsQuery(
    $first: Int
    $after: String
    $search: String
    $filter: ProductFilterInput
    $address: AddressInput
    $channel: String
    $languageCode: LanguageCodeEnum!
  ) {
    products(
      first: $first
      after: $after
      search: $search
      filter: $filter
      channel: $channel
    ) {
      pageInfo {
        ...PaginationLinks_PageInfoFragment
      }
      ...ProductList_ProductCountableConnectionFragment
    }
  }
`);

interface Props {
  readonly searchParams: URLSearchParams;
}

export async function Pagination({searchParams}: Props) {
  const {products} = await fetchQueryData(Pagination_ProductsQuery, {
    ...(await parseSearchParams(searchParams)),
  });

  return (
    products && (
      <>
        <ProductList products={products} />
        <nav className={cn('mt-3 flex flex-col gap-1')}>
          <PaginationLinks
            searchParams={searchParams}
            pageInfo={products.pageInfo}
          />
          <div className={cn('self-end')}>
            <PageSizeLinks searchParams={searchParams} />
          </div>
        </nav>
      </>
    )
  );
}
