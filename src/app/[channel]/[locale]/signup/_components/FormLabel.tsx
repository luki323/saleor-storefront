import type {ComponentProps} from 'react';

import {FormLabel as FormLabelImpl} from '@/lib/components/Form/FormLabel';
import {cn} from '@/lib/tools/cn';

type Props = Pick<ComponentProps<typeof FormLabelImpl>, 'children'>;

export function FormLabel(props: Props) {
  return <FormLabelImpl className={cn('text-sm font-medium')} {...props} />;
}
