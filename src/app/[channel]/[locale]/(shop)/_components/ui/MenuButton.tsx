'use client';

import {Bars3Icon} from '@heroicons/react/24/outline';
import {useIntl} from 'react-intl';

import type {IconButtonProps} from '@/lib/components/ui/IconButton';
import {IconButton} from '@/lib/components/ui/IconButton';

type Props = Omit<IconButtonProps, 'children' | 'label' | 'variant'>;

export function MenuButton({className, ...restProps}: Props) {
  const intl = useIntl();

  return (
    <IconButton
      variant="outline"
      label={intl.formatMessage({defaultMessage: 'Menu', id: 'tKMlOc'})}
      {...restProps}>
      <Bars3Icon className={className} />
    </IconButton>
  );
}
