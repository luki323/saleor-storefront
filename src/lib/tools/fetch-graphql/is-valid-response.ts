import {raise} from '../raise';

import {MIME_TYPES} from './consts';

export function isValidResponse(response: Response) {
  const contentTypeHeader =
    response.headers.get('Content-Type') ??
    raise(`The Content-Type response header is missing`);

  return (
    // https://graphql.github.io/graphql-over-http/draft/#sec-Processing-the-response
    (new RegExp(MIME_TYPES.JSON, 'i').test(contentTypeHeader) &&
      response.status === 200) ||
    // https://graphql.github.io/graphql-over-http/draft/#sec-application-graphql-response-json
    (new RegExp(MIME_TYPES.GRAPHQL_RESPONSE_JSON, 'i').test(
      contentTypeHeader,
    ) &&
      response.ok)
  );
}
