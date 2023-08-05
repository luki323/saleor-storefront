'use client';

import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {useRouter} from 'next/navigation';
import {useIntl} from 'react-intl';

import {Input} from '@/lib/components/ui/Input';
import {ROUTE} from '@/lib/consts/consts';
import {cn} from '@/lib/tools/cn';
import {raise} from '@/lib/tools/raise';

export function SearchInput() {
  const router = useRouter();
  const intl = useIntl();

  return (
    <form
      action={(formData) => {
        const searchValue =
          formData.get('search')?.toString() ??
          raise('Invalid search filed name');

        // eslint-disable-next-line functional/immutable-data
        router.push(`${ROUTE.PRODUCTS}?search=${searchValue}`);
      }}>
      <div className={cn('relative')}>
        <MagnifyingGlassIcon
          className={cn('absolute left-3 top-1/2 h-4 -translate-y-1/2')}
        />
        <Input
          name="search"
          className={cn('w-full pl-10')}
          placeholder={intl.formatMessage({
            defaultMessage: 'Search for products...',
            id: 'X8m9DF',
          })}
        />
      </div>
      <button className={cn('hidden')} aria-hidden />
    </form>
  );
}
