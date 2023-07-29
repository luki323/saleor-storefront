'use client';

import Link from 'next/link';
import {forwardRef} from 'react';

import {useChannel} from '../contexts/channel-context';
import {useLocale} from '../contexts/locale-context';

import type {LinkProps} from 'next/link';

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
