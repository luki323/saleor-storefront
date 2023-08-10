import {raise} from '@/lib/tools/raise';

import {formatErrorMessage} from './tools/format-error-message';

export const GRAPHQL_ENDPOINT =
  process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT'] ??
  raise(formatErrorMessage('NEXT_PUBLIC_GRAPHQL_ENDPOINT'));

export const ORIGIN =
  process.env['NEXT_PUBLIC_ORIGIN'] ??
  raise(formatErrorMessage('NEXT_PUBLIC_ORIGIN'));
