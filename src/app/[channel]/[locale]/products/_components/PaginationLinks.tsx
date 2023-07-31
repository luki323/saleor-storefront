import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {SEARCH_PARAMS} from '../_consts';
import {cursorsStore} from '../_tools/cursors-store';

import {NavigationLink} from './NavigationLink';

import type {ParsedSearchParams} from '../_types';

type Props = Pick<ParsedSearchParams, 'pageNumber' | 'pageSize'>;

export function PaginationLinks({pageNumber, pageSize}: Props) {
  const nextPage = cursorsStore.getNextPage(pageNumber, pageSize);
  const prevPage = cursorsStore.getPrevPage(pageNumber);

  return (
    <ul className={cn('flex gap-4')}>
      <li>
        <NavigationLink
          disabled={!isDefined(prevPage)}
          query={{
            [SEARCH_PARAMS.PAGE_NUMBER]: prevPage,
            [SEARCH_PARAMS.PAGE_SIZE]: pageSize,
          }}>
          <FormattedMessage defaultMessage="Previous" id="JJNc3c" />
        </NavigationLink>
      </li>
      <li>
        <NavigationLink
          disabled={!isDefined(nextPage)}
          query={{
            [SEARCH_PARAMS.PAGE_NUMBER]: nextPage,
            [SEARCH_PARAMS.PAGE_SIZE]: pageSize,
          }}>
          <FormattedMessage defaultMessage="Next" id="9+Ddtu" />
        </NavigationLink>
      </li>
    </ul>
  );
}
