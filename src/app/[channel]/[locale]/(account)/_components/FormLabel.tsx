import type {ReactNode} from 'react';

import {FormLabel as FormLabelImpl} from '@/lib/components/form/FormLabel';
import {cn} from '@/lib/tools/cn';

interface Props {
  readonly children: ReactNode;
}

export function FormLabel(props: Props) {
  return <FormLabelImpl className={cn('text-sm font-medium')} {...props} />;
}
