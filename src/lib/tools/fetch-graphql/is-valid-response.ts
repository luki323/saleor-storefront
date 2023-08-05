import {raise} from '../raise';

export function isValidResponse(response: Response) {
  const contentTypeHeader =
    response.headers.get('Content-Type') ??
    raise(`The Content-Type response header is missing`);

  return (
    // https://graphql.github.io/graphql-over-http/draft/#sec-Processing-the-response
    (/application\/json/i.test(contentTypeHeader) && response.status === 200) ||
    // https://graphql.github.io/graphql-over-http/draft/#sec-application-graphql-response-json
    (/application\/graphql-response+json/i.test(contentTypeHeader) &&
      response.ok)
  );
}
