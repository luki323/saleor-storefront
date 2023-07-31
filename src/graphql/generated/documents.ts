// @ts-nocheck
import type * as Types from './types';

import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type ProductListItem = { __typename?: 'Product', id: string, name: string, slug: string };

export type GetProductCursorsVariables = Types.Exact<{
  first: Types.Scalars['Int']['input'];
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetProductCursors = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', cursor: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } | null };

export type GetProductsVariables = Types.Exact<{
  first: Types.Scalars['Int']['input'];
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetProducts = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, slug: string } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean } } | null };

export type SignUpVariables = Types.Exact<{
  accountRegisterInput: Types.AccountRegisterInput;
}>;


export type SignUp = { __typename?: 'Mutation', accountRegister?: { __typename?: 'AccountRegister', errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }>, user?: { __typename?: 'User', id: string } | null } | null };

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
export const ProductListItem = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  slug
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItem, unknown>;
export const PageInfo = new TypedDocumentString(`
    fragment PageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}
    `, {"fragmentName":"PageInfo"}) as unknown as TypedDocumentString<PageInfo, unknown>;
export const GetProductCursorsDocument = new TypedDocumentString(`
    query getProductCursors($first: Int!, $after: String, $channel: String) {
  products(first: $first, after: $after, channel: $channel) {
    edges {
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
}
    `) as unknown as TypedDocumentString<GetProductCursors, GetProductCursorsVariables>;
export const GetProductsDocument = new TypedDocumentString(`
    query getProducts($first: Int!, $after: String, $channel: String) {
  products(first: $first, after: $after, channel: $channel) {
    edges {
      node {
        ...ProductListItem
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
}
fragment PageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}`) as unknown as TypedDocumentString<GetProducts, GetProductsVariables>;
export const SignUpDocument = new TypedDocumentString(`
    mutation signUp($accountRegisterInput: AccountRegisterInput!) {
  accountRegister(input: $accountRegisterInput) {
    errors {
      field
      code
    }
    user {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<SignUp, SignUpVariables>;