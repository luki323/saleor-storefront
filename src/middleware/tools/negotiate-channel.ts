import type {AvailableChannel, AvailableLocale} from '@/i18n/consts';
import {DEFAULT_CHANNEL} from '@/i18n/consts';
import {isAvailableChannel} from '@/i18n/tools/is-available-channel';
import {raise} from '@/lib/tools/raise';
import {isDefined} from '@/lib/tools/type-guards/is-defined';

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
