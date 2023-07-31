import type {ResolvedIntlConfig} from '@formatjs/intl';

import type {AvailableLocale} from '../consts';

export async function loadCompiledMessages(locale: AvailableLocale) {
  const compiledMessagesModule = await import(
    `@/i18n/compiled-messages/${locale}.json`,
    {assert: {type: 'json'}}
  );
  const compiledMessages: ResolvedIntlConfig['messages'] =
    compiledMessagesModule.default;

  return compiledMessages;
}
