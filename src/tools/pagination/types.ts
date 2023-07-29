type ForwardArguments = {
  readonly first: number;
  readonly after?: string;
};

type FetchCursorsResult = {
  readonly cursors: readonly string[];
  readonly hasNextPage: boolean;
};

export type FetchCursors = (
  forward: ForwardArguments,
) => Promise<FetchCursorsResult>;
