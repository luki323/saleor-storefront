'use client';

import {createBoundaryContext} from '@/lib/tools/create-boundary-context';

import type {ResolvedIntlConfig} from '@formatjs/intl';
import type {ReactNode} from 'react';

const [MessagesContext, useMessages] =
  createBoundaryContext<ResolvedIntlConfig['messages']>('messages');

export {useMessages};

type Props = {readonly children: ReactNode} & Pick<
  ResolvedIntlConfig,
  'messages'
>;

export function MessagesProvider({children, messages}: Props) {
  return (
    <MessagesContext.Provider value={messages}>
      {children}
    </MessagesContext.Provider>
  );
}
