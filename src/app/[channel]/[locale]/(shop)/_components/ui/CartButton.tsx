'use client';

import {ShoppingCartIcon} from '@heroicons/react/24/outline';

import {useIntl} from '@/i18n/react-intl';
import type {IconButtonProps} from '@/lib/components/ui/IconButton';
import {IconButton} from '@/lib/components/ui/IconButton';

type Props = Omit<IconButtonProps, 'children' | 'label' | 'variant'>;

export function CartButton({className, ...restProps}: Props) {
  const intl = useIntl();

  return (
    <IconButton
      variant="outline"
      label={intl.formatMessage({defaultMessage: 'Cart', id: '2tqQFl'})}
      {...restProps}>
      <ShoppingCartIcon className={className} />
    </IconButton>
  );
}
