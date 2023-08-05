import {createContext, useContext} from 'react';

export function createBoundaryContext<Value>(glboalName: string) {
  const initialValue = Symbol();
  const context = createContext<Value | typeof initialValue>(initialValue);

  const useBoundaryContext = () => {
    const value = useContext(context);

    if (value === initialValue) {
      throw new Error(`Used default value of ${glboalName} context`);
    }
    return value;
  };
  return [context, useBoundaryContext] as const;
}
