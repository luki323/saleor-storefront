'use client';

import type {VariantProps} from 'cva';
import {cva} from 'cva';

import {IntlLink} from '@/i18n/components/IntlLink';
import {useBasePathRelative} from '@/lib/hooks/use-base-path-relative';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props extends VariantProps<typeof styles> {
  readonly href: string;
}

const styles = cva(
  'flex flex-col text-center text-sm text-blue transition-colors after:pointer-events-none after:invisible after:h-0 after:select-none after:overflow-hidden after:font-bold after:content-[attr(data-text)] hover:text-blue-hovered',
  {
    variants: {
      disabled: {
        true: 'pointer-events-none cursor-text !text-grey',
      },
    },
  },
);

export function BreadcrumbLink({
  children,
  href,
  disabled,
}: PropsWithChildren<Props>) {
  const basePathRelative = useBasePathRelative();

  return (
    <IntlLink
      href={href}
      className={cn(
        styles({
          disabled,
        }),
        basePathRelative === href && 'font-bold !text-white',
      )}
      data-text={children}>
      {children}
    </IntlLink>
  );
}
