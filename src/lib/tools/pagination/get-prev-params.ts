import {getDecodedCursors} from './get-decoded-cursors';
import {setCursors} from './set-cursors';

export function getPrevParams(searchParams: URLSearchParams, prefix: string) {
  const updatedSearchParams = new URLSearchParams(searchParams);
  const decodedCursors = getDecodedCursors(searchParams, prefix);

  if (decodedCursors.length === 0) {
    return null;
  }
  setCursors(updatedSearchParams, decodedCursors.slice(0, -1), prefix);

  return updatedSearchParams;
}
