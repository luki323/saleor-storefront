'use client';

import {SearchIcon} from 'lucide-react';

import {FormattedMessage} from '@/i18n/react-intl';
import {useIntl} from '@/i18n/react-intl';
import {TextField} from '@/lib/components/ui/TextField';
import {cn} from '@/lib/tools/cn';

import {useSearchAction} from './use-search-action';

export function SearchTextField() {
  const intl = useIntl();
  const searchAction = useSearchAction();

  return (
    <form action={searchAction}>
      <div className={cn('relative')}>
        <button className={cn('absolute top-1/2 -translate-y-1/2 p-3')}>
          <span className={'sr-only'}>
            <FormattedMessage defaultMessage="Search products" id="un+VWt" />
          </span>
          <SearchIcon className={cn('h-4 w-4')} />
        </button>
        <TextField
          name="search"
          className={cn('w-full pl-10')}
          placeholder={intl.formatMessage({
            defaultMessage: 'Search products',
            id: 'un+VWt',
          })}
          readOnly
        />
      </div>
      <button className={cn('hidden')} aria-hidden />
    </form>
  );
}
