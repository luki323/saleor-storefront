'use client';

import {ShoppingCartIcon} from 'lucide-react';

import {useIntl} from '@/i18n/react-intl';
import type {IconButtonProps} from '@/lib/components/ui/IconButton';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

type Props = Omit<IconButtonProps, 'children' | 'label' | 'variant'>;

export function ShoppingCartButton(props: Props) {
  const intl = useIntl();

  return (
    <IconButton
      variant="outline"
      label={intl.formatMessage({
        defaultMessage: 'Shopping cart',
        id: 'wjh10D',
      })}
      {...props}>
      <ShoppingCartIcon className={cn('h-4')} />
    </IconButton>
  );
}
