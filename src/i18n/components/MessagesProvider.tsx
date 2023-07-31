import type {ReactNode} from 'react';

import type {AvailableLocale} from '../consts';
import {MessagesProvider as MessagesProviderImpl} from '../contexts/messages-context';
import {loadCompiledMessages} from '../tools/load-compiled-messages';

type Props = {
  readonly children: ReactNode;
  readonly locale: AvailableLocale;
};

export async function MessagesProvider({children, locale}: Props) {
  const messages = await loadCompiledMessages(locale);

  return (
    <MessagesProviderImpl messages={messages}>{children}</MessagesProviderImpl>
  );
}
