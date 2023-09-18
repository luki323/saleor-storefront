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

export type PageVariables = NextPageVariables | PrevPageVariables;

export type PageVariablesKey = keyof PageVariables;

type Init = () => PageVariables;

export function usePagination(init: Init) {
  const [{pageSize, pageSizeToCursors}, dispatch] = useReducer(
    paginationReducer,
    undefined,
    () => initState(init),
  );
  const currentCursors = pageSizeToCursors[pageSize];
  invariant(currentCursors, `Not found cursors for "${pageSize}" page`);

  const {cursors, currentIdx} = currentCursors;

  const variablesArray = cursors.map((cursor) =>
    cursorToPageVariables(cursor, pageSize),
  );
  const currentVariables = variablesArray[currentIdx];
  invariant(currentVariables, `Not found variables for "${currentIdx}" idx`);

  return [{currentVariables, variablesArray}, dispatch] as const;
}

type Cursor = {readonly after?: string} | {readonly before?: string};

function cursorToPageVariables(
  cursor: Cursor,
  pageSize: number,
): PageVariables {
  return 'before' in cursor
    ? {...cursor, last: pageSize}
    : {...cursor, first: pageSize};
}

interface CursorsState {
  readonly currentIdx: number;
  readonly cursors: readonly Cursor[];
}

interface State {
  readonly pageSize: number;
  readonly pageSizeToCursors: {
    readonly [pageSize: number]: CursorsState;
  };
}

type Action = (
  | {readonly type: 'next'; readonly after: string}
  | {readonly type: 'prev'; readonly before: string}
  | {readonly type: 'changePageSize'}
) & {readonly pageSize: number};

function initState(init: Init): State {
  const pageVariables = init();

  const pageSize =
    'first' in pageVariables ? pageVariables.first : pageVariables.last;

  return {
    pageSize,
    pageSizeToCursors: {
      [pageSize]: {currentIdx: 0, cursors: [pageVariables]},
    },
  };
}

function paginationReducer({pageSizeToCursors}: State, action: Action): State {
  const {currentIdx, cursors} =
    pageSizeToCursors[action.pageSize] ?? initCursorsState();

  let newCursorsState: CursorsState;

  switch (action.type) {
    case 'next': {
      const nextIdx = currentIdx + 1;

      if (cursors[nextIdx]) {
        newCursorsState = {currentIdx: nextIdx, cursors};
        break;
      }
      const {after} = action;

      newCursorsState = {currentIdx: nextIdx, cursors: [...cursors, {after}]};
      break;
    }
    case 'prev': {
      const prevIdx = currentIdx - 1;

      if (cursors[prevIdx]) {
        newCursorsState = {currentIdx: prevIdx, cursors};
        break;
      }
      const {before} = action;

      newCursorsState = {currentIdx: 0, cursors: [{before}, ...cursors]};
      break;
    }
    case 'changePageSize': {
      newCursorsState = {currentIdx: 0, cursors};
      break;
    }
    default: {
      action satisfies never;
      invariant(false, 'Dispatched unknown action');
    }
  }
  return {
    pageSize: action.pageSize,
    pageSizeToCursors: {
      ...pageSizeToCursors,
      [action.pageSize]: newCursorsState,
    },
  };
}

function initCursorsState(): CursorsState {
  return {currentIdx: 0, cursors: [{}]};
}
