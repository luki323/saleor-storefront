import {useReducer} from 'react';
import invariant from 'tiny-invariant';

export interface NextPageVariables {
  readonly first: number;
  readonly after?: string;
}
export interface PrevPageVariables {
  readonly last: number;
  readonly before?: string;
}
export type PageVariablesKey =
  | keyof NextPageVariables
  | keyof PrevPageVariables;

export type PageVariables = NextPageVariables | PrevPageVariables;

type Init = () => PageVariables;

export function usePagination(init: Init) {
  const [{currentIdx, variablesArray}, dispatch] = useReducer(
    paginationReducer,
    undefined,
    () => ({currentIdx: 0, variablesArray: [init()]}),
  );
  const currentVariables = variablesArray[currentIdx];
  invariant(currentVariables, `Not found variables for "${currentIdx}" idx`);

  return [{currentVariables, variablesArray}, dispatch] as const;
}

interface State {
  readonly currentIdx: number;
  readonly variablesArray: readonly PageVariables[];
}
export type PaginationReducerAction =
  | {readonly type: 'next'; readonly after: string}
  | {readonly type: 'prev'; readonly before: string};

function paginationReducer(
  {currentIdx, variablesArray}: State,
  action: PaginationReducerAction,
): State {
  switch (action.type) {
    case 'next': {
      const nextIdx = currentIdx + 1;

      if (variablesArray[nextIdx]) {
        return {currentIdx: nextIdx, variablesArray};
      }
      const {after} = action;

      return {
        currentIdx: nextIdx,
        variablesArray: [
          ...variablesArray,
          {first: getPageSize(variablesArray), after},
        ],
      };
    }
    case 'prev': {
      const prevIdx = currentIdx - 1;

      if (prevIdx >= 0 && variablesArray[prevIdx]) {
        return {currentIdx: prevIdx, variablesArray};
      }
      const {before} = action;

      return {
        currentIdx: 0,
        variablesArray: [
          {last: getPageSize(variablesArray), before},
          ...variablesArray,
        ],
      };
    }
    default: {
      action satisfies never;
      invariant(false, 'Dispatched unknown action');
    }
  }
}

function getPageSize(variablesArray: State['variablesArray']) {
  const [firstVariables] = variablesArray;
  invariant(firstVariables, "Variables array first item isn't defined");

  return 'first' in firstVariables ? firstVariables.first : firstVariables.last;
}
