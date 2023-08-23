import invariant from 'tiny-invariant';

import {isDefined} from '../type-guards/is-defined';

export function isValidResponse(response: Response) {
  const contentTypeHeader = response.headers.get('Content-Type');

  invariant(
    isDefined(contentTypeHeader),
    "The 'Content-Type' field is missing in the response headers",
  );
  return (
    (/application\/json/i.test(contentTypeHeader) && response.status === 200) ||
    (/application\/graphql-response\+json/i.test(contentTypeHeader) &&
      response.ok)
  );
}
