'use client';

import {Loader2Icon, SearchIcon} from 'lucide-react';

import {useIntl} from '@/i18n/react-intl';
import {TextField} from '@/lib/components/ui/TextField';
import {cn} from '@/lib/tools/cn';

import {useSearchProductsEvent} from './hooks/use-search-products-event';

export function SearchTextField() {
  const intl = useIntl();
  const [isSearching, searchEvent] = useSearchProductsEvent();

  return (
    <div className={cn('relative')}>
      <div className={cn('absolute left-3 top-1/2 -translate-y-1/2')}>
        <SearchIcon className={cn('h-4 w-4')} />
      </div>
      <TextField
        className={cn('pl-10', isSearching && 'pr-10')}
        placeholder={intl.formatMessage({
          defaultMessage: 'Search for products',
          id: 'gUIhhI',
        })}
        {...searchEvent}
      />
      {isSearching && (
        <div className={cn('absolute right-3 top-1/2 -translate-y-1/2')}>
          <Loader2Icon className={cn('h-4 w-4 animate-spin')} />
        </div>
      )}
    </div>
  );
}
