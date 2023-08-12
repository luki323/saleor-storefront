import type {RedirectType} from 'next/dist/client/components/redirect';

export type RedirectFn = (route: string, type?: RedirectType) => never;
