import type {InputHTMLAttributes} from 'react';
import {forwardRef} from 'react';

import {cn} from '@/lib/tools/cn';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function FormInput(props, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-10 rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      )}
      {...props}
    />
  );
});
