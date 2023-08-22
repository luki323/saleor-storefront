import type {InputHTMLAttributes} from 'react';
import {forwardRef} from 'react';

import {cn} from '@/lib/tools/cn';

export const TextField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function TextField({value = '', className, ...restProps}, ref) {
  return (
    <input
      ref={ref}
      value={value}
      spellCheck="false" // Turn off spell checking by default
      className={cn(
        'h-10 rounded-md border border-input bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
      {...restProps}
    />
  );
});
