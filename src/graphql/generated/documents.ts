// @ts-nocheck
import type * as Types from './types';

import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type GetPoductListVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetPoductList = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean } } | null };

export type PageInfo = { __typename?: 'PageInfo', startCursor?: string | null, hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const PageInfo = new TypedDocumentString(`
    fragment PageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}
    `, {"fragmentName":"PageInfo"}) as unknown as TypedDocumentString<PageInfo, unknown>;
export const GetPoductListDocument = new TypedDocumentString(`
    query getPoductList($first: Int, $after: String, $last: Int, $before: String, $channel: String) {
  products(
    first: $first
    after: $after
    last: $last
    before: $before
    channel: $channel
  ) {
    edges {
      node {
        id
        name
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    fragment PageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}`) as unknown as TypedDocumentString<GetPoductList, GetPoductListVariables>;