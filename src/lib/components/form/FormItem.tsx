import {useId} from 'react';

import {createBoundaryContext} from '@/lib/tools/create-boundary-context';
import type {PropsWithChildren} from '@/lib/types/react';

const [FormItemIdContext, useFormItemId] =
  createBoundaryContext<ReturnType<typeof useId>>('formItemId');

export {useFormItemId};

interface Props {
  readonly className: string;
}

export function FormItem({children, ...restProps}: PropsWithChildren<Props>) {
  return (
    <FormItemIdContext.Provider value={useId()}>
      <div {...restProps}>{children}</div>
    </FormItemIdContext.Provider>
  );
}
