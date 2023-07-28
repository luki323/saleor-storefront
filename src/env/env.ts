import {raise} from '@/tools/raise';

export const GRAPHQL_ENDPOINT =
  process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT'] ??
  raise('Not found NEXT_PUBLIC_GRAPHQL_ENDPOINT');
