import type {ReactNode} from 'react';

import {FormItem as FormItemImpl} from '@/lib/components/form/FormItem';
import {cn} from '@/lib/tools/cn';

interface Props {
  readonly children: ReactNode;
}

export function FormItem(props: Props) {
  return <FormItemImpl className={cn('flex flex-col space-y-1')} {...props} />;
}
