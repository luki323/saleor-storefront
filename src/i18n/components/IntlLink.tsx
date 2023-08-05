'use client';

import type {LinkProps} from 'next/link';
import Link from 'next/link';
import {forwardRef} from 'react';

import {useChannel} from '../context/channel-context';
import {useLocale} from '../context/locale-context';

export const IntlLink: typeof Link = forwardRef(function IntlLink(
  {href: hrefProp, ...restProps},
  ref,
) {
  const pathname = `/${useChannel()}/${useLocale()}${
    typeof hrefProp === 'string' ? hrefProp : hrefProp.pathname
  }`;
  const href: LinkProps['href'] = {
    ...(typeof hrefProp !== 'string' && hrefProp),
    pathname,
  };

  return <Link ref={ref} href={href} {...restProps} />;
});
