'use client';

import {MenuIcon} from 'lucide-react';

import {useIntl} from '@/i18n/react-intl';
import type {IconButtonProps} from '@/lib/components/ui/IconButton';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

type Props = Omit<IconButtonProps, 'children' | 'label' | 'variant'> & {
  readonly className?: string;
};

export function MenuButton(props: Props) {
  const intl = useIntl();

  return (
    <IconButton
      variant="outline"
      label={intl.formatMessage({defaultMessage: 'Menu', id: 'tKMlOc'})}
      {...props}>
      <MenuIcon className={cn('h-4')} />
    </IconButton>
  );
}
