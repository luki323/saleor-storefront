import invariant from 'tiny-invariant';

import {isDefined} from '@/lib/tools/is-defined';

const saleorOrigin = process.env['NEXT_PUBLIC_SALEOR_ORIGIN'];
invariant(isDefined(saleorOrigin));
export const SALEOR_ORIGIN = saleorOrigin;

const graphqlEndpoint = process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT'];
invariant(isDefined(graphqlEndpoint));
export const GRAPHQL_ENDPOINT = graphqlEndpoint;

const origin = process.env['NEXT_PUBLIC_ORIGIN'];
invariant(isDefined(origin));
export const ORIGIN = origin;
