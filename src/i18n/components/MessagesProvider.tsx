import {MessagesProvider as MessagesProviderImpl} from '../contexts/messages-context';
import {loadCompiledMessages} from '../tools/load-compiled-messages';

import type {AvailableLocle} from '../consts';
import type {ReactNode} from 'react';

type Props = {
  readonly children: ReactNode;
  readonly locale: AvailableLocle;
};

export async function MessagesProvider({children, locale}: Props) {
  const messages = await loadCompiledMessages(locale);

  return (
    <MessagesProviderImpl messages={messages}>{children}</MessagesProviderImpl>
  );
}
