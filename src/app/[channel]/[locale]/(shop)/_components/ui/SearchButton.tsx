'use client';

import {SearchIcon} from 'lucide-react';
import {useState} from 'react';
import {createPortal} from 'react-dom';

import {useIntl} from '@/i18n/react-intl';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

import {SearchTextField} from '../search-text-filed';
import {useUnderHeader} from '../UnderHeader';

function focus(instance: HTMLInputElement | null) {
  instance?.focus();
}

export function SearchButton() {
  const intl = useIntl();
  const underHeader = useUnderHeader();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <IconButton
        variant="outline"
        onClick={() => {
          setShowSearch(!showSearch);
        }}
        label={intl.formatMessage({
          defaultMessage: 'Search products',
          id: 'un+VWt',
        })}>
        {<SearchIcon className={cn('h-4 w-4')} />}
      </IconButton>
      {showSearch &&
        underHeader.current &&
        createPortal(
          <div className={cn('mx-auto px-5 pb-4 max-md:hidden lg:hidden')}>
            <SearchTextField ref={focus} />
          </div>,
          underHeader.current,
        )}
    </>
  );
}
