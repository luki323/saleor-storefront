import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import {useFormField} from './hooks/use-form-field';

export function FormFieldDescription({children}: PropsWithChildren) {
  const {formDescriptionId} = useFormField();

  return (
    <p className={cn('text-sm')} id={formDescriptionId}>
      {children}
    </p>
  );
}
