import type {InputHTMLAttributes} from 'react';
import {useEffect, useState} from 'react';
import {usePrevious} from 'usehooks';

import {useSearchProducts} from './use-search-products';

export function useSearchProductsEvent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, searchProducts] = useSearchProducts();
  const wasSearching = usePrevious(isSearching);

  useEffect(() => {
    !isSearching && wasSearching && setSearchTerm('');
  }, [isSearching, wasSearching]);

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    disabled: isSearching,
    value: searchTerm,
    onChange: (event) => setSearchTerm(event.target.value),
    onKeyDown: ({key}) => key === 'Enter' && searchProducts(searchTerm),
  };
  return [isSearching, inputProps] as const;
}
