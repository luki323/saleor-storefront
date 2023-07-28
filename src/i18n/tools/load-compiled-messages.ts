import type {AvailableLocle} from '../consts';
import type {ResolvedIntlConfig} from '@formatjs/intl';

export async function loadCompiledMessages(locale: AvailableLocle) {
  const compiledMessagesModule = await import(
    `@/i18n/compiled-messages/${locale}.json`,
    {assert: {type: 'json'}}
  );
  const compiledMessages: ResolvedIntlConfig['messages'] =
    compiledMessagesModule.default;

  return compiledMessages;
}
