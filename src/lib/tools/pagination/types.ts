export type ForwardArguments = {
  readonly first: number;
  readonly after?: string;
};

export type FetchCursorsResult = {
  readonly cursors: readonly string[];
  readonly hasNextPage: boolean;
};

export type FetchCursors = (
  forward: ForwardArguments,
) => Promise<FetchCursorsResult>;
