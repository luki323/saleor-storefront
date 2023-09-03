import {getNextParams} from './get-next-params';
import {getPrevParams} from './get-prev-params';

export function getPrevNextParams(
  ...[searchParams, pageInfo, prefix]: Parameters<typeof getNextParams>
) {
  return [
    getPrevParams(searchParams, prefix),
    getNextParams(searchParams, pageInfo, prefix),
  ] as const;
}
