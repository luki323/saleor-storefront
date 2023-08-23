'use client';

import type {RefObject} from 'react';
import {useRef} from 'react';

import {createBoundaryContext} from '@/lib/tools/create-boundary-context';
import type {PropsWithChildren} from '@/lib/types/react';

const [UnderHeaderContext, useUnderHeader] =
  createBoundaryContext<RefObject<HTMLDivElement>>('UnderHeaderContext');

export {useUnderHeader};

export function UnderHeader({children}: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <UnderHeaderContext.Provider value={ref}>
      {children}
      <div ref={ref} />
    </UnderHeaderContext.Provider>
  );
}
