import {useId} from 'react';

import {cn} from '@/tools/cn';
import {createBoundaryContext} from '@/tools/create-boundary-context';

import type {ReactNode} from 'react';

const [FormItemIdContext, useFormItemId] =
  createBoundaryContext<ReturnType<typeof useId>>('formItemId');

export {useFormItemId};

type Props = {
  readonly children: ReactNode;
};

export function FormItem({children}: Props) {
  return (
    <FormItemIdContext.Provider value={useId()}>
      <div className={cn('flex flex-col space-y-1')}>{children}</div>
    </FormItemIdContext.Provider>
  );
}
