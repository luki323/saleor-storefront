import {FormInputLabel as FormInputLabelImpl} from '@/lib/components/form/FormInputLabel';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function FormInputLabel({children}: PropsWithChildren) {
  return (
    <FormInputLabelImpl className={cn('text-sm font-medium')}>
      {children}
    </FormInputLabelImpl>
  );
}
