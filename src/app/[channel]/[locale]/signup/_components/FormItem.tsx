import type {ComponentProps} from 'react';

import {FormItem as FormItemImpl} from '@/lib/components/Form/FormItem';
import {cn} from '@/lib/tools/cn';

type Props = Pick<ComponentProps<typeof FormItemImpl>, 'children'>;

export function FormItem(props: Props) {
  return <FormItemImpl className={cn('flex flex-col space-y-1')} {...props} />;
}
