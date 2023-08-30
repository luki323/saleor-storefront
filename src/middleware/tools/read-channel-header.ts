import 'server-only';

import {headers} from 'next/headers';
import invariant from 'tiny-invariant';

import {isAvailableChannel} from '@/i18n/tools/is-available-channel';
import {isDefined} from '@/lib/tools/is-defined';

import {CUSTOM_REQUEST_HEADERS} from '../consts';

export function readChannelHeader() {
  const channel = headers().get(CUSTOM_REQUEST_HEADERS.CHANNEL);

  invariant(
    isDefined(channel) && isAvailableChannel(channel),
    'Invalid channel',
  );
  return channel;
}
