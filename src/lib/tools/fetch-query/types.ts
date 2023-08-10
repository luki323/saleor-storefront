import type {TypedDocumentString} from '@/graphql/generated/documents';

import type {Request} from './request';

export type ObjMap = Record<string, unknown>;

export interface RequestParameters<Query, Variables extends ObjMap> {
  readonly query: TypedDocumentString<Query, Variables>;
  readonly operationName?: string;
  readonly variables?: Variables;
  readonly extensions?: ObjMap;
}

export interface RequestInit<Query, Variables extends ObjMap>
  extends Omit<globalThis.RequestInit, 'body'> {
  readonly params: RequestParameters<Query, Variables>;
}

export type RequestInfo<Query, Variables extends ObjMap> =
  | string
  | Request<Query, Variables>;
