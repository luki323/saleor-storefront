import {createServerContext, useContext} from 'react';

import {DEFAULT_CHANNEL} from '../consts';

import type {AvailableChannel} from '../consts';

export const ChannelContext = createServerContext<AvailableChannel>(
  'ChannelContext',
  DEFAULT_CHANNEL,
);

export function useChannel() {
  return useContext(ChannelContext);
}
