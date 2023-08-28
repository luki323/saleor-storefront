import type {InputHTMLAttributes} from 'react';
import {forwardRef} from 'react';

import {cn} from '@/lib/tools/cn';

export const TextField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function TextField({className, ...restProps}, ref) {
  return (
    <input
      ref={ref}
      spellCheck="false" // Turn off spell checking by default
      className={cn(
        'h-10 rounded-md border border-input bg-white px-3 py-2 text-sm placeholder:font-light placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...restProps}
    />
  );
});
