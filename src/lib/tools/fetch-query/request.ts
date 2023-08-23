import type {
  ObjMap,
  RequestInfo,
  RequestInit,
  RequestParameters,
} from './types';

const DEFAULT_METHOD = 'POST';

export class Request<
  Query,
  Variables extends ObjMap,
> extends globalThis.Request {
  constructor(
    input: RequestInfo<Query, Variables> | URL,
    init?: RequestInit<Query, Variables>,
    serializeParams: (
      params: RequestParameters<Query, Variables>,
    ) => BodyInit = JSON.stringify,
  ) {
    if (!init) {
      super(input);
      return;
    }
    const method = init.method?.toUpperCase() ?? DEFAULT_METHOD;

    switch (method) {
      case 'POST': {
        super(input, {
          ...init,
          method,
          body: serializeParams(init.params),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept:
              'application/graphql-response+json; charset=UTF-8, application/json; charset=UTF-8',
            ...init.headers,
          },
        });
        break;
      }
      case 'GET': {
        const url = new URL(input instanceof Request ? input.url : input);
        const searchParams = new URLSearchParams(url.searchParams);

        const params = init.params;

        searchParams.set('query', params.query.toString());

        if (params.operationName) {
          searchParams.set('operationName', params.operationName);
        }
        if (params.variables) {
          searchParams.set('variables', JSON.stringify(params.variables));
        }
        if (params.extensions) {
          searchParams.set('extensions', JSON.stringify(params.extensions));
        }
        super(url, {
          ...(input instanceof Request && input),
          ...init,
          headers: {
            Accept:
              'application/graphql-response+json; charset=UTF-8, application/json; charset=UTF-8',
            ...init.headers,
          },
        });
        break;
      }
      default: {
        throw new Error(`HTTP method invalid or not supported: ${method}`);
      }
    }
  }
}
