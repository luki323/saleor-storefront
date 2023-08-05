import type {AvailableChannel} from '../consts';
import {isAvailableChannel} from './is-available-channel';

export function assertAvailableChannel(
  channel: string,
): asserts channel is AvailableChannel {
  if (!isAvailableChannel(channel)) {
    throw new Error(`Not found ${channel} channel`);
  }
}
