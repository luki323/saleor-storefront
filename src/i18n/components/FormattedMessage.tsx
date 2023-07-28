'use client';

import {useIntl} from '../hooks/use-intl';

import type {MessageDescriptor} from '@formatjs/intl';

type FormattedMessageProps = MessageDescriptor & {
  readonly values?: Record<string, string>;
};

export function FormattedMessage({
  values,
  ...descriptor
}: FormattedMessageProps) {
  const {intl} = useIntl();
  return intl.formatMessage(descriptor, values);
}
