import invariant from 'tiny-invariant';

const maxPageSize = Number(process.env['MAX_PAGE_SIZE']);
invariant(!isNaN(maxPageSize));

export const MAX_PAGE_SIZE = maxPageSize;

const categoryBound = Number(process.env['CATEGORY_BOUND']);
invariant(!isNaN(categoryBound));

export const CATEGORY_BOUND = categoryBound;

const collectionBound = Number(process.env['COLLECTION_BOUND']);
invariant(!isNaN(collectionBound));

export const COLLECTION_BOUND = collectionBound;
