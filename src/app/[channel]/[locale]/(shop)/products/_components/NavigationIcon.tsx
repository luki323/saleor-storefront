import type {LinkProps} from 'next/link';

import {IntlLink} from '@/i18n/components/IntlLink';
import type {IconButtonProps} from '@/lib/components/ui/IconButton';
import {IconButton} from '@/lib/components/ui/IconButton';

type Props = LinkProps &
  Pick<IconButtonProps, 'children' | 'label' | 'disabled'>;

export function NavigationIcon({
  children,
  label,
  disabled,
  ...restProps
}: Props) {
  const iconButton = (
    <IconButton variant="outline" disabled={disabled} label={label}>
      {children}
    </IconButton>
  );

  if (disabled) {
    return <a>{iconButton}</a>;
  }
  return <IntlLink {...restProps}>{iconButton}</IntlLink>;
}
