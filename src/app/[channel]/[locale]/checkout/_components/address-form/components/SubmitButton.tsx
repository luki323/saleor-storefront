import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function SubmitButton({children}: PropsWithChildren) {
  return (
    <button
      type="submit"
      className={cn(
        'w-full rounded-md bg-blue p-5 text-sm font-bold text-white transition-colors hover:bg-blue-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black',
      )}>
      {children}
    </button>
  );
}
