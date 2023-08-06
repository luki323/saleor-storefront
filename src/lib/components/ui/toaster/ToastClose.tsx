import {Cross2Icon} from '@radix-ui/react-icons';

import {cn} from '@/lib/tools/cn';

import {IconButton} from '../IconButton';

interface Props {
  readonly onClick: () => void;
}

export function ToastClose({onClick}: Props) {
  return (
    <IconButton
      label="Close"
      className={cn(
        'absolute right-2 top-2 rounded-md p-1 text-primary/50 opacity-0 transition-opacity hover:text-primary focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      )}
      onClick={onClick}>
      <Cross2Icon className={cn('h-4 w-4')} />
    </IconButton>
  );
}
