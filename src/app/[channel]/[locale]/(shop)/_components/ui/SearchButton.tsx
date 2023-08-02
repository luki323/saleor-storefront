import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

export function SearchButton() {
  return (
    <IconButton
      variant="outline"
      label={<FormattedMessage defaultMessage="Menu" id="tKMlOc" />}
      icon={<MagnifyingGlassIcon className={cn('h-4')} />}
    />
  );
}
