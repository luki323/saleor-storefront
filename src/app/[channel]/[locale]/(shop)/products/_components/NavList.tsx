import {IntlLink} from '@/i18n/components/IntlLink';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {deletePaginationSearchParams} from '@/lib/tools/pagination/delete-pagination-search-params';
import {toArray} from '@/lib/tools/to-array';

interface Item {
  readonly name: string;
  readonly slug: string;
  readonly children?: readonly Item[];
}

interface Props {
  readonly items: readonly Item[];
  readonly basePath: string | readonly string[];
  readonly searchParamName: string;
  readonly searchParams: URLSearchParams;
}

export function NavList({
  items,
  basePath,
  searchParamName,
  searchParams,
}: Props) {
  return (
    <ul className={cn('text-sm')}>
      {items.map(({name, slug, children}) => {
        const updatedSearchParams = deletePaginationSearchParams(searchParams);

        updatedSearchParams.append(searchParamName, slug);

        return (
          <li key={slug} className={cn('mt-1.5')}>
            <IntlLink
              href={{
                pathname: formatPathname(...toArray(basePath)),
                query: updatedSearchParams.toString(),
              }}
              className={cn(
                'text-sm hover:underline',
                searchParams.getAll(searchParamName).includes(slug) &&
                  'underline',
              )}>
              {name}
            </IntlLink>
            <div className={cn('pl-3')}>
              {children && (
                <NavList
                  basePath={basePath}
                  items={children}
                  searchParamName={searchParamName}
                  searchParams={searchParams}
                />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
