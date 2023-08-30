import {ShoppingCartIcon} from 'lucide-react';

import {FormattedMessage} from '@/i18n/react-intl';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

export function ShoppingCartButton() {
  return (
    <IconButton
      variant="outline"
      label={<FormattedMessage defaultMessage="Shopping cart" id="wjh10D" />}>
      <ShoppingCartIcon className={cn('h-4 w-4')} />
    </IconButton>
  );
}
