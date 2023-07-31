import * as Label from '@radix-ui/react-label';

import {cn} from '@/lib/tools/cn';

import {useFormField} from './FormField';

import type {ComponentPropsWithoutRef} from 'react';

type Props = Pick<ComponentPropsWithoutRef<(typeof Label)['Root']>, 'children'>;

export function FormLabel({children}: Props) {
  const {formItemId} = useFormField();

  return (
    <Label.Root htmlFor={formItemId} className={cn(' text-sm font-medium')}>
      {children}
    </Label.Root>
  );
}
