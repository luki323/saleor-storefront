import {AVAILABLE_CHANNELS} from '../consts';

import type {AvailableChannel} from '../consts';

export function isAvailableChannel(
  channel: string,
): channel is AvailableChannel {
  const availableChannels: readonly string[] = AVAILABLE_CHANNELS;
  return availableChannels.includes(channel);
}
