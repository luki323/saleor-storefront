import type {ReactNode} from 'react';
import {useId} from 'react';

import {createBoundaryContext} from '@/lib/tools/create-boundary-context';

const [FormItemIdContext, useFormItemId] =
  createBoundaryContext<ReturnType<typeof useId>>('formItemId');

export {useFormItemId};

interface Props {
  readonly children: ReactNode;
  readonly className: string;
}

export function FormItem({children, ...restProps}: Props) {
  return (
    <FormItemIdContext.Provider value={useId()}>
      <div {...restProps}>{children}</div>
    </FormItemIdContext.Provider>
  );
}
