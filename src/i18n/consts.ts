import {getCanonicalLocales} from '@/lib/tools/get-canonical-locales';

export const DEFAULT_LOCALE = 'en-US';
export const AVAILABLE_LOCALES = [DEFAULT_LOCALE] as const;

// https://tc39.es/ecma402/#sec-canonicalizelocalelist
// Throws an error if language tag is not structurally valid
void getCanonicalLocales(...AVAILABLE_LOCALES);

export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number];

export const DEFAULT_CHANNEL = 'default-channel';
export const AVAILABLE_CHANNELS = [DEFAULT_CHANNEL, 'channel-pln'] as const;

export type AvailableChannel = (typeof AVAILABLE_CHANNELS)[number];
