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
  return (
    <IconButton variant="ghost" disabled={disabled} label={label}>
      {disabled ? (
        <a>{children}</a>
      ) : (
        <IntlLink {...restProps}>{children}</IntlLink>
      )}
    </IconButton>
  );
}
