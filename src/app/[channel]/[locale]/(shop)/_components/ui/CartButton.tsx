'use client';

import {ShoppingCartIcon} from '@heroicons/react/24/outline';
import {useIntl} from 'react-intl';

import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

export function CartButton() {
  const intl = useIntl();

  return (
    <IconButton
      variant="outline"
      label={intl.formatMessage({defaultMessage: 'Cart', id: '2tqQFl'})}
      icon={<ShoppingCartIcon className={cn('h-4')} />}
    />
  );
}
