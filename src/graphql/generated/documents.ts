// @ts-nocheck
import type * as Types from './types';

import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type AccountError = { __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode };

export type TokenCreateVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type TokenCreate = { __typename?: 'Mutation', tokenCreate?: { __typename?: 'CreateToken', token?: string | null, refreshToken?: string | null, csrfToken?: string | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type ChangePasswordVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type ChangePassword = { __typename?: 'Mutation', setPassword?: { __typename?: 'SetPassword', token?: string | null, refreshToken?: string | null, csrfToken?: string | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type ConfirmAccountVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
}>;


export type ConfirmAccount = { __typename?: 'Mutation', confirmAccount?: { __typename?: 'ConfirmAccount', user?: { __typename?: 'User', isActive: boolean } | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type ForgotPasswordVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  redirectUrl: Types.Scalars['String']['input'];
  channel: Types.Scalars['String']['input'];
}>;


export type ForgotPassword = { __typename?: 'Mutation', forgotPassword?: { __typename?: 'RequestPasswordReset', errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type SignUpVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
  channel: Types.Scalars['String']['input'];
  redirectUrl: Types.Scalars['String']['input'];
}>;


export type SignUp = { __typename?: 'Mutation', accountRegister?: { __typename?: 'AccountRegister', requiresConfirmation?: boolean | null, user?: { __typename?: 'User', email: string } | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type GetHeaderMenuVariables = Types.Exact<{
  languageCode: Types.LanguageCodeEnum;
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetHeaderMenu = { __typename?: 'Query', menu?: { __typename?: 'Menu', items?: Array<{ __typename?: 'MenuItem', name: string, translation?: { __typename?: 'MenuItemTranslation', name: string } | null, category?: { __typename?: 'Category', slug: string } | null }> | null } | null };

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
export const AccountError = new TypedDocumentString(`
    fragment accountError on AccountError {
  field
  code
}
    `, {"fragmentName":"accountError"}) as unknown as TypedDocumentString<AccountError, unknown>;
export const ProductListItem = new TypedDocumentString(`
    fragment productListItem on Product {
  id
  name
  slug
}
    `, {"fragmentName":"productListItem"}) as unknown as TypedDocumentString<ProductListItem, unknown>;
export const PageInfo = new TypedDocumentString(`
    fragment pageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}
    `, {"fragmentName":"pageInfo"}) as unknown as TypedDocumentString<PageInfo, unknown>;
export const TokenCreateDocument = new TypedDocumentString(`
    mutation tokenCreate($email: String!, $password: String!) {
  tokenCreate(email: $email, password: $password) {
    token
    refreshToken
    csrfToken
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<TokenCreate, TokenCreateVariables>;
export const ChangePasswordDocument = new TypedDocumentString(`
    mutation changePassword($email: String!, $token: String!, $password: String!) {
  setPassword(email: $email, token: $token, password: $password) {
    token
    refreshToken
    csrfToken
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<ChangePassword, ChangePasswordVariables>;
export const ConfirmAccountDocument = new TypedDocumentString(`
    mutation confirmAccount($email: String!, $token: String!) {
  confirmAccount(email: $email, token: $token) {
    user {
      isActive
    }
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<ConfirmAccount, ConfirmAccountVariables>;
export const ForgotPasswordDocument = new TypedDocumentString(`
    mutation forgotPassword($email: String!, $redirectUrl: String!, $channel: String!) {
  forgotPassword: requestPasswordReset(
    email: $email
    redirectUrl: $redirectUrl
    channel: $channel
  ) {
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<ForgotPassword, ForgotPasswordVariables>;
export const SignUpDocument = new TypedDocumentString(`
    mutation signUp($email: String!, $password: String!, $channel: String!, $redirectUrl: String!) {
  accountRegister(
    input: {email: $email, password: $password, channel: $channel, redirectUrl: $redirectUrl}
  ) {
    user {
      email
    }
    errors {
      ...accountError
    }
    requiresConfirmation
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<SignUp, SignUpVariables>;
export const GetHeaderMenuDocument = new TypedDocumentString(`
    query getHeaderMenu($languageCode: LanguageCodeEnum!, $channel: String) {
  menu(name: "navbar", channel: $channel) {
    items {
      name
      translation(languageCode: $languageCode) {
        name
      }
      category {
        slug
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetHeaderMenu, GetHeaderMenuVariables>;
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
        ...productListItem
      }
    }
    pageInfo {
      ...pageInfo
    }
  }
}
    fragment productListItem on Product {
  id
  name
  slug
}
fragment pageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}`) as unknown as TypedDocumentString<GetProducts, GetProductsVariables>;