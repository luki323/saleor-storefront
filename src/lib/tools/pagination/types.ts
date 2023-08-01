export interface ForwardArguments {
  readonly first: number;
  readonly after?: string;
}

export interface FetchCursorsResult {
  readonly cursors: readonly string[];
  readonly hasNextPage: boolean;
}

export type FetchCursors = (
  forward: ForwardArguments,
) => Promise<FetchCursorsResult>;
