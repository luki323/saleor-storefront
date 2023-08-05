import 'server-only';

import type {ResolvedIntlConfig} from '@formatjs/intl';

import type {AvailableLocale} from '../consts';

export async function loadCompiledMessages(
  locale: AvailableLocale,
): Promise<ResolvedIntlConfig['messages']> {
  const compiledMessagesModule = await import(
    `@/i18n/compiled-messages/${locale}.json`,
    {assert: {type: 'json'}}
  );
  return compiledMessagesModule.default;
}
