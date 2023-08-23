'use client';

import {SearchIcon} from 'lucide-react';
import {forwardRef} from 'react';

import {FormattedMessage} from '@/i18n/react-intl';
import {useIntl} from '@/i18n/react-intl';
import {TextField} from '@/lib/components/ui/TextField';
import {cn} from '@/lib/tools/cn';

import {useSearchAction} from './use-search-action';

export const SearchTextField: typeof TextField = forwardRef(
  function SearchInput(props, ref) {
    const intl = useIntl();
    const searchAction = useSearchAction();

    return (
      <form action={searchAction}>
        <div className={cn('relative')}>
          <button className={cn('absolute top-1/2 -translate-y-1/2 p-3')}>
            <span className={'sr-only'}>
              <FormattedMessage
                defaultMessage="Search for products"
                id="gUIhhI"
              />
            </span>
            <SearchIcon className={cn('h-4 w-4')} />
          </button>
          <TextField
            {...props}
            name="search"
            ref={ref}
            className={cn('w-full pl-10', props.className)}
            placeholder={intl.formatMessage({
              defaultMessage: 'Search for products',
              id: 'gUIhhI',
            })}
          />
        </div>
        <button className={cn('hidden')} aria-hidden />
      </form>
    );
  },
);
