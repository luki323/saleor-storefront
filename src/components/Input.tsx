import {forwardRef} from 'react';

import {cn} from '@/tools/cn';

import type {InputHTMLAttributes} from 'react';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function FormInput(props, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      )}
      {...props}
    />
  );
});
