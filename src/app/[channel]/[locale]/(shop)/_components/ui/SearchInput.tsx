'use client';

import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {useIntl} from 'react-intl';

import {Input} from '@/lib/components/ui/Input';
import {cn} from '@/lib/tools/cn';

export function SearchInput() {
  const intl = useIntl();

  return (
    <div className={cn('relative')}>
      <MagnifyingGlassIcon
        className={cn('absolute left-3 top-1/2 h-4 -translate-y-1/2')}
      />
      <Input
        className={cn('w-full pl-10')}
        placeholder={intl.formatMessage({
          defaultMessage: 'Search for products...',
          id: 'X8m9DF',
        })}
      />
    </div>
  );
}
