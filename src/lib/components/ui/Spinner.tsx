import {cn} from '@/lib/tools/cn';

import {Icons} from './Icons';

export function Spinner() {
  return <Icons.spinner className={cn('h-4 w-4 animate-spin')} />;
}
