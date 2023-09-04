'use client';

import type {VariantProps} from 'cva';
import {cva} from 'cva';
import type {ComponentProps} from 'react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {useBasePathRelative} from '@/lib/hooks/use-base-path-relative';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

type Props = VariantProps<typeof styles> & ComponentProps<typeof IntlLink>;

const styles = cva(
  'flex flex-col text-center text-sm text-blue transition-colors after:pointer-events-none after:invisible after:h-0 after:select-none after:overflow-hidden after:font-bold after:content-[attr(data-text)] hover:text-blue-hovered',
  {
    variants: {
      disabled: {
        true: 'pointer-events-none cursor-text text-grey hover:text-grey',
      },
    },
  },
);

export function BreadcrumbLink({
  children,
  disabled,
  href,
  ...restProps
}: PropsWithChildren<Props>) {
  const basePathRelative = useBasePathRelative();

  return (
    <IntlLink
      href={href}
      className={cn(
        styles({
          disabled,
        }),
        basePathRelative === href && 'font-bold text-white hover:text-white',
      )}
      data-text={children}
      {...restProps}>
      {children}
    </IntlLink>
  );
}
