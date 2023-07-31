import {isDefined} from '@/lib/tools/is-defined';

import {MAX_PAGE_SIZE} from '../consts';

import type {FetchCursors} from '../types';

export function createCursorsStore() {
  let cursors: readonly string[] = [];
  let isLoading = false;

  async function loadCursors(fetchCursors: FetchCursors) {
    if (!isLoading) {
      cursors = [];
    }
    const after = cursors.at(-1);

    const result = await fetchCursors({
      first: MAX_PAGE_SIZE,
      ...(isDefined(after) && {after}),
    });
    cursors = cursors.concat(result.cursors);

    if ((isLoading = result.hasNextPage)) {
      return loadCursors(fetchCursors);
    }
  }
  function getTotalPages(pageSize: number) {
    return Math.ceil(cursors.length / pageSize);
  }
  function getNextPage(currentPage: number, pageSize: number) {
    if (currentPage >= getTotalPages(pageSize)) {
      return null;
    }
    return currentPage + 1;
  }
  function getPrevPage(currentPage: number) {
    if (currentPage <= 1) {
      return null;
    }
    return currentPage - 1;
  }
  function changePageSize(
    {
      currentPage,
      pageSize,
    }: {
      readonly currentPage: number;
      readonly pageSize: number;
    },
    nextPageSize: number,
  ) {
    let nextPage = Math.ceil((currentPage * pageSize) / nextPageSize);

    // Handle navigation to lower page sizes
    while (true) {
      const end = nextPage * nextPageSize;
      const start = end - nextPageSize;

      if (cursors.slice(start, end).length) {
        break;
      }
      --nextPage;
    }
    return nextPage;
  }
  function pageNumberPageSizeToCursor(pageNumber: number, pageSize: number) {
    const currentIdx = (pageNumber - 1) * pageSize - 1;
    return cursors[currentIdx] ?? null;
  }
  return {
    loadCursors,
    getNextPage,
    getPrevPage,
    changePageSize,
    pageNumberPageSizeToCursor,
  };
}
