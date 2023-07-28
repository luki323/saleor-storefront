import type {AvailableLocle} from '../consts';
import type {ResolvedIntlConfig} from '@formatjs/intl';

export async function loadCompiledMessages(locale: AvailableLocle) {
  const compiledMessages: ResolvedIntlConfig['messages'] = await import(
    `@/i18n/compiled-messages/${locale}.json`,
    {assert: {type: 'json'}}
  );
  return compiledMessages;
}
