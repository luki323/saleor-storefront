import {Button} from '@/lib/components/ui/Button';
import {Spinner} from '@/lib/components/ui/Spinner';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props {
  readonly loading: boolean;
}

export function SubmitButton({children, loading}: PropsWithChildren<Props>) {
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
