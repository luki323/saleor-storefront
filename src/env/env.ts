import {raise} from '@/tools/raise';

const {env} = process;

export const GRAPHQL_ENDPOINT =
  env['NEXT_PUBLIC_GRAPHQL_ENDPOINT'] ??
  raise('Not found NEXT_PUBLIC_GRAPHQL_ENDPOINT');
