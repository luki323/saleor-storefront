import {atom} from 'jotai';

type LoadingStyle = 'pagination' | 'loadMore';

export const loadingStyleAtom = atom<LoadingStyle>('loadMore');
