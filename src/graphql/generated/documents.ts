// @ts-nocheck
import type * as Types from './types';

import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type ExampleQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ExampleQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', totalCount?: number | null } | null };

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

export const ExampleQueryDocument = new TypedDocumentString(`
    query exampleQuery {
  products {
    totalCount
  }
}
    `) as unknown as TypedDocumentString<ExampleQuery, ExampleQueryVariables>;