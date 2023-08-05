'use client';

import {useSetAtom} from 'jotai';
import {FormattedMessage} from 'react-intl';

import {RadioGroup} from '@/lib/components/radio-group/RadioGroup';
import {RadioGroupItem} from '@/lib/components/radio-group/RadioGroupItem';
import {cn} from '@/lib/tools/cn';

import {loadingStyleAtom} from '../_tools/loading-style-atom';

export function LoadingStyleRadioGroup() {
  const setLoadingStyle = useSetAtom(loadingStyleAtom);

  return (
    <div className={cn('text-xs')}>
      <h3 className={cn('mb-2 font-semibold text-grey')}>Loading style</h3>
      <RadioGroup
        defaultValue="loadMore"
        onValueChange={(value) => {
          if (value === 'loadMore' || value === 'pagination') {
            setLoadingStyle(value);
          } else {
            console.error('Invalid loading style value');
          }
        }}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pagination" id="r2" />
          <label>
            <FormattedMessage defaultMessage="Pagination" id="ZATT08" />
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="loadMore" id="r3" />
          <label>
            <FormattedMessage defaultMessage="Load more" id="00LcfG" />
          </label>
        </div>
      </RadioGroup>
    </div>
  );
}
