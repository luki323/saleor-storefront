import {DEFAULT_CHANNEL} from '@/i18n/consts';
import {isAvailableChannel} from '@/i18n/tools/is-available-channel';
import {isDefined} from '@/tools/is-defined';
import {raise} from '@/tools/raise';

import type {AvailableChannel, AvailableLocale} from '@/i18n/consts';

const localeToChannel: Record<AvailableLocale, AvailableChannel> = {
  'en-US': 'default-channel',
};

export function negotiateChannel(
  locale: AvailableLocale,
  preferredChannel?: string,
): AvailableChannel {
  if (!isDefined(preferredChannel)) {
    return (
      localeToChannel[locale] ??
      raise(`Inexhaustive locale check for ${locale} locale`)
    );
  }
  if (isAvailableChannel(preferredChannel)) {
    return preferredChannel;
  }
  return DEFAULT_CHANNEL;
}
