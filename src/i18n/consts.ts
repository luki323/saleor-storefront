import {getCanonicalLocales} from './tools/get-canonical-locales';

export const DEFAULT_LOCALE = 'en-US';
export const AVAILABLE_LOCALES = [DEFAULT_LOCALE] as const;

export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number];

// Throws an error if language tag isn't structurally valid. See: https://tc39.es/ecma402/#sec-canonicalizelocalelist
void getCanonicalLocales(AVAILABLE_LOCALES);

export const DEFAULT_CHANNEL = 'default-channel';
export const AVAILABLE_CHANNELS = [DEFAULT_CHANNEL, 'channel-pln'] as const;

export type AvailableChannel = (typeof AVAILABLE_CHANNELS)[number];
