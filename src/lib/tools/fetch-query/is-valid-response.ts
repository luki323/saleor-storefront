import {raise} from '../raise';

export function isValidResponse(response: Response) {
  const contentTypeHeader =
    response.headers.get('Content-Type') ??
    raise("The 'Content-Type' field is missing in the response headers");

  return (
    (/application\/json/i.test(contentTypeHeader) && response.status === 200) ||
    (/application\/graphql-response\+json/i.test(contentTypeHeader) &&
      response.ok)
  );
}
