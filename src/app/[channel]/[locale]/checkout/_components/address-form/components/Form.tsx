import {FormItem as FormItemImpl} from '@/lib/components/form/FormField/FormField';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function FormGroup({children}: PropsWithChildren) {
  return <div className={cn('flex gap-3.5')}>{children}</div>;
}

export function FormItem({children}: PropsWithChildren) {
  return (
    <FormItemImpl className={cn('flex w-full flex-col gap-2')}>
      {children}
    </FormItemImpl>
  );
}
