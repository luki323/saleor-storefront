import {Spinner} from '@/lib/components/ui/Spinner';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props {
  readonly disabled: boolean;
}

export function SubmitButton({children, disabled}: PropsWithChildren<Props>) {
  return (
    <button
      type="submit"
      className={cn(
        'relative w-full rounded-md bg-blue p-5 text-sm font-bold text-white transition-colors hover:bg-blue-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        disabled && 'cursor-default bg-blue-foreground',
      )}>
      <span className={cn(disabled && 'invisible')}>{children}</span>
      <span
        className={cn(
          'invisible absolute inset-0 flex items-center justify-center',
          disabled && 'visible',
        )}>
        <Spinner size="lg" />
      </span>
    </button>
  );
}
