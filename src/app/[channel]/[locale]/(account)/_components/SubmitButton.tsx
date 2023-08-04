import type {ReactNode} from 'react';

import {Button} from '@/lib/components/ui/Button';
import {Spinner} from '@/lib/components/ui/Spinner';
import {cn} from '@/lib/tools/cn';

interface Props {
  readonly children: ReactNode;
  readonly loading: boolean;
}

export function SubmitButton({children, loading}: Props) {
  return (
    <Button type="submit" disabled={loading}>
      {loading && (
        <span className={cn('mr-2')}>
          <Spinner />
        </span>
      )}
      {children}
    </Button>
  );
}
