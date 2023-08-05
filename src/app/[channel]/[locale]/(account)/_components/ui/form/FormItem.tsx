import {FormItem as FormItemImpl} from '@/lib/components/form/FormItem';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function FormItem({children}: PropsWithChildren) {
  return (
    <FormItemImpl className={cn('flex flex-col space-y-1')}>
      {children}
    </FormItemImpl>
  );
}
