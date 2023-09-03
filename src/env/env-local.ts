import invariant from 'tiny-invariant';

import {isDefined} from '@/lib/tools/is-defined';

const cloudOrigin = process.env['NEXT_PUBLIC_SALEOR_ORIGIN'];
invariant(isDefined(cloudOrigin));

export const SALEOR_ORIGIN = cloudOrigin;

const graphQLEndpoint = process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT'];
invariant(isDefined(graphQLEndpoint));

export const GRAPHQL_ENDPOINT = graphQLEndpoint;

const origin = process.env['NEXT_PUBLIC_ORIGIN'];
invariant(isDefined(origin));

export const ORIGIN = origin;
