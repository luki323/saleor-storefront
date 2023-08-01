import {useChannel} from '../channel-context';

export function getChannel() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useChannel();
}
