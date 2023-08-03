import {formatLocale} from '@/i18n/tools/format-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';

import type {HomeLayoutProps} from '../layout';
import {Header} from './_components/Header';

type Props = HomeLayoutProps;

export default async function ShopLayout({
  children,
  params: {channel, locale},
}: Props) {
  const languageCode = localeToLangCode(formatLocale(locale));

  return (
    <>
      <Header languageCode={languageCode} channel={channel} />
      <main>{children}</main>
    </>
  );
}
