import type {HTMLAttributes} from 'react';
import {useId} from 'react';

import {createBoundaryContext} from '@/lib/tools/create-boundary-context';

const [FormItemIdContext, useFormItemId] =
  createBoundaryContext<ReturnType<typeof useId>>('formItemId');

export {useFormItemId};

type Props = Pick<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>;

export function FormItem({children, ...restProps}: Props) {
  return (
    <FormItemIdContext.Provider value={useId()}>
      <div {...restProps}>{children}</div>
    </FormItemIdContext.Provider>
  );
}
