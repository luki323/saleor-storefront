'use client';

import {createContext, useContext} from 'react';

import {capitalize} from './capitalize';

export function createBoundaryContext<Value>(name: string) {
  const initialValue = Symbol();
  const context = createContext<Value | typeof initialValue>(initialValue);

  const displayName = capitalize(name);

  const useBoundaryContext = () => {
    const value = useContext(context);

    if (value === initialValue) {
      throw new Error(
        `use${displayName} must be used within a ${displayName}Provider`,
      );
    }
    return value;
  };
  return [context, useBoundaryContext] as const;
}
