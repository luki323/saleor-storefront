'use client';

import {createContext, useContext} from 'react';

import type {ResolvedIntlConfig} from '@formatjs/intl';
import type {ReactNode} from 'react';

const defaultValue = Symbol();

const MessagesContext = createContext<
  ResolvedIntlConfig['messages'] | typeof defaultValue
>(defaultValue);

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

export function useMessages() {
  const value = useContext(MessagesContext);

  if (value === defaultValue) {
    throw new Error(
      `Used default value for ${MessagesContext.displayName} context`,
    );
  }
  return value;
}
